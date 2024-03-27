import React from 'react'

const ClientSection = () => {
  return (
    <div className='bg-hero bg-center bg-no-repeat bg-cover bg-fixed py-10'>
        <div className='text-center mx-auto w-auto md:w-[600px] backdrop-blur-sm bg-white/30 py-16 rounded-md mb-5'>
            <p className='text-2xl text-white font-semibold'>TOP PRODUCT</p>
            <h1 className='text-4xl text-white font-bold text-center'>OUR PRODUCT GALLERY</h1>
        </div>
        <div className='container mx-auto'>
            <div className="grid gap-4">
                <div>
                    <img
                    className="h-auto max-w-auto rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                    alt=""
                    />
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <div>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                        alt=""
                    />
                    </div>
                    <div>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                        alt=""
                    />
                    </div>
                    <div>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                        alt=""
                    />
                    </div>
                    <div>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                        alt=""
                    />
                    </div>
                    <div>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                        alt=""
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientSection