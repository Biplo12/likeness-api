import { NextApiRequest, NextApiResponse } from 'next';

import { method } from '@/lib/api/method';
import { db } from '@/lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userId } = req.query;

    const existingApiKey = await db.apiKey.findFirst({
      where: { userId: userId as string, enabled: true },
    });

    if (!existingApiKey) {
      return res.status(400).json({
        message: 'You do not have a valid API key.',
      });
    }

    return res
      .status(200)
      .json({ message: 'API key found.', data: existingApiKey });
  } catch (error) {
    if (error) {
      return res.status(400).json({ message: `${error}` });
    }

    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default method(['GET'], handler);
