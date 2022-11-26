import React from 'react';
import './App.css';
import AppLogo from './AppLogo';
import Carousel from './components/Carousel';

function App() {

  return (
    <div className='h-screen bg-gradient-to-t from-amber-50 to-amber-200'>
      <div className='w-full md:bg-amber-50/80 md:shadow-lg grid grid-cols-1 md:grid-cols-3 place-content-center' >
        <div className='col-span-1 md:border-r border-b shadow mr-0 md:mr-10 bg-white'>
          <AppLogo />
        </div>
        <div className='prose-sm md:prose max-w-none col-span-1 md:col-span-2 m-4'>
          <h1><strong>Falegnameria di Stanco Francesco</strong></h1>
          <p>Produzione materiale apistico, restauro e recupero mobili antichi, realizzazione di oggetti di design, lavorazioni e incisioni con pantografo CNC.</p>
        </div>
      </div>
      <div className='p-5 lg:p-10 lg:mx-12 xl:mx-32 2xl:mx-72'>
        <Carousel />
      </div>

      {/* Footer */}
      <div className='fixed bg-amber-500 bottom-0 h-12 w-full drop-shadow-lg'>
        <div className='grid grid-flow-col gap-4 place-content-center py-2'>

          <button className='text-white hover:scale-110'>
            <a href='https://www.instagram.com/falegnameria_beelab/' target='_blank' rel='noreferrer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </button>

          <button className='text-white hover:scale-110'>
            <a href='https://www.facebook.com/BeeLab-Falegnameria-102076162611737/'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </button>

          <button className='text-white hover:scale-110'>
            <a href='mailto:beelab.falegnameria@gmail.com'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-at-sign">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
              </svg>
            </a>
          </button>

          <h4 className='font-semibold text-white'>+39 347 243 1676</h4>

        </div>
      </div>

    </div>
  );
}

export default App;
