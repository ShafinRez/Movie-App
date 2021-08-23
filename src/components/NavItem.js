import React from 'react'
import { useState } from 'react'
function NavItem(props) {
    const [open, setOpen] = useState(false);
    return (
        <li className="nav-item">
            <a href='#' className='item-button' onClick={()=> setOpen(!open)} >
                {props.item}
               
            </a>
            {open && props.children}
        </li>
    )
}

export default NavItem
