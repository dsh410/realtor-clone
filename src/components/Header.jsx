import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';
import {
  HOME_PATH,
  PROFILE_PATH,
  SIGN_IN_PATH,
  OFFERS_PATH,
  SIGN_UP_PATH,
  SIGN_OUT_PATH,
} from '../constants'
import { getAuth } from 'firebase/auth';
import { useAuthStatus } from '../hooks/useAuthStatus';


export default function Header() {
  const auth = getAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { isLoggedIn, setSignOut } = useAuthStatus();

  function pathMatchRoute(route) {
    if (!route) return null;

    if (route === location.pathname) {
      return true;
    }

  }
  const navigate = [
    { name: 'Home', href: `${HOME_PATH}`, current: pathMatchRoute('/') || pathMatchRoute('/home'), class: ` ${pathMatchRoute('/') || pathMatchRoute('/home') ? 'px-4 py-2 bg-white text-red-800 border-b-4 border-red-700 font-semibold' : `rounded-md  px-3 py-2 text-sm font-medium text-stone-950`}` },
    { name: 'Offers', href: `${OFFERS_PATH}`, current: pathMatchRoute('/offers'), class: ` ${pathMatchRoute('/offers') ? 'px-4 py-2 bg-white text-red-800 border-b-4 border-red-700 font-semibold' : `rounded-md  px-3 py-2 text-sm font-medium text-stone-950`}` },
    { name: 'Profile', href: `${PROFILE_PATH}`, current: pathMatchRoute('/profile'), class: ` ${pathMatchRoute('/profile') ? 'px-4 py-2 bg-white text-red-800 border-b-4 border-red-700 font-semibold' : `rounded-md  px-3 py-2 text-sm font-medium text-stone-950`}` },
  ]

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to={`${HOME_PATH}`} className="-m-1.5 p-1.5">
            <img
              alt="realtor.com logo"
              src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
              className="h-5 w-auto"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigate.map((item) => (
            <Link key={item.name} to={item.href} className={item.class}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          {isLoggedIn ? (
            <Link
              onClick={() => setSignOut(true)}
              className={` ${pathMatchRoute(`${SIGN_OUT_PATH}`) ? 'px-4 py-2 bg-white text-red-800 border-b-4 border-red-700 font-semibold' : `rounded-md  px-3 py-2 text-sm font-medium text-stone-950`}`}
            >
              Sign Out
            </Link>
          ) : (
            <Link
              to={`${SIGN_IN_PATH}`}
              className={` ${pathMatchRoute(`${SIGN_IN_PATH}`) ? 'px-4 py-2 bg-white text-red-800 border-b-4 border-red-700 font-semibold' : `rounded-md  px-3 py-2 text-sm font-medium text-stone-950`}`}
            >
              Sign In
            </Link>
          )}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <Link to={`${HOME_PATH}`} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <Link
              to={`${SIGN_UP_PATH}`}
              className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigate.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href=""
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
