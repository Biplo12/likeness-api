import { NextApiRequest, NextApiResponse } from 'next';

import { method } from '@/lib/api/method';
import { db } from '@/lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { text1, text2 } = req.body;
    if (!text1 || !text2) {
      return res
        .status(400)
        .json({ message: 'Bad Request. Missing a required parameter' });
    }

    const apiKey = req.headers.authorization;

    if (!apiKey) {
      return res.status(401).json({ message: 'Unauthorized. Missing API Key' });
    }

    const validApiKey = await db.apiKey.findFirst({
      where: {
        key: apiKey,
        enabled: true,
      },
    });

    if (!validApiKey) {
      return res.status(401).json({ message: 'Unauthorized. Invalid API Key' });
    }
    const calculateLikeness = (text1: string, text2: string) => {
      const text1Array = text1.split('');
      const text2Array = text2.split('');

      const text1Length = text1Array.length;
      const text2Length = text2Array.length;

      const maxLength = Math.max(text1Length, text2Length);

      let likeness = 0;

      for (let i = 0; i < maxLength; i++) {
        if (text1Array[i] === text2Array[i]) {
          likeness++;
        }
      }

      return likeness / maxLength;
    };

    const duration = Date.now() - Number(req.headers['x-request-start'] || 0);

    await db.apiRequest.create({
      data: {
        duration,
        method: req.method as string,
        path: req.url as string,
        status: 200,
        apiKeyId: validApiKey.id,
        usedApiKey: validApiKey.key,
      },
    });

    return res
      .status(200)
      .json({ message: 'Success', likeness: calculateLikeness(text1, text2) });
  } catch (error) {
    if (error) {
      return res.status(400).json({ message: `${error}` });
    }

    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default method(['POST'], handler);
