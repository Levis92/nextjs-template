export interface SearchParams {
  [key: string]: string;
}

export interface Headers {
  'Request-Id'?: string;
  Accept?: string;
  Authorization?: string;
  [key: string]: string;
}

export interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  params?: SearchParams;
  headers?: { [header: string]: string };
  body?: BodyInit;
}
