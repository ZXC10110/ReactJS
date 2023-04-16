import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import bg from '../Pet-Care-01.svg'

const navigation = [
  { name: 'Location', href: '#', current: true },
  { name: 'Blog', href: '#', current: false },
  { name: 'Services', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
  { name: 'Franchise with Us', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/*
<div className="w-full h-32">
        <img src={ bg }/>
      </div>
*/ 

export default function Homepage() {
  return (
    <div> 
      {/*
      <div className="w-full h-0">
        <img src={ bg } alt="Background-Page-01"/>
      </div>
      */}
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-full px-6 py-16 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 sm:px-40 items-center justify-center sm:items-stretch sm:justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  {/*Web*/}
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'text-white' : 'text-gray-200 hover:text-white',
                            'px-3 py-2 text-lg font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Mobile Dropdown*/}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-white' : 'text-gray-400 hover:text-white',
                      'block px-3 py-2 text-base font-medium text-center'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/*Homepage-01*/}
      <div>
        <div className="block p-4 text-white">
          <div className="block">
            <div className="w-2/3 text-6xl font-bold pt-56 px-56">
              <h6>We Get Pet Care!</h6>
              <div className="text-lg pt-12 font-normal w-full w-3/5">
                <h6>For over 17 Years, Fetch Pet Care has a trusted Partner in keeping pets healthy and happy!</h6>
              </div>
            </div>
          </div>
          <div className="flex pt-12 px-56">
            <div>
              <button className="bg-blue-500 px-8 py-4 rounded-full shadow-lg shadow-blue-400 text-white font-bold">Schedule Service</button>
            </div>
            <div className="flex px-12 h-1/2 pt-4 space-x-2">
              <h6 className="text-white">Or Call</h6>
              <h6 className="text-white underline">099-999-9999</h6>
          </div>
          </div>
        </div>
      </div>
      <div className="pt-80">
        <div className="bg-gray-200">
          <div>
            <h6 className="text-3xl font-bold text-red-500">Our Services</h6>
          </div>
          <div className="pt-12">
            <h6>National Brand With a Local Feel. Experience the Fetch! Difference</h6>
          </div>
          <div className="pt-12">
            <h6>Enter Your Location and Fetch Our Services</h6>
          </div>
          <div className="pt-12">
            <h6>Zip Code</h6>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

//disclosure efers to the process of revealing or hiding content based on the user's interaction with a user interface element