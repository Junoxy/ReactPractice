import './Navbar.css'

const Navbar = ({logo, navLinks}) => {

    const navbarLinks = navLinks.map((link, i) => {
        return <a key={i} href={link.url}>{link.text}</a>
    })

    return(
        <div className='Navbar'>
            <img className='nav-logo' src={logo} alt="Techover logo" />
            <div className='nav-links'>
                {navbarLinks}
            </div>
        </div>
    )
}

export default Navbar;