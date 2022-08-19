import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Event Landing Page</title>
        <meta name='description' content='Commerce Landing Page in Nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <header className='p-5 bg-[#292961] shadow-slate-400'>
          <div className='flex items-center'>
            <p className='text-white ml-4'>Event Landing Page</p>
          </div>
        </header>

        <section className='flex h-[500px]'>
          <div className='w-1/2 bg-[#d8dbe2] h-full flex justify-center items-center'>
            <h1 className='text-4xl px-4 lg:px-5 font-medium'>
              {' '}
              Welcome to our event; we cater for your need as a
              <span className='text-[#292961]'> [placeholder]</span>
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
