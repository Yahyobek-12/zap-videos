import { Link } from 'react-router-dom'
import SecF1 from '../Sections/SecF1'
import SecF2 from '../Sections/SecF2'

const Features = () => {
  return (
    <div className='w-[100%] h-[100vh]'>
      <div className="w-[100%] h-[100%] p-[20px] flex items-center justify-center px-2">
      <div className="text-center">
        <h2 className="text-white text-xl py-2 px-8">ZAP Features</h2>
        <h1 id='features-h1' className="text-gray-200 sm:text-8xl xs:text-6xl text-4xl">All the power you <br /> need, bult-in.</h1>
        <p className="text-gray-400 sm:max-w-[700px] max-w-[1200px] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium autem tempora assumenda quaerat voluptatum sit reprehenderit. Voluptatem, corrupti maiores. Cumque.</p>
        <div className='mt-8'>
          <Link to="#" className='py-3 px-8 border-2 border-white rounded-md text-white hover:bg-white hover:text-black'>See All Features</Link>
        </div>
      </div>
      </div>
      <SecF1 />
      <SecF2 />
    </div>
  )
}

export default Features