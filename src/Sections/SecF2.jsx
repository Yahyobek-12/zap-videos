import accauntImg from '../Images/accaunt.png'
import ratingImg from '../Images/rating-2.png'
import movieImg from '../Images/cinema.png'
import { Link } from 'react-router-dom'
import { Footer } from '../constants'

const SecF2 = () => {
  return (
    <div className="w-[100%] lg:h-[100vh] sm:h-[200vh] h-[230vh] bg-black xs:px-4 px-2">
        <div className="text-center lg:pt-0 pt-[35rem]">
          <h1 className="text-white text-5xl text-center">See More ZAP Features</h1>
          <p className="text-gray-400 sm:text-xl text-[13px] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eligendi, eum <br /> ut dolorem assumenda perspiciatis ex voluptates fugit recusandae amet!</p>
        </div>
        <div className="mt-12 lg:flex block items-center justify-evenly xl:px-24 px-2">
          <div className="lg:w-[500px] w-[100%] h-[500px] bg-[#161B1D] border-t-[3px] border-[#2B353C] rounded-xl overflow-hidden py-4 px-4 relative">
            <h1 className="text-white text-3xl">Accaunt</h1>
            <p className="text-gray-300 mt-2">Shaxsiy hisob yarating va zam videosdan foydalanishni boshlang! Sevimli videolaringizni saqlang, tavsiyalardan bahramand bo‘ling va ko‘proq imkoniyatlarga ega bo‘ling.</p>
            <div className="w-[100%] sm:h-[42%] h-[32%] border-2 border-[#2b353c] mt-4 rounded-xl">
              <img src={accauntImg} alt="accaunt-img" className='w-[100%] h-[100%] object-cover' />
            </div>
            <p className='text-gray-300 mt-2'>Tez orada hisob yaratish imkoniyati qo‘shiladi! Shaxsiy tavsiyalar, sevimli videolar va ko‘proq imkoniyatlarga ega bo‘lish uchun tayyor turing.</p>
            <Link className='w-[100%] h-[35px] bg-blue-500 rounded-md mt-3 flex items-center justify-center text-white hover:opacity-75'>Accaunt Features</Link>
            <div className="w-[200px] h-[200px] bg-gray-300 blur-[210px] absolute bottom-0 left-0"></div>
          </div>
          <div className="lg:w-[55%] w-[100%] lg:ml-6 ml-0 lg:mt-0 mt-5">
              <div className="w-[100%] flex items-center justify-between">
                <div className="w-[48%] sm:h-[250px] h-[220px] bg-[#161B1D] border-t-[3px] border-[#2B353C] rounded-xl overflow-hidden py-4 px-4">
                  <h1 className='text-white xs:text-3xl text-[20px]'>Rating</h1>
                  <div className="w-[100%] h-[75%] border-2 border-[#2b353c] mt-4 rounded-xl flex items-center justify-center">
                    <img src={ratingImg} alt="rating-img" className='xl:w-[100%] sm:w-[90%] w-[60%] xl:h-[100%] sm:h-[90%] h-[60%] object-cover mt-2' />
                  </div>
                  <div className="w-[80px] h-[80px] bg-gray-300 blur-[85px]"></div>
                </div>
                <div className="w-[48%] sm:h-[250px] h-[220px] bg-[#161B1D] border-t-[3px] border-[#2B353C] rounded-xl overflow-hidden py-4 px-4">
                  <h1 className='text-white xs:text-3xl text-[20px]'>Full Movies</h1>
                  <div className="w-[100%] h-[75%] border-2 border-[#2b353c] mt-4 rounded-xl flex items-center justify-center">
                    <img src={movieImg} alt="rating-img" className='w-[80%] h-[90%] object-cover mt-2' />
                  </div>
                  <div className="w-[80px] h-[80px] bg-gray-300 blur-[85px]"></div>
                </div>
              </div>
              <div className="w-[100%] h-[230px] bg-[#161B1D] border-t-[3px] border-[#2B353C] rounded-xl overflow-hidden mt-6 py-4 px-4">
                <h1 className='text-white xs:text-3xl text-[18px]'>Rating & Full Movies</h1>
                <p className='text-gray-300 mt-3 xl:text-[16px] sm:text-[15px] text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam eius nemo odio provident culpa obcaecati praesentium voluptas, a ratione rerum ducimus ut eos vero atque minus tempora deserunt adipisci ipsum doloribus iure numquam</p>
                <Link className='w-[100%] h-[35px] bg-blue-500 rounded-md mt-3 flex items-center justify-center text-white hover:opacity-75'>See Features</Link>
                <div className="w-[80px] h-[80px] bg-gray-300 blur-[85px]"></div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default SecF2