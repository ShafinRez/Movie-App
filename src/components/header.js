import React from 'react'

function Header(props) {
    return (
        <div className='header'>
            <div className='inner_header'>
                <ul className='nav'>
                    <li>{props.children}</li>

                </ul>
            </div>

        </div>
    )
}

export default Header

