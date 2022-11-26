import React from 'react';
import Logo from "./logo.svg";

function AppLogo() {
    return (
        <div className='flex flex-row place-content-center'>
            <img src={Logo} className='h-44 w-44' alt='logo' />
        </div>
    );
}

export default AppLogo;