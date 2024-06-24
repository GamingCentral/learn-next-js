"use client"
import Container from '@mui/material/Container'
import { AppBar } from '@mui/material';
import "../../public/css/topbar.css"
import SchoolIcon from '@mui/icons-material/School';
import Divider from '@mui/material/Divider';
import '@fontsource/poppins'
import Link from '@mui/material/Link'
import Tooltip from '@mui/material/Tooltip';

function Topbar() {
    return(
        <AppBar className='appbarTop' sx={{ position: "fixed"}}>
            <Container maxWidth="lg" className='TopBar'>
                <Link href="." underline='none'>
                    <div className="logoAndBrand">
                            <SchoolIcon fontSize='large' sx={{marginRight: 2}} className='glassy brandName' />
                            <p id='brandName'>Friendly Next Docs</p>
                    </div>
                </Link>
            </Container>
            <Divider />
        </AppBar>
    );
}

export default Topbar;