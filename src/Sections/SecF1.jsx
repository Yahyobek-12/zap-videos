import { Link } from "react-router-dom"

const SecF = () => {
  return (
    <div className='w-[100%] md:h-[50vh] h-[80vh] bg-black md:mt-0 mt-[-5rem] lg:px-4 px-0'>
        <div className='w-[100%] h-[20vh] md:flex block items-center md:justify-evenly justify-center xl:px-48 px-2 mb-3'>

            <div className='xl:w-[350px] lg:w-[300px] md:w-[250px] w-[100%] mt-3 h-[310px] bg-[#161B1D] rounded-xl border-t-2 border-[#2B353C] py-4 px-4 relative overflow-hidden'>
                <h1 className='text-gray-400 lg:text-3xl text-2xl'>Free</h1>
                <h1 id='pricing-features' className='lg:text-5xl text-3xl text-white mt-2'>0$</h1>
                <p className='mt-2 text-gray-300'>Forever</p>
                <ul className='mt-4 mb-4'>
                    <li className='text-white mt-2'><b className='text-gray-500'>✔</b> For Poor peoples</li>
                    <li className='text-white mt-2'><b className='text-gray-500'>✔</b> Collaborate on free sites</li>
                    <li className='text-white mt-2'><b className='text-gray-500'>✔</b> 3 day version history</li>
                </ul>
                <Link to="/"><div className="text-white bg-[#3F3E41] rounded-lg h-[35px] flex items-center justify-center">Get started</div></Link>
                <div className='w-[100px] h-[100px] bg-gray-500 absolute bottom-0 left-0 blur-[75px] rotate-6'></div>
            </div>

            <div className='xl:w-[350px] lg:w-[300px] md:w-[250px] w-[100%] mt-3 h-[350px] bg-[#161B1D] rounded-xl border-t-2 border-[#2B353C] py-4 px-4 relative overflow-hidden'>
                <h1 className='text-gray-400 lg:text-3xl text-2xl'>Basic</h1>
                <h1 id='pricing-features' className='lg:text-5xl text-3xl text-white mt-2'>20$</h1>
                <p className='mt-2 text-gray-300'>Per editor month</p>
                <ul className='mt-4 mb-4'>
                    <li className='text-white mt-2'><b className='text-gray-500'>✔</b> For small teams</li>
                    <li className='text-white mt-2'><b className='text-gray-500'>✔</b> Up to 5 editors</li>
                    <li className='text-white mt-2'><b className='text-gray-500'>✔</b> Collaborate on all sites</li>
                    <li className='text-white mt-2'><b className='text-gray-500'>✔</b> Collaborate on all sites</li>
                </ul>
                <Link to="/"><div className="text-white bg-blue-500 rounded-lg h-[35px] flex items-center justify-center cursor-pointer">Get started</div></Link>
                <div className='w-[90%] h-[50px] bg-gray-500 absolute bottom-0 left-6 blur-[75px]'></div>
            </div>
            
            <div className='xl:w-[350px] lg:w-[300px] md:w-[250px] w-[100%] mt-3 h-[375px] bg-[#161B1D] rounded-xl border-t-2 border-[#2B353C] py-4 px-4 relative overflow-hidden'>
                <h1 className='text-gray-400 lg:text-3xl text-2xl'>Rocket</h1>
                <h1 id='pricing-features' className='lg:text-5xl text-3xl text-white mt-2'>40$</h1>
                <p className='mt-2 text-gray-300'>Forever</p>
                <ul className='mt-4 mb-4'>
                    <li className='text-white mt-2'><b className='text-gray-500'>✔</b> For bigger teams</li>
                    <li className='text-white mt-2'><b className='text-gray-500'>✔</b> Up to 10 editors</li>
                    <li className='text-white mt-2'><b className='text-gray-500'>✔</b> Collaborate on all sites</li>
                    <li className='text-white mt-2'><b className='text-gray-500'>✔</b> Collaborate on all sites</li>
                    <li className='text-white mt-2'><b className='text-gray-500'>✔</b> Collaborate on all sites</li>
                </ul>
                <Link to="/"><div className="text-white bg-blue-600 rounded-lg h-[35px] flex items-center justify-center">Get started</div></Link>
                <div className='w-[100px] h-[100px] bg-gray-500 absolute bottom-0 right-0 blur-[75px] rotate-6'></div>
            </div>

        </div>
    </div>
  )
}

export default SecF