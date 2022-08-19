import Head from 'next/head';
import { Header } from '../components/header';

export default function Developer() {
  return (
    <div>
      <Head>
        <title>Event Landing Page</title>
        <meta name='description' content='Event Landing Page in Nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />

        <section className='flex h-screen w-screen justify-center items-center'>
          <h1 className='text-4xl px-4 lg:px-5 font-medium'>
            {' '}
            Welcome to the developer page
          </h1>
        </section>
      </main>
    </div>
  );
}
