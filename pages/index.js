import Head from 'next/head';
import { Header } from '../components/header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Event Landing Page</title>
        <meta name='description' content='Event Landing Page in Nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />

        <section className='flex h-[500px]'>
          <div className='w-1/2 bg-[#d8dbe2] h-full flex justify-center items-center'>
            <h1 className='text-4xl px-4 lg:px-5 font-medium'>
              {' '}
              Welcome to our event; we cater for your need
              <span className='text-[#292961]'> accordingly</span>
            </h1>
          </div>
          <div className='w-1/2 h-full'>
            <img
              alt='hero'
              src='/marketter.jpg'
              className='h-full w-full object-fit'
            />
          </div>
        </section>
      </main>
    </div>
  );
}
