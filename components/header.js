import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className='p-5 bg-[#292961] shadow-slate-400'>
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <a className='text-white ml-4'>Event Landing Page</a>
        </Link>
        <Link href='/developer'>
          <a className='text-white ml-4'>Developer Page</a>
        </Link>
      </div>
    </header>
  );
};
