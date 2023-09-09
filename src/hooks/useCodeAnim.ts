import { useEffect, useState } from 'react';

const useCodeAnim = (code: string) => {
  const [text, setText] = useState('');
  const animationDelay = 150;

  useEffect(() => {
    let i = 0;
    if (!code) return;
    setTimeout(() => {
      const intervalId = setInterval(() => {
        setText(code?.slice(0, i));
        i++;
        if (i > code?.length) {
          clearInterval(intervalId);
        }
      }, 15);

      return () => clearInterval(intervalId);
    }, animationDelay);
  }, [code]);

  return { text };
};

export default useCodeAnim;
