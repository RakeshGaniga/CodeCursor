

import { AppBar, Toolbar, styled } from '@mui/material';

const Container =  styled(AppBar)`
background: #060606;
height:9vh;
`


const Header = () => {

    const logo = require('./images/Logo.png');
    return(
        <Container position='static'>
            <Toolbar>
            <img src={logo} alt="logo" style={{width:200}}/>
            </Toolbar>
        </Container>
    )
}

export default Header;