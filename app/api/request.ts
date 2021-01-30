import { Headers, RequestOptions, SearchParams } from './api.interfaces';

export function request<T>(url: string, options?: RequestOptions): Promise<T> {
  const search = formatSearchParams(options?.params);
  url = window.location.origin + url;

  const request = new Request(search ? `${url}?${search}` : url, {
    method: options?.method || 'GET',
    headers: getHeaders(options?.headers),
    body: options?.body,
  });

  return fetch(request).then((res) => res.json());
}

export function formatSearchParams(
  params: SearchParams | undefined
): string | undefined {
  return params && new URLSearchParams(params).toString();
}

export function getHeaders(headers: Headers = {}): Headers {
  return {
    Accept: 'application/json',
    ...headers,
  };
}

export function removeEmptyParams(params: SearchParams): SearchParams {
  return Object.entries(params)
    .filter(([, value]) => value !== '')
    .reduce((allParams, [key, value]) => ({ ...allParams, [key]: value }), {});
}
