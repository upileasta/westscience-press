import Image from "next/image"
import Link from "next/link"

export const Card = ({
    icon = '',
    title = 'Lorem Ipsum',
    content = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum vel pariatur rem eius explicabo, quis praesentium voluptatibus eveniet? Temporibus eum minima vero laboriosam dolores molestias ducimus omnis animi natus commodi.',
}) => {
    return (
        <div className={`rounded p-8 bg-white shadow-xl shadow-gray-300 hover:shadow-2xl hover:scale-105 transition-all duration-200 delay-100`}>
            <div className="flex flex-col items-center">
                <div dangerouslySetInnerHTML={{__html: icon}} />
                <div className="mt-4 text-xl font-semibold text-center">
                    { title }
                </div>
                <div className="mt-4 text-base text-center">
                    { content }
                </div>
            </div>
        </div>
    )
}

export const JournalCard = ({
    cover = '',
    name= '',
    e_issn= '',
    p_issn= '',
    date= '',
    color = 'white',
    link = 'https://journal.westscience-press.com'
}) => {
    return (
        <div className={`bg-${color} flex flex-col shadow-spread items-center p-2 max-w-sm w-full lg:max-w-full lg:flex lg:flex-row lg:p-0 rounded-xl`}>
            <div className="m-0 w-2/5 shrink-0 ">
                    <Link href={link}>
                        <div className='relative rounded-xl w-[160px] h-[220px]'>
                            <Image src={cover} alt="cover" layout="fill" objectFit="cover"/>
                        </div>
                    </Link>
                    </div>
                    <div className=' xl:px-4 flex flex-col justify-center'>
                        <div className="mt-4 text-center text-lg font-medium capitalize leading-none mb-2 lg:text-base lg:mt-0 lg:text-left">
                            {name}
                        </div>
                        <div className="flex flex-row justify-center lg:justify-start">
                            <div className="text-center text-sm font-medium lg:text-left">e-ISSN:</div>
                            <div className="text-center text-sm font-normal ml-2 lg:text-left">
                                {e_issn}
                            </div>
                        </div>
                        <div className="flex flex-row justify-center lg:justify-start">
                            <div className="text-center text-sm font-medium lg:text-left">p-ISSN:</div>
                            <div className="text-center text-sm font-normal ml-2 lg:text-left">
                                {p_issn}
                            </div>
                        </div>
                        <div className="text-center text-sm font-medium mt-2 lg:text-left">
                            Published:
                        </div>
                        <div className="text-center text-sm font-normal leading-none lg:text-left">
                            { date }    
                        </div>
                        <Link href={link}>
                            <div className="mt-4 pb-4 group flex flex-row items-center justify-center gap-2 cursor-pointer lg:justify-start lg:pb-0">
                                <div className='text-sm font-medium text-blue-600 group-hover:text-blue-300'>Learn More</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-4 w-4 text-blue-600 group-hover:text-blue-300"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </div>
                        </Link>
                    </div>
        </div>
    )
}
