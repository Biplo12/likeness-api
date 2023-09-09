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
          backgroundColor: isCopied ? '#18AC7A' : '#000',
        }}
      >
        {isCopied && (
          <div className='text-center text-xs'>
            <p className='font-bold'>Copied!</p>
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
