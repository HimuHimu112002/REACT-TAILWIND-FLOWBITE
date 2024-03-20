import { RxReload } from 'react-icons/rx';
import { TbCar } from 'react-icons/tb';
const AgencyAbout = () => {
  return (
    <div className='bg-blue-900'>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-y-2">
            <div className='flex justify-center items-center gap-x-2 shadow p-10 mx-2 max-w-lg'>
                <h1 className='font-dm font-bold text-[12px] lg:text-2xl text-white'>2</h1>
                <p className='font-dm font-normal text-[7px] lg:text-xl text-white'>Two years warranty</p>
            </div>
            <div className='flex justify-center items-center gap-x-2 shadow p-10 mx-2 max-w-lg'>
                <TbCar className='text-[12px] lg:text-2xl text-white'></TbCar>
                <p className='font-dm font-normal text-[7px] lg:text-xl text-white'>Free shipping</p>
            </div>
            <div className='flex justify-center items-center gap-x-2 shadow p-10 mx-2 max-w-lg'>
                <RxReload className='text-[12px] lg:text-2xl font-bold text-white'></RxReload>
                <p className='font-dm font-normal text-[7px] lg:text-xl text-white'>Two years warranty</p>
            </div>       
        </div>
    </div>
  )
}
export default AgencyAbout