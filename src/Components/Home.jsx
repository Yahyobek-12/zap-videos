import { IoIosSearch } from "react-icons/io";
import { BsSlashSquare } from "react-icons/bs";
import zapLogo from '../Images/z-png.png'

const Home = () => {
    return (
        <div id="home" className="w-[100%] h-[100vh]">
            <div id="home-blured" className="w-[100%] h-[100%] flex items-center justify-center">
                <div>
                    <div className="flex items-center justify-center mb-6">
                        <img src={zapLogo} alt="zap-logo" className="md:w-[150px] w-[80px] md:h-[150px] h-[80px]" />
                    </div>
                    <h2 className="uppercase font-bold text-grayed xs:text-xl text-md text-center" style={{ wordSpacing: '5px' }}>fast than youtube</h2>
                    <h1 id="home-gradient-txt" className="text-center md:text-7xl xs:text-5xl sx:text-3xl text-2xl font-bold mt-4">Search anything with ZAP</h1>
                    <div className="flex items-center justify-center text-center mt-5 px-3">
                        <p className="max-w-[600px] text-gray-400 md:text-lg text-[15px]">Zap Videos is a platform where creators share exciting, unique, and engaging content to inspire everyone.</p>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <form className="w-[80%] h-[60px] rounded-lg border-[0.5px] border-gray-800 flex items-center justify-between px-2">
                            <IoIosSearch className="py-2 px-3 text-gray-600 text-5xl" />
                            <input type="text" placeholder="Search the anything..." className="w-[100%] h-[100%] border-none outline-none bg-transparent text-white" />
                            <BsSlashSquare className="py-2 px-2 bg-slate-900 text-4xl text-gray-500 rounded-lg" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home