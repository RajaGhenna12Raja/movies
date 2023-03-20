import Image from 'next/image';
import React from 'react';

export default function Loading() {
  return (
    <div className='flex justify-center'>
      <Image src='spinner.svg' alt='loading...' height={96} width={96} />
    </div>
  );
}
