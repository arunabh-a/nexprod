import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, ButtonGroup } from "@nextui-org/react";
import Logo from '../assets/logo';
import { Addicon, Themeicon } from '../assets/addSvg';
import CreateProduct from './createProduct';

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
        <Navbar maxWidth='xl' height='6rem'>    
            <NavbarBrand>
                <Logo />
            </NavbarBrand>

            <NavbarContent justify="end">
                <NavbarItem>
                    <ButtonGroup>
                        <Button color="primary" size='lg' radius='xl' variant="light" className="bg-secondary">
                            <Themeicon />
                        </Button>
                        <Button color="primary" size='lg' radius='xl' variant="light" className="bg-secondary" onClick={onOpen}>
                            <Addicon />
                        </Button>
                    </ButtonGroup>
                </NavbarItem>
                <CreateProduct isOpen={isOpen} onClose={onClose} />
            </NavbarContent>
        </Navbar>
    );
};

export default NavBar;