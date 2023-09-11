import { Highlight, themes } from 'prism-react-renderer';
import React from 'react';

import useCodeAnim from '@/hooks/useCodeAnim';

interface ICodeBlocksProps {
  anim?: boolean;
}

const CodeBlocks: React.FC<ICodeBlocksProps> = ({
  anim = true,
}): JSX.Element => {
  const nodeJSText = `
    import axios from 'axios';

    const options = {
      method: 'POST',
      url: 'https://likeness-api.vercel.app/api/v1/likeness',
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
  const { text } = useCodeAnim(nodeJSText);

  return (
    <div
      className='border-light-blue h-[535px] w-[800px] rounded-lg border'
      style={{
        boxShadow: '0px 1px 100px -60px #007FFF',
      }}
    >
      <Highlight
        code={anim ? text : nodeJSText}
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

export default CodeBlocks;
