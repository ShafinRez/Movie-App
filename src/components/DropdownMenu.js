import React from 'react'
import {CSSTransition} from 'react-transition-group';
import { useState } from 'react'
function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main')
    function DropdownItem(props){
        return(
            <ul className='drop-item'>
                <li><a href='#' className='menu-item'>
                    <span className='icon-button'>{props.leftIcon}</span>
                    
                    {props.children}
                    <span className='icon-button'>{props.leftIcon}</span>

                </a></li>
            </ul>
        );
    }
    return (
        <div className='dropdown'>
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} className='menu-primary'>
                <div className='menu'>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Adventure</DropdownItem>
                    <DropdownItem>Comedy</DropdownItem>
                    <DropdownItem>Family</DropdownItem>
                    <DropdownItem>Horror</DropdownItem>
                    <DropdownItem>Animation</DropdownItem>
                </div>
            </CSSTransition>
            
            <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} className='menu-secondary'>
                <div className='menu'>
                    <DropdownItem>settings</DropdownItem>
                </div>
            </CSSTransition>
        
        </div>

        

        
    )
}

export default DropdownMenu
