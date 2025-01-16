import PropTypes from 'prop-types'
import './Navbar.css'
const navMenu = [
    {url:'#about', name: 'About'},
    {url:'#skills', name: 'Skills'},
    {url:'#project', name: 'Projects'},
    {url:'#experience', name: 'Experience'},
    {url:'#Contact', name: 'Contact'}
]
export function Navbar(){
     return (
     <nav>
     <ul>
         {navMenu.map((item) =>(
           <NavMenuItem
           key={item.name}
           url={item.url}
           name={item.name}
           />
         ))}
     </ul>
     </nav>
  )
}

function NavMenuItem({url, name}){
  return  <li><a href={url}>{name}</a></li>
};

NavMenuItem.propTypes ={
url : PropTypes.string.isRequired,
name : PropTypes.string.isRequired,
}