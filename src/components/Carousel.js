import { React } from 'react';


function Carousel() {

    const numberOfImages = 5;

    const handleUpScroll = () => {
        const carousel = document.querySelector('#carousel');
        carousel.scrollBy(0, -carousel.scrollHeight / numberOfImages);
    }

    const handleDownScroll = () => {
        const carousel = document.querySelector('#carousel');

        if (carousel.scrollHeight - carousel.scrollTop - carousel.clientHeight < carousel.scrollHeight / numberOfImages) {
            carousel.scrollTo(0, 0);
        } else {
            carousel.scrollBy(0, carousel.scrollHeight / numberOfImages);
        }
    }

    return (
        <div className="flex flex-row relative w-full aspect-video">

            <button className='absolute md:bg-white/60 w-full h-10 flex flex-row place-content-center md:hover:bg-amber-50/70 p-1 shadow-inner text-amber-300 md:text-black'
                onClick={handleUpScroll}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
            </button>

            <div className='shadow-lg border-2 border-amber-200 overflow-hidden scroll-smooth' id='carousel'>
                <img src={require('../images/6.jpeg')} alt="6" className='object-cover object-top aspect-video' />
                {/* <img src={require('../images/6.jpeg')} alt="6" className='object-cover object-top aspect-video' />
                <img src={require('../images/6.jpeg')} alt="6" className='object-cover object-top aspect-video' />
                <img src={require('../images/6.jpeg')} alt="6" className='object-cover object-top aspect-video' />
                <img src={require('../images/6.jpeg')} alt="6" className='object-cover object-top aspect-video' /> */}

                <img src={require('../images/2.jpeg')} alt="2" className='object-cover object-top aspect-video' />
                <img src={require('../images/1.jpeg')} alt="1" className='object-cover object-top aspect-video' />
                <img src={require('../images/5.jpeg')} alt="5" className='object-cover object-top aspect-video' />
                <img src={require('../images/3.jpeg')} alt="3" className='object-cover object-top aspect-video' />
                {/* <img src={require('../images/4.jpeg')} alt="4" className='object-cover' /> */}
            </div>

            <button className='absolute bottom-0 md:bg-white/60 w-full h-10 flex flex-row place-content-center md:hover:bg-amber-50/70 p-1 shadow-inner text-amber-300 md:text-black'
                onClick={handleDownScroll}>

                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">ù
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
    );
}

export default Carousel;