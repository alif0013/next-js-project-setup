import Counter from '@/components/Counter/Counter';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>This is my first Next js app</h1>

      <Counter></Counter>

      {/* redirect to the about page  */}
      <Link href='/about'>
        <button className="btn btn-active btn-secondary mr-2 mt-8">About Page Open</button>
      </Link>

      <Link href='/contact'>
        <button className="btn btn-active btn-secondary mt-8">Contact Page Open</button>
      </Link>


    </div>
  );
};

export default HomePage;