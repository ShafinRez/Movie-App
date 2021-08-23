
function DropdownItem(props){
    return(
        <ul className='drop-item'>
            <li>
                <a href='#' className='menu-item'>
            
                {props.genre}
                

                </a>
               
            </li>
        </ul>
    );
}

export default DropdownItem;