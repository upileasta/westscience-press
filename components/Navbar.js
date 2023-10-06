import { useState } from 'react'
import Link from 'react-scroll/modules/components/Link'
import Image from 'next/image'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }
  return (
    <header>
        <nav className="bg-white bg-opacity-95 shadow-lg h-20 fixed z-50 w-[100%] lef-0 top-0">
            <div className="max-w-6xl mx-auto px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex space-x-7">
                        <div>
                        {/* Website Logo */}
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1500}
                                to="Home" 
                                className="flex items-center py-1 px-2 cursor-pointer">
                                <Image src="/logo.png" alt="Westscience-press logo" height={72} width={100}/>
                            </Link>
                        </div>
                    </div>
                    {/* Primary Navbar items */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={1500}
                            to='About' 
                            className="cursor-pointer py-4 px-2 text-blue-900 font-normal hover:text-blue-500 transition duration-300">
                                About
                        </Link>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={1500}
                            to='Service' 
                            className="cursor-pointer py-4 px-2 text-blue-900 font-normal hover:text-blue-500 transition duration-300">
                                Services
                        </Link>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={1500}
                            to='IJournals' 
                            className="cursor-pointer py-4 px-2 text-blue-900 font-normal hover:text-blue-500 transition duration-300">
                                International Journals
                        </Link>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={1500}
                            to='NJournals' 
                            className="cursor-pointer py-4 px-2 text-blue-900 font-normal hover:text-blue-500 transition duration-300">
                                National Journals
                        </Link>
                    </div>
                    <a
                        href='https://wa.me/6282115575700'
                        className="hidden bg-blue-500 rounded-full cursor-pointer py-3 px-6 text-white text-sm font-medium hover:shadow-md hover:shadow-cyan-300 transition duration-300 lg:block">
                            Contact Us
                    </a>
                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
                            <svg className=" w-6 h-6 text-blue-900 hover:text-blue-900" fill="non2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile menu */}
            
                    <div className={`absolute top-0 left-0 w-full h-screen z-40 bg-gray-500 bg-opacity-50 backdrop-blur-sm transition ease-in duration-300 ${menu ? 'block opacity-100' : 'hidden opacity-0'}`} onClick={toggleMenu}></div>
                    <div className={`absolute bg-blue-300 left-0 top-0 z-50 h-screen w-[65%] pt-16 transition ease-in duration-300 ${menu ? 'translate-x-0' : '-translate-x-[100%]'}`}>
                        <ul className="flex flex-col space-y-8">
                            <li>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={1500}
                                    onClick={toggleMenu}
                                    to="About" className="block px-10 py-4 hover:bg-cyan-500 transition duration-300 text-2xl">
                                        About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={1500}
                                    onClick={toggleMenu}
                                    to="Service" className="block px-10 py-4 hover:bg-cyan-500 transition duration-300 text-2xl">
                                        Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={1500}
                                    onClick={toggleMenu}
                                    to="IJournals" className="block px-10 py-4 hover:bg-cyan-500 transition duration-300 text-2xl">
                                        International Journals
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={1500}
                                    onClick={toggleMenu}
                                    to="NJournals" className="block px-10 py-4 hover:bg-cyan-500 transition duration-300 text-2xl">
                                        National Journals
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={1500}
                                    onClick={toggleMenu}
                                    to="Contact" className="block px-10 py-4 hover:bg-cyan-500 transition duration-300 text-2xl">
                                        Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
            
        </nav>
    </header>
  )
}

export default Navbar