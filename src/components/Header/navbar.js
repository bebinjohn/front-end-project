import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler, NavbarBrand,Nav,NavItem, NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText } from 'reactstrap';
import icon from '../../assets/Images/Nokia-Logo.wine.png'
import style from './navbar.module.css'

const Navibar = (props) => {
      const [isOpen, setIsOpen] = useState(false);
    
      const toggle = () => setIsOpen(!isOpen);
    
      return (
        <div>
          <Navbar className={style.navbar_outer} color="light" light expand="md">
            <NavbarBrand  className={style.navbar_header} href="/"><img className={style.nav_icon} src={icon}></img>
            <span className={style.navbar_text}>9 pureview</span></NavbarBrand>
            <NavbarToggler  onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav style={{flex:1}}  navbar>
                <NavItem>
                  <NavLink href="/components/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Achievements</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Specifications</NavLink>
                </NavItem>
                 </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
    
    export default Navibar;