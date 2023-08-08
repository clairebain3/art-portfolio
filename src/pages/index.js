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
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Homepage />;
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



        
        <main>

      <div>
      <div>{renderPage()}</div>
      </div>
    </main>
    <Footer />
    </div>

  )
}
