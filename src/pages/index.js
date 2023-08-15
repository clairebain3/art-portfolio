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
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
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

       <div > 

<header>
            <nav class="navbar navbar-expand-lg darkFallTheme">
  <div class="container-fluid">
    <h1 class="darkFallTheme navText" >Art by Claire</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navMenu" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <a
          href="#home"
          onClick={() => handlePageChange('Homepage')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'darkFallTheme-active', otherwise we set it to 'darkFallTheme'
          className={currentPage === 'Homepage' ? 'bloodOrange' : 'darkFallTheme'}
        >Home</a>
        <a
          href="#digital"
          onClick={() => handlePageChange('Digital')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'darkFallTheme-active', otherwise we set it to 'darkFallTheme'
          className={currentPage === 'Digital' ? 'bloodOrange' : 'darkFallTheme'}
        >Digital Art</a>
        <a
          href="#painting"
          onClick={() => handlePageChange('Painting')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'darkFallTheme-active', otherwise we set it to 'darkFallTheme'
          className={currentPage === 'Painting' ? 'bloodOrange' : 'darkFallTheme'}
        >Painting</a>
        <a
          href="#other"
          onClick={() => handlePageChange('Other')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'darkFallTheme-active', otherwise we set it to 'darkFallTheme'
          className={currentPage === 'Other' ? 'bloodOrange' : 'darkFallTheme'}
        >Other</a>
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'darkFallTheme-active', otherwise we set it to 'darkFallTheme'
          className={currentPage === 'Contact' ? 'bloodOrange' : 'darkFallTheme'}
        >Contact</a>
        
      </div>
    </div>
  </div>
</nav>
     

            </header>



        
        <main class="lightFallTheme">

      <div>
      <div>{renderPage()}</div>
      </div>
    </main>
    <Footer class = "lightFallTheme" />
    </div>

  )
}
