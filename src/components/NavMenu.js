import React from 'react';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

const NavMenu = (args) => {

    return (
        <>
            <Navbar
                className="my-2"
                color="dark"
                dark
            >
                <NavbarBrand href="/">
                    Astronomy Picture of the Day
                </NavbarBrand>
            </Navbar>
        </>
    );
}

export default NavMenu;