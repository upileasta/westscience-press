import Image from 'next/image'

const Header = () => {
    return (
        <div className='w-100 bg-blue-50 py-40 px-4' id='Home'>
            <div className='container mx-auto flex flex-col md:flex-row md:space-x-8 '>
                <div className='flex flex-col mt-16 text-center md:w-1/2 md:mt-0 md:justify-center'>
                    <div className='text-xl font-semibold md:text-2xl xl:text-4xl'>Westscience Press</div>
                    <div className='text-xs md:text-sm xl:text-xl mt-4'>Fast and Reliable Solution for Journal Publication</div>
                </div>
                <div className='relative flex mx-auto order-first w-80 md:order-last md:w-1/2 h-[260px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[520px]'>
                    <Image src="/i1.png" alt="Ilustrasi 1" layout='fill' objectFit="fill"/>
                </div>
            </div>
        </div>
    )
}

export default Header