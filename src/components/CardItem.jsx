import React from 'react'
import Container from './Container'
import { Card } from 'flowbite-react';
import Flex from './Flex';
const CardItem = () => {
  return (
    <Container>
        <div className='text-center mx-auto py-3 w-auto lg:w-auto'>
            <p className='text-2xl text-red-600 font-semibold'>TOP CATEGORIES</p>
            <h1 className='text-4xl text-blue-500 font-bold text-center'>Pick the right category build your careeer</h1>
        </div>
        <Flex className='mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 lg:px-28 gap-x-2 gap-y-2'>
            <Card className="transition duration-500 hover:translate-y-[-10px] hover:border-blue-300 hover:bg-blue-400 cursor-pointer">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    CUNTRY TOP TRUSTED AGENCY
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card className="transition duration-500 hover:translate-y-[-10px] hover:border-blue-300 hover:bg-blue-400 cursor-pointer">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    WORLD TOP RANKING AGENCY 2024
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card className="transition duration-500 hover:translate-y-[-10px] hover:border-blue-300 hover:bg-blue-400 cursor-pointer">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    SUTH ASIA TOP RANKING AGENCY 2022
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
        </Flex>
    </Container>
  )
}
export default CardItem