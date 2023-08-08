import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react';
import { Inter } from 'next/font/google'
import Painting from './painting';
import Footer from './footer';
import Other from './other';
import Digital from './digital';
import Contact from './contact';
import Homepage from './home';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Painting') {
      return <Painting />;
    }
    if (currentPage === 'Other') {
      return <Other />;
    }
    if (currentPage === 'Digital') {
      return <Digital />;
    }
    if (currentPage === 'Homepage') {
      return <Homepage />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (

       <div> 

<header>
            <nav class="navbar navbar-expand-lg  header">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Art by Claire</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        {/* act 24 for consitional rendering */}
        <a
          href="#home"
          onClick={() => handlePageChange('Homepage')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Homepage' ? 'nav-link active' : 'nav-link'}
        >Home</a>
        <a
          href="#digital"
          onClick={() => handlePageChange('Digital')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Digital' ? 'nav-link active' : 'nav-link'}
        >Digital Art</a>
        <a
          href="#painting"
          onClick={() => handlePageChange('Painting')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Painting' ? 'nav-link active' : 'nav-link'}
        >Painting</a>
        <a
          href="#other"
          onClick={() => handlePageChange('Other')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Other' ? 'nav-link active' : 'nav-link'}
        >Other</a>
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >Contact</a>
        
      </div>
    </div>
  </div>
</nav>
     

            </header>



        {/* <header> 
          
<nav>
  <div>
        <span>Art by Claire</span>
    {/* <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button> *
    <div>
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link href="#home" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
                    onClick={() => handlePageChange('Homepage')}

                    className={currentPage === 'Homepage' ? 'nav-link active' : 'nav-link'}
          >Home</Link>
        </li>
        <li>
          <Link href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    onClick={() => handlePageChange('Digital')}

                    className={currentPage === 'Digital' ? 'nav-link active' : 'nav-link'}
          >Digital Art</Link>
        </li>
        <li>
          <Link href="#painting" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          onClick={() => handlePageChange('Painting')}

          className={currentPage === 'Painting' ? 'nav-link active' : 'nav-link'}
          >Painting
          </Link>
        </li>
        <li>
          <Link href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    onClick={() => handlePageChange('Fiber')}

                    className={currentPage === 'Fiber' ? 'nav-link active' : 'nav-link'}
          >Fiber Art</Link>
        </li>
        <li>
          <Link href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    onClick={() => handlePageChange('Contact')}

                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </header>  */}
        <main>

      <div>
      <div>{renderPage()}</div>
      </div>
    </main>
    </div>

  )
}
