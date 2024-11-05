import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, ButtonGroup} from "@nextui-org/react";
import Logo from '../assets/logo';
import { Addicon, Themeicon } from '../assets/addSvg';

const NavBar = () => {
  return (
    <Navbar maxWidth='xl' height='6rem'>    
        <NavbarBrand>
            <Logo />
        </NavbarBrand>

        <NavbarContent justify="end">
            <NavbarItem>
                <ButtonGroup>
                    <Button color="primary" size='lg' radius='xl'  variant="light" className="bg-secondary">
                        <Themeicon />
                    </Button>
                    <Button color="primary" size='lg' radius='xl'  variant="light" className="bg-secondary">
                        <Addicon />
                    </Button>
                </ButtonGroup>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}

export default NavBar