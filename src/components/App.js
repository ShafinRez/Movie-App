import './App.css';
import Header from './Header'
import NavItem from './NavItem'
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownMenu';
function App() {
  return (
    <div className="App">
      <Header> 
        <NavItem item='Home'/>
        <NavItem item='Genre'>
          <DropdownMenu>
            <DropdownItem genre='Action'/>
            
          </DropdownMenu>

          
        </NavItem>

        <NavItem item='Latest'/>
        <NavItem item='About'>
          <DropdownMenu className='menu-secondary'/>
        </NavItem>


      </Header>

    </div>
  );
}

export default App;
