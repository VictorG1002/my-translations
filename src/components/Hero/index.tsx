import { Image } from 'antd';

export default function Hero() {
  return (
    <div className='relative pt-14 w-full'>
      <TopGradient />

      <BottomGradient />

      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-8xl px-6 lg:px-8'>
          <div className='lg:mb-18 mx-auto max-w-3xl text-center'>
            <h1 className='text-4xl font-bold sm:text-6xl bg-gradient-to-l from-[#3ECF8E] to-[#07673c] text-transparent bg-clip-text'>
              Save once <br /> <span className='italic'>Translate everywhere</span> <br /> <span className='text-gray-900'>i18n</span> made easy.
            </h1>

            <p className='mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-600'>
              i18n without the hassle – automate, sync, scale. 🚀
            </p>

            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href={'/'}
                className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-200 hover:ring-2 hover:ring-green-400 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Get Started <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>

          <div className='mt-14 flow-root sm:mt-14'>
            <div className='-m-2  flex justify-center rounded-xl lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src={'/open-saas-banner.webp'}
                alt='App screenshot'
                width={1000}
                height={530}
                loading='lazy'
                className='rounded-md shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopGradient() {
  return (
    <div
      className='absolute top-0 right-0 -z-10 transform-gpu overflow-hidden w-full blur-3xl sm:top-0'
      aria-hidden='true'
    >
      <div
        className='aspect-[1020/880] w-[55rem] flex-none sm:right-1/4 sm:translate-x-1/2 bg-gradient-to-tr from-green-400 to-gray-300 opacity-30'
        style={{
          clipPath: 'polygon(80% 20%, 90% 55%, 50% 100%, 70% 30%, 20% 50%, 50% 0)',
        }}
      />
    </div>
  );
}

function BottomGradient() {
  return (
    <div
      className='absolute inset-x-0 top-[calc(100%-40rem)] sm:top-[calc(100%-65rem)] -z-10 transform-gpu overflow-hidden blur-3xl'
      aria-hidden='true'
    >
      <div
        className='relative aspect-[1020/880] sm:-left-3/4 sm:translate-x-1/4 bg-gradient-to-br from-gray-200 to-green-300  opacity-50 w-[72.1875rem]'
        style={{
          clipPath: 'ellipse(80% 30% at 80% 50%)',
        }}
      />
    </div>
  );
}