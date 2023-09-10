import { NextApiRequest, NextApiResponse } from 'next';

import { method } from '@/lib/api/method';
import { db } from '@/lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { user } = req.body;

    if (!user) {
      return res.status(401).json({
        message: 'You must be logged in.',
      });
    }

    const isUserInDb = await db.user.findFirst({
      where: { userId: user?.id },
    });

    if (!isUserInDb) {
      await db.user.create({
        data: {
          userId: user?.id,
          email: user?.email,
          image: user?.imageUrl,
          name: user?.fullName,
        },
      });
      return res.status(200).json({ message: 'Account created' });
    }

    return res.status(200).json({ message: 'Account already exists' });
  } catch (error) {
    if (error) {
      return res.status(400).json({ message: `${error}` });
    }

    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default method(['POST'], handler);
