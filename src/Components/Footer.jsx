import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="w-[100%] h-[50px] fixed bottom-0 left-0 bg-transparent border-t-[0.1px] border-gray-900 flex items-center justify-center px-2">
            <h1 className="text-gray-400">&copy; 2024 || Created by <Link to="https://yahyobek.vercel.app/" target="_blank" className="text-white border-b-[0.1px] border-gray-500">Yahyobek</Link></h1>
        </footer>
    )
}

export default Footer