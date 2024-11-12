import accauntImg from '../Images/accaunt.png'
import ratingImg from '../Images/rating.png'
import { Link } from 'react-router-dom'

const SecF2 = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-black px-4">
        <div className="text-center">
          <h1 className="text-white text-5xl text-center">See More ZAP Features</h1>
          <p className="text-gray-400 text-xl mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eligendi, eum <br /> ut dolorem assumenda perspiciatis ex voluptates fugit recusandae amet!</p>
        </div>
        <div className="mt-12 flex items-center justify-evenly px-28">
          <div className="w-[500px] h-[500px] bg-[#161B1D] border-t-[3px] border-[#2B353C] rounded-xl overflow-hidden py-4 px-4 relative">
            <h1 className="text-white text-3xl">Accaunt</h1>
            <p className="text-gray-300 mt-2">Shaxsiy hisob yarating va zam videosdan foydalanishni boshlang! Sevimli videolaringizni saqlang, tavsiyalardan bahramand bo‘ling va ko‘proq imkoniyatlarga ega bo‘ling.</p>
            <div className="w-[100%] h-[42%] border-2 border-[#2b353c] mt-4 rounded-xl">
              <img src={accauntImg} alt="accaunt-img" className='w-[100%] h-[100%] object-cover' />
            </div>
            <p className='text-gray-300 mt-2'>Tez orada hisob yaratish imkoniyati qo‘shiladi! Shaxsiy tavsiyalar, sevimli videolar va ko‘proq imkoniyatlarga ega bo‘lish uchun tayyor turing.</p>
            <Link className='w-[100%] h-[35px] bg-blue-500 rounded-md mt-3 flex items-center justify-center text-white hover:opacity-75'>Accaunt Features</Link>
            <div className="w-[200px] h-[200px] bg-gray-300 blur-[210px] absolute bottom-0 left-0"></div>
          </div>
          <div className="w-[55%]">
              <div className="w-[100%] flex items-center justify-between">
                <div className="w-[48%] h-[250px] bg-[#161B1D] border-t-[3px] border-[#2B353C] rounded-xl overflow-hidden py-4 px-4">
                  <h1 className='text-white text-3xl'>Rating</h1>
                  <p className='mt-2 text-gray-300'>Videolarn baholash imkoniyati qo'shiladi</p>
                  <div className="w-[100%] h-[60%] border-2 border-[#2b353c] mt-4 rounded-xl">
                    <img src={ratingImg} alt="rating-img" className='w-[100%] h-[100%] object-cover mt-2' />
                  </div>
                  <div className="w-[80px] h-[80px] bg-gray-300 blur-[85px]"></div>
                </div>
                <div className="w-[48%] h-[250px] bg-[#161B1D] border-t-[3px] border-[#2B353C] rounded-xl overflow-hidden py-4 px-4">
                  <h1 className='text-white text-3xl'>Full Movies</h1>
                  <div className="w-[100%] h-[60%] border-2 border-[#2b353c] mt-4 rounded-xl">
                    <img src={ratingImg} alt="rating-img" className='w-[100%] h-[100%] object-cover mt-2' />
                  </div>
                  <div className="w-[80px] h-[80px] bg-gray-300 blur-[85px]"></div>
                </div>
              </div>
              <div className="w-[100%] h-[230px] bg-[#161B1D] border-t-[3px] border-[#2B353C] rounded-xl overflow-hidden mt-6 py-4 px-4">
                <h1 className='text-white text-3xl'>Hayr</h1>
                <div className="w-[80px] h-[80px] bg-gray-300 blur-[85px]"></div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default SecF2