import React, {useState} from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  const[navList, setNavList]= useState(false)
  
  const nav = [
    { text: 'Home', path: '/' },
    { text: 'Categories', path: '/categories' },
    { text: 'About Us', path: '/about' },
    { text: 'All Products', path: '/products' },
    { text: 'Contact', path: '/contact' }
  ];
  
  return (
    <>
     <header>
     <div className="container flex">
                <div className="logo">
                <img src="./images/logo.png" alt="" />
                </div>
                <nav className= "nav">
                <ul className={navList ? "small" :"flex"}>
                    {nav.map((list, index ) =>(
                    <li key={index}>
                        <Link to ={list.path}> {list.text}</Link>
                    </li>
                ))}
                </ul>
                </nav>
      </div>
     </header>
    </>
  )
}

export default Header