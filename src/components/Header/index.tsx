import { cn } from '@/utils/cn';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

import Link from 'next/link';
import { IoIosMenu } from 'react-icons/io';
import { UserButton, useUser } from '@clerk/nextjs';
import { appNavigationItems } from './contentSections';

export default function Header() {
  const { user } = useUser();

  return (
    <header className={cn('absolute inset-x-0 top-0 z-50')}>
      <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex items-center lg:flex-1'>
          <Link
            href={'/'}
            className='flex items-center -m-1.5 p-1.5 text-gray-900 duration-300 ease-in-out hover:text-green-300'
          >
            <Image width={32} height={32} src={'/logo.svg'} alt='Logo' />

            <span className='ml-2 text-sm font-semibold leading-6'>My Translations</span>
          </Link>
        </div>

        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <IoIosMenu className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>

        <div className='hidden lg:flex lg:gap-x-12'>{renderNavigationItems(appNavigationItems)}</div>

        <div className='hidden lg:flex lg:flex-1 gap-3 justify-end items-center'>
          {!user ? (
            <Link href={'/login'} className='text-sm font-semibold leading-6 ml-3'>
              <div className='flex items-center duration-300 ease-in-out text-gray-900 hover:text-green-300'>
                Log in
              </div>
            </Link>
          ) : (
            <div className='ml-3'>
              <UserButton />
            </div>
          )}
        </div>
      </nav>

      {/* <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:text-white dark:bg-boxdark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <WaspRouterLink to={routes.LandingPageRoute.to} className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your SaaS</span>
              <NavLogo />
            </WaspRouterLink>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-50'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <AiFillCloseCircle className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>{renderNavigationItems(navigationItems, setMobileMenuOpen)}</div>
              <div className='py-6'>
                {isUserLoading ? null : !user ? (
                  <WaspRouterLink to={routes.LoginRoute.to}>
                    <div className='flex justify-end items-center duration-300 ease-in-out text-gray-900 hover:text-yellow-500 dark:text-white'>
                      Log in <BiLogIn size='1.1rem' className='ml-1' />
                    </div>
                  </WaspRouterLink>
                ) : (
                  <UserMenuItems user={user} setMobileMenuOpen={setMobileMenuOpen} />
                )}
              </div>
              <div className='py-6'>
                <DarkModeSwitcher />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
    </header>
  );
}

function renderNavigationItems(
  navigationItems: { name: string; to: string }[],
  setMobileMenuOpen?: Dispatch<SetStateAction<boolean>>
) {
  const menuStyles = cn({
    '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50':
      !!setMobileMenuOpen,
    'text-sm font-semibold leading-6 text-gray-900 duration-300 ease-in-out hover:text-green-300':
      !setMobileMenuOpen,
  });

  return navigationItems.map((item) => {
    return (
      <Link
        href={item.to}
        key={item.name}
        className={menuStyles}
        onClick={setMobileMenuOpen && (() => setMobileMenuOpen(false))}
      >
        {item.name}
      </Link>
    );
  });
}
