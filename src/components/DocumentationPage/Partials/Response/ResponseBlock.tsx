import { Highlight, themes } from 'prism-react-renderer';
import React from 'react';

import { useAppSelector } from '@/store/store-hooks';
const ResponseBlock: React.FC = (): JSX.Element => {
  const selectedCode = useAppSelector(
    (state) => state.global.selectedResponseCode
  );
  const responses = [
    {
      code: 200,
      response: `
    {
      "data": {
        "likeness": 0.7
      }
    }
  `,
    },
    {
      code: 401,
      response: `
    {
      "error": {
        "message": "Unauthorized"
      }
    }
  `,
    },
    {
      code: 403,
      response: `
    {
      "error": {
        "message": "Forbidden"
      }
    }
  `,
    },
  ];

  const selectedResponse = responses.find(
    (response) => response.code === selectedCode
  );
  return (
    <div
      className='border-light-blue flex h-[200px] w-[600px] items-center rounded-lg border'
      style={{
        boxShadow: '0px 1px 100px -70px #007FFF',
      }}
    >
      <Highlight
        code={selectedResponse?.response || ''}
        language='javascript'
        theme={themes.nightOwl}
      >
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
export default ResponseBlock;
