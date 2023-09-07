import React from 'react';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { setLanguage } from '@/state/globalSlice';
const CodeSwitcher: React.FC = (): JSX.Element => {
  const selectedLang = useAppSelector((state) => state.global.selectedLanguage);
  const dispatch = useAppDispatch();
  const langs = ['NodeJS', 'Python'];
  const handleLangChange = (lang: string) => {
    dispatch(setLanguage(lang));
  };
  return (
    <div className='inline-flex items-center justify-center rounded-md bg-slate-800 p-1'>
      {langs.map((lang, index) => (
        <button
          key={index}
          className={`${
            lang === selectedLang ? 'bg-dark-bg' : ''
          } text-dark-white min-w-[100px] rounded-md p-1.5`}
          onClick={() => handleLangChange(lang)}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};
export default CodeSwitcher;
