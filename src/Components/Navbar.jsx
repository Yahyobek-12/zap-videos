import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id="nav" className="w-[100%] h-[60px] fixed top-0 left-0 flex items-center md:justify-evenly justify-between px-6">
            <Link to="/" className='text-white text-2xl font-bold font-mono'>ZAP</Link>
            <ul>
                <NavLink id='nav-link' to="/likes" className="py-[12px] px-4 rounded-md text-gray-300 hover:text-white ml-2">Likes</NavLink>
                <NavLink id='nav-link' to="/saved" className="py-[12px] px-4 rounded-md text-gray-300 hover:text-white ml-2">Trends</NavLink>
            </ul>
        </div>
    )
}

export default Navbar