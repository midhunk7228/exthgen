import { FaArrowRightLong } from 'react-icons/fa6'

function JoinUs() {
  return (
    <div className='w-full max-w-7xl mx-auto py-16 px-6 mb-32 bg-white shadow-lg flex flex-col items-center justify-center gap-4 rounded-2xl'>
        <div>
        <h1 className="flex text-center md:text-[44px] text-[26px] md:leading-[62px] leading-[34px] text-[#1E2028] font-light font-hedvig-serif">
        Let's Bring Your <br />
        Vision to Life
        </h1>
        </div>
        <div className="flex flex-col w-full md:w-1/3 lg:w-1/3 justify-center gap-4  font-visby font-normal">
          <p className="text-center text-[#323442] text-sm md:text-lg lg:text-lg font-light leading-7 gap-3 flex flex-col">
          Contact us today to discuss your project and discover how we can help you succeed.
          </p>
        </div>
        <div className=" flex space-x-4 font-visby">
          <button className="bg-exthgen-gradient font-hedvig-serif text-white py-3 px-6 hover:bg-pink-600 cursor-pointer rounded-full text-sm font-bold leading-6 flex items-center">
            Join Us <FaArrowRightLong className="ml-2" />
          </button>
          <button className="bg-transparent font-hedvig-serif text-black border border-[#1E2028] py-3 px-6 cursor-pointer rounded-full text-sm font-bold leading-6 flex items-center">
            Contact
          </button>
        </div>
    </div>
  )
}

export default JoinUs