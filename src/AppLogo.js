import React from 'react';
import Logo from "./logo.svg";
import Box from "@mui/material/Box";

function AppLogo() {
    return (
        <Box
            component="img"
            sx={{
                height: 48,
                padding: '5px',
            }}

            alt="App logo"
            src={Logo}
        />
    );
}

export default AppLogo;