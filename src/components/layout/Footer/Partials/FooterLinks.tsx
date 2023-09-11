import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import React, { Fragment } from 'react';
const FooterLinks: React.FC = (): JSX.Element => {
  const footerLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Biplo12',
      icon: <GithubIcon size={18} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/robert-si%C5%84ski-037398227',
      icon: <LinkedinIcon size={18} />,
    },
    {
      name: 'Mail',
      url: 'mailto:robert.sinski@outlook.com',
      icon: <MailIcon size={18} />,
    },
  ];
  return (
    <div className='flex items-center justify-center gap-2'>
      {footerLinks.map((link, index) => (
        <Fragment key={index}>
          <Link
            key={index}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-dark-white hover:text-light-blue flex items-center justify-center gap-2'
          >
            {link.icon}
          </Link>
          {index !== footerLinks.length - 1 && (
            <div className='text-dark-white font-bold opacity-25'>/</div>
          )}
        </Fragment>
      ))}
    </div>
  );
};
export default FooterLinks;
