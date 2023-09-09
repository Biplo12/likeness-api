import { CopyIcon } from 'lucide-react';
import React from 'react';
import { Tooltip } from 'react-tooltip';

import useCopyToClipboard from '@/hooks/useCopyToClipboard';

interface ICopyButtonProps {
  apiKey: string;
}

const CopyButton: React.FC<ICopyButtonProps> = ({ apiKey }): JSX.Element => {
  const { isCopied, handleCopyToClipboard } = useCopyToClipboard();

  return (
    <>
      <Tooltip
        id='copy-key'
        place='top'
        style={{
          backgroundColor: isCopied ? '#007FFF' : '#000',
        }}
      >
        {isCopied && (
          <div className='font-bold leading-[1.4] tracking-tighter text-gray-300'>
            Copied!
          </div>
        )}
      </Tooltip>

      <button
        data-tip
        data-tooltip-id='copy-key'
        onClick={() => handleCopyToClipboard(apiKey)}
      >
        <CopyIcon size={24} className='inline-block' />
      </button>
    </>
  );
};
export default CopyButton;
