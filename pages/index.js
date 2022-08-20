import Head from 'next/head';
import { Header } from '../components/header';
import {
  createCloudinaryEnhancer,
  CLOUDINARY_PARAMETER_TYPES,
} from '@uniformdev/canvas-cloudinary';
import { CanvasClient, EnhancerBuilder, enhance } from '@uniformdev/canvas';
import { Composition, Slot } from '@uniformdev/canvas-react';
import { Personalize } from '@uniformdev/context-react';
import content from '../content/content.json';

async function enhancer(composition) {
  const enhancedComposition = { ...composition };
  //enhancing with Cloudinary
  const enhancers = new EnhancerBuilder().parameterType(
    CLOUDINARY_PARAMETER_TYPES,
    createCloudinaryEnhancer()
  );

  await enhance({ composition: enhancedComposition, enhancers, context: {} });
  return enhancedComposition;
}

export async function getStaticProps() {
  //fetching data from uniform
  const client = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID,
  });

  const { composition } = await client.getCompositionBySlug({
    slug: 'events',
  });

  //using cloudinary enhnacer on the comoposition
  await enhancer(composition);

  return {
    props: {
      composition,
    },
  };
}

export default function Home({ composition }) {
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
          <Personalize
            variations={content}
            name='eventLandingPersonalized'
            component={() => (
              <Composition
                data={composition}
                resolveRenderer={() => {
                  const DefaultComponent = ({ img }) => {
                    return (
                      <div className='w-full h-full'>
                        <img
                          alt='hero'
                          src={img[0].baseurl}
                          className='h-full w-full object-fit'
                        />
                      </div>
                    );
                  };
                  return DefaultComponent;
                }}
              >
                <Slot name='event' />
              </Composition>
            )}
          />
        </section>
      </main>
    </div>
  );
}
