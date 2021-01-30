import { rest } from 'msw';
import * as user from './__mock__/user.json';

const handlers = [
  rest.get('/api/user/1', async (req, res, ctx) =>
    res(ctx.status(200), ctx.json(user))
  ),
];
export { handlers };
