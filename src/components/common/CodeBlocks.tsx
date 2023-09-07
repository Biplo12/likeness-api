import { Highlight, themes } from 'prism-react-renderer';
import React, { useEffect, useState } from 'react';

const CodeBlocks: React.FC = (): JSX.Element => {
  const nodeJSText = `
    import axios from 'axios';

    const options = {
      method: 'POST',
      url: 'https://likeness.com/api/v1/likeness',
      data: {
        text1: 'First text',
        text2: 'Second text'
      },
      headers: {
        'Authorization': 'YOUR_API_KEY',
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  `;
  const [text, setText] = useState('');
  const animationDelay = 150;

  useEffect(() => {
    let i = 0;
    setTimeout(() => {
      const intervalId = setInterval(() => {
        setText(nodeJSText.slice(0, i));
        i++;
        if (i > nodeJSText.length) {
          clearInterval(intervalId);
        }
      }, 15);

      return () => clearInterval(intervalId);
    }, animationDelay);
  }, [nodeJSText]);

  return (
    <div
      className='border-light-blue min-h-[535px] min-w-[800px] rounded-lg border'
      style={{
        boxShadow: '0px 1px 100px -60px #007FFF',
      }}
    >
      <Highlight code={text} language='javascript' theme={themes.nightOwl}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={
              className +
              'no-scrollbar w-fit bg-transparent py-0 transition-all duration-100'
            }
          >
            {tokens.map((line, i) => {
              const { ...rest } = getLineProps({ line, key: i });
              return (
                <div
                  key={`line-${i}`}
                  style={{ position: 'relative' }}
                  {...rest}
                >
                  {line.map((token, index) => {
                    const { ...props } = getTokenProps({ token, i });
                    return <span key={index} {...props} />;
                  })}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlocks;
