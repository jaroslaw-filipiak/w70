'use client';
import React from 'react';
import './styles/main.scss';
import Image from 'next/image';
import Link from 'next/link';
const Home = () => {
  return (
    <>
      <section
        id='first'
        className='p-5 md:p-10'
      >
        <div
          id='first__container'
          className='container mx-auto'
        >
          {/* row1 */}
          <div className='row1 md_row1 xl_row1_1 flex items-center p-5'>
            <h1 className='~text-2xl/5xl font-medium'>
              Betonowe donice z charakterem
            </h1>
          </div>
          <div className='hidden md:flex md_row1 xl_row1_2'></div>
          <div className='hidden xl:flex xl_row1_3'></div>
          <div className='hidden xl:flex xl_row1_4'></div>

          {/* row2 */}
          <div className='row2 md_row2right xl_row2_1 flex items-center gap-2 md:p-5'>
            <p className='~text-sm/xl'>Ręcznie wykonane. W Polsce.</p>
            <Image
              src='/img/poland.png'
              alt='flag'
              width={40}
              height={25}
            />
          </div>
          <div className='hidden md:flex md_row2left xl_row2_2'></div>
          <div className='hidden xl:flex xl_row2_3'></div>
          <div className='hidden xl:flex xl_row2_4'></div>

          {/* row3 */}
          <div className='row3 md_row3 xl_row3_1 flex items-end'>
            <p className='~text-sm/xl max-w-4xl'>
              Tworzymy betonowe donice, łącząc trwałość materiału z nowoczesnym
              designem. Każda donica powstaje w naszej warszawskiej pracowni,
              gdzie dbamy o precyzję wykonania i detale. Nasze produkty sprawdzą
              się zarówno w przestrzeniach prywatnych, jak i komercyjnych
            </p>
          </div>
          <div className='hidden md:flex md_row3 xl_row3_2'></div>
          <div className='hidden xl:flex xl_row3_3'></div>
          <div className='hidden xl:flex xl_row3_4'></div>

          {/* row4 */}
          <div className='row4 md_row4 xl_row4_1'>
            <Link
              className='~text-sm/xl w-full h-full hover:bg-black hover:text-white flex items-center justify-center uppercase transition-all duration-200 xl:hidden'
              href='#products'
            >
              Zobacz nasze produkty
            </Link>
          </div>
          <div className='hidden md:flex md_row4 xl_row4_2'>
            <Link
              className='~text-sm/xl w-full h-full hover:bg-black hover:text-white flex items-center justify-center uppercase transition-all duration-200 '
              href='#products'
            >
              Zobacz nasze produkty
            </Link>
          </div>
          <div className='hidden xl:flex xl_row4_3'></div>
          <div className='hidden xl:flex xl_row4_4 xl:border-t-2 xl:border-t-black xl:border-l-2 xl:border-l-black'></div>
        </div>
      </section>
    </>
  );
};

export default Home;
