import React from 'react';


const Navbar = () => {
  return (


        <div className="navbar w-full h-[10%] bg-[#131921] flex">
          <img
            className="amazon-img w-[5%] h-[80%] bg-[#131921] mx-auto m-[25px] text-3xl flex flex-col justify-center items-center"
            src='/images/amazon.png' alt='amaozn.png'
          />
          <button className="w-[5%] h-[100%] bg-[#131921] text-white ml-[20px] m-[10px]">
            <span className="text-[#CCCCCC]">Deliver to</span> Norway
          </button>

          <form className="search-main flex flex-row ml-[60px] m-[12px]">
            <div className="flex">
              <label
                htmlFor="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Your Email
              </label>
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm text-center text-gray-900 bg-[#DADADA] border border-gray-300 rounded-l hover:border-[#FF9900] hover:border-4 focus:outline-none dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
              >
                Gift Cards{' '}
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mockups
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Templates
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Design
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Logos
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full ml-[10px] h-[46px] z-20 text-sm  bg-[#FFFFFF] rounded-r-lg border hover:border-[#FF9900] hover:border-4 sm:w-[200px] md:w-[300px] lg:w-[600px]"
                placeholder="Search Amazon.co.uk"
                required=""
                style={{ outline: '#FF9900' }}
              />
              <button
                type="submit"
                className=" absolute top-0 right-0 p-[11px] text-sm text-white bg-[#F3A846] rounded-r  hover:bg-[#FF9900]"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </form>

          <div className='country-dropdown flex flex-col justify-center text-3xl ml-[20px]'>🇬🇧</div>


          <div className='signin-dropdown flex flex-col justify-center text-white ml-[30px]'>Hello, sign in <span className='font-bold'>Accounts & Lists</span></div>

          <div className='signin-dropdown flex flex-col justify-center text-white ml-[20px]'>Return <span className='font-bold'> & Orders</span></div>

          <img className='mx-auto' src='/images/cart-img2.png' alt='cart-img2.png'/>


        </div>


  );
};

export default Navbar;
