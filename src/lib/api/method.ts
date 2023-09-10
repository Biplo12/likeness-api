import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export function method(methods: string[], handler: NextApiHandler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (!req.method || !methods.includes(req.method)) {
      return res.status(405).json({
        error: {
          code: 405,
          message: `Method ${req.method} not allowed`,
        },
      });
    }

    return handler(req, res);
  };
}
