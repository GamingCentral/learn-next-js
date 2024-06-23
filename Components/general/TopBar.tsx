"use client"
import Container from '@mui/material/Container'
import { AppBar } from '@mui/material';
import "../../public/css/topbar.css"
import SchoolIcon from '@mui/icons-material/School';

function Topbar() {
    return(
        <AppBar className='appbarTop' sx={{ position: "fixed"}}>
            <Container maxWidth="lg" className='TopBar'>
                <SchoolIcon fontSize='large' className='glassy brandName' />
            </Container>
        </AppBar>
    );
}

export default Topbar;