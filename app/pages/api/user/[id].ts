// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

export default function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ id, name: 'Example user' });
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
