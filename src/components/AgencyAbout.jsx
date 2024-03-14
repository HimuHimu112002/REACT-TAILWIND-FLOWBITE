import React from 'react'
import Container from './Container'
import { RxReload } from 'react-icons/rx';
import { TbCar } from 'react-icons/tb';
import Flex from './Flex';
const AgencyAbout = () => {
  return (
    <Container>
        <Flex className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 lg:px-28 gap-y-2">
            <div className='flex justify-center items-center gap-x-2 shadow p-10 mx-2 max-w-lg'>
                <h1 className='font-dm font-bold text-[12px] lg:text-2xl'>2</h1>
                <p className='font-dm font-normal text-[7px] lg:text-xl'>Two years warranty</p>
            </div>
            <div className='flex justify-center items-center gap-x-2 shadow p-10 mx-2 max-w-lg'>
                <TbCar className='text-[12px] lg:text-2xl'></TbCar>
                <p className='font-dm font-normal text-[7px] lg:text-xl'>Free shipping</p>
            </div>
            <div className='flex justify-center items-center gap-x-2 shadow p-10 mx-2 max-w-lg'>
                <RxReload className='text-[12px] lg:text-2xl font-bold'></RxReload>
                <p className='font-dm font-normal text-[7px] lg:text-xl'>Two years warranty</p>
            </div>       
        </Flex>
    </Container>
  )
}
export default AgencyAbout