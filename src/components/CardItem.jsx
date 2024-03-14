import React from 'react'
import Container from './Container'
import { Card } from 'flowbite-react';
import Flex from './Flex';
const CardItem = () => {
  return (
    <Container>
        <Flex className='mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 lg:px-28 gap-x-2 gap-y-2'>
            <Card href="#" className="max-w-lg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    hime technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card href="#" className="max-w-lg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    hime technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card href="#" className="max-w-lg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    hime technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>

                {/* <div className='max-w-sm max-h-sm p-10 bg-slate-700 text-white flex justify-center items-center rounded relative'>
                    <h1 className='bg-red-500 p-3 rounded absolute top-[-15px]'>Himu</h1>
                </div> */}
            </Card>
        </Flex>
    </Container>
  )
}
export default CardItem