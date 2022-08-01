import React from 'react'
import './NavigationBar.scss'
import {Outlet, Link} from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

const NavigationBar=()=>{
    return(
        <>
            <div className='navigation-bar'>
                <Link className='logo-container' to="/">
                    <CrwnLogo className='logo'/>
                </Link>
                
                <div className='nav-links-container'>
                    <Link className='nav-link' to="/shop">
                        SHOP
                    </Link>

                </div>

            </div>
            <Outlet/>
        </>

        
    )
}

export default NavigationBar