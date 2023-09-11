import { NextApiRequest, NextApiResponse } from 'next';

import { method } from '@/lib/api/method';
import { db } from '@/lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { user } = req.body;

    if (!user) {
      return res.status(401).json({
        message: 'You must be logged in to revoke an API key.',
      });
    }

    const existingApiKey = await db.apiKey.findFirst({
      where: { userId: user?.id, enabled: true },
    });

    if (!existingApiKey) {
      return res
        .status(500)
        .json({ message: 'This API key could not be revoked.' });
    }

    await db.apiKey.update({
      where: { id: existingApiKey.id },
      data: {
        enabled: false,
      },
    });

    return res
      .status(200)
      .json({ message: 'API key revoked.', data: existingApiKey });
  } catch (error) {
    if (error) {
      return res.status(400).json({ message: `${error}` });
    }

    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default method(['POST'], handler);
