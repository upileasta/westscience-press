import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import {Card, JournalCard } from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Accordion } from "../components/Accordion";
import { Section } from "../components/Section";
import Link from "react-scroll/modules/components/Link";

// import data
import { services } from '../data/services'
import { reasons } from '../data/reasons'
import { internationalJournals, nationalJournals} from '../data/journals'
import { faqs } from '../data/faqs'


export default function Home() {

  const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

		useEffect(() => {
			window.addEventListener("scroll", handleScroll)
			return () => {
				window.removeEventListener("scroll", handleScroll)
			}
		}, [])
  return (
    <Layout>
      	<div className='container mx-auto py-40 px-4' id="About">
			<div className='flex flex-col lg:flex-row '>
				{/* <Fade bottom> */}
					<div className='flex flex-col px-4 text-justify mt-16 md:px-24 lg:w-1/2 lg:mt-0 lg:justify-center'>
						<div className='text-xl font-semibold lg:text-2xl xl:text-4xl'>Westscience Press</div>
						<div className='text-xs lg:text-sm xl:text-lg mt-4'>Westscience Press is a fast and reliable institution for publishing national and international journals with various scopes. Westscience Press focuses on helping students, teachers, lecturers, and academics. In addition, Westscinece Press has the service of publishing leading conference proceedings annually.</div>
					</div>
				{/* </Fade> */}
				<div className='relative flex mx-auto order-first w-[340px] h-[200px] lg:w-1/2 lg:ml-12 lg:h-[250px] xl:h-[305px] 2xl:h-[360px]'>
            		<Image src="/i2.png" alt="Ilustrasi 2" layout='fill' objectFit="fill"/>
				</div>
			</div>
        </div>
 
		<Section title="Our Services" color="blue-50" id="Service">
			<div className="grid gap-12 sm:px-16 lg:grid-cols-2 xl:grid-cols-3">
				{services.map((service) => {
					return(
						<Card 
							title={service.title}
							content={service.content}
							icon={service.icon}
							key={service.id}
						/>
					)
				})}
			</div>
		</Section>

		<Section title="Why Choose Us" color="white">
			<div className="grid gap-12 sm:px-16 lg:grid-cols-2 xl:grid-cols-3">
				{reasons.map((reason) => {
						return(
							<Card 
								title={reason.title}
								content={reason.content}
								icon={reason.icon}
								key={reason.id}
							/>
						)
				})}
			</div>
		</Section>

		<Section title="Westscience International Journals" color="blue-50" id="IJournals">
			<div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
				{internationalJournals.map((journal) => {
						return(
							<JournalCard 
								key={journal.id}
								cover={journal.cover}
								link={journal.link}
                                date={journal.date}
                                name={journal.name}
                                e_issn={journal.e_issn}
                                p_issn={journal.p_issn}
							/>
						)
				})}
			</div>
		</Section>

        <Section title="Westscience National Journals" color="white" id="NJournals">
			<div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
				{nationalJournals.map((journal) => {
						return(
							<JournalCard 
								key={journal.id}
								cover={journal.cover}
								link={journal.link}
                                date={journal.date}
                                name={journal.name}
                                e_issn={journal.e_issn}
                                p_issn={journal.p_issn}
                                color='white'
							/>
						)
				})}
			</div>
		</Section>

		{/* <Section title="Frequently Asked Qusetion" color="white">
			<div className="lg:px-24 xl:px-32 2xl:px-48">
				{faqs.map((faq) => {
					return(
						<Accordion 
							question={faq.q}
							answer={faq.a}
							key={faq.id}
						/>
					)
				})}
			</div>
		</Section> */}

		<Section title="Contact Us" color="blue-50" id="Contact">
			<div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8 w-[100%] lg:px-0 xl:px-24 2xl:px-48">
				<div className="p-4 flex flex-col space-y-4 shadow-xl bg-white border-y-4 border-blue-400 rounded-md w-[100%] sm:px-8 lg:w-2/5">
					<div className="flex flex-row lg:mt-12">
						<div className="rounded-full w-14 h-14 bg-blue-100 p-2 flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-2" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1d4ed8" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<line x1="18" y1="6" x2="18" y2="6.01" />
								<path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
								<polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
								<line x1="9" y1="4" x2="9" y2="17" />
								<line x1="15" y1="15" x2="15" y2="20" />
							</svg>
						</div>
						<div className="flex flex-col ml-2">
							<div className="text-xl">Location</div>
							<div className="text-lg text-gray-400">Jakarta, Indonesia</div>
						</div>
					</div>
					<div className="flex flex-row">
						<div className="rounded-full w-14 h-14 bg-blue-100 p-2 flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1d4ed8" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<rect x="3" y="5" width="18" height="14" rx="2" />
								<polyline points="3 7 12 13 21 7" />
							</svg>
						</div>
						<div className="flex flex-col ml-2">
							<div className="text-xl">Email</div>
							<div className="text-lg text-gray-400">info@westscience-press.com</div>
						</div>
					</div>
					<div className="flex flex-row">
						<div className="rounded-full w-14 h-14 bg-blue-100 p-2 flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1d4ed8" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
								<path d="M15 7a2 2 0 0 1 2 2" />
								<path d="M15 3a6 6 0 0 1 6 6" />
							</svg>
						</div>
						<div className="flex flex-col ml-2">
							<div className="text-xl">Call</div>
							<div className="text-lg text-gray-400">+62 821-1557-5700</div>
						</div>
					</div>
				</div>

				<div className="bg-white shadow-xl border-y-4 border-blue-400 rounded-md p-8 mt-10 w-[100%] lg:w-3/5">
					<form action="" method="post">
						<div className="md:flex items-center lg:mt-10">
							<div className="w-full md:w-1/2 flex flex-col">
								<label className="font-semibold leading-none text-gray-900">Name</label>
								<input type="text" className="leading-none ring-1 ring-gray-300 text-gray-800 p-3 focus:outline-none focus:ring-blue-400 mt-4 border-0 bg-gray-white rounded" />
							</div>
							<div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
								<label className="font-semibold leading-none text-gray-900">Email</label>
								<input type="email" className="leading-none ring-1 ring-gray-300 text-gray-800 p-3 focus:outline-none focus:ring-blue-400 mt-4 border-0 bg-gray-white rounded"/>
							</div>
						</div>
						<div className="md:flex items-center mt-8">
							<div className="w-full flex flex-col">
								<label className="font-semibold leading-none text-gray-900">Subject</label>
								<input type="text" className="leading-none ring-1 ring-gray-300 text-gray-800 p-3 focus:outline-none focus:ring-blue-400 mt-4 border-0 bg-gray-white rounded"/>
							</div>
							
						</div>
						<div>
							<div className="w-full flex flex-col mt-8">
								<label className="font-semibold leading-none text-gray-900">Message</label>
								<textarea type="text" className="h-40 text-base leading-none ring-1 ring-gray-300 text-gray-800 p-3 focus:outline-none focus:ring-blue-400 mt-4 bg-gray-white border-0 rounded"></textarea>
							</div>
						</div>
						<div className="flex items-center justify-center w-full">
							<button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-400 rounded hover:bg-blue-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:outline-none">
								Send message
							</button>
						</div>
					</form>
				</div>
			</div>
		</Section>

		<div className="bg-white py-10 px-8 sm:px-8 md:px-20 lg:px-8 xl:px-12 2xl:px-96">
			<div className="container mx-auto grid gap-4 md:grid-cols-2 lg:justify-items-center lg:grid-cols-4">
				<div className="flex flex-col">
					<Link 
						activeClass="active"
						spy={true}
						smooth={true}
						offset={-80}
						duration={1500} 
						to="Home" 
						className="flex items-center py-1 cursor-pointer"
					>
						<Image src="/logo.png" alt="Westscience-press logo" height={72} width={100}/>
					</Link>
					<div className="font-semibold text-lg mt-2">Jakarta, Indonesia</div>
					<div className="font-semibold text-base mt-2">Phone: <span className="font-normal">+62 821 1557 5700</span></div>
					<div className="font-semibold text-base">Email: <span className="font-normal">info@westscience-press.com</span></div>
				</div>
				<div className="flex flex-col">
					<div className="font-semibold text-lg">Useful Links</div>
					<div>
						<Link
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-80}
							duration={1500} 
							to="Home" 
							className="flex flex-row items-center hover:text-blue-400 cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
							Home
						</Link>
						<Link
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-80}
							duration={1500} 
							to="About" 
							className="flex flex-row items-center hover:text-blue-400 cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
							About
						</Link>
						<Link
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-80}
							duration={1500} 
							to="Service" 
							className="flex flex-row items-center hover:text-blue-400 cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
							Services
						</Link>
						<Link
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-80}
							duration={1500} 
							to="Journals" 
							className="flex flex-row items-center hover:text-blue-400 cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
							Journals
						</Link>
						<Link
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-80}
							duration={1500} 
							to="Contact" 
							className="flex flex-row items-center hover:text-blue-400 cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
							Contact Us
						</Link>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="font-semibold text-lg">Our Services</div>
					<div>
						<a href="https://wsj.westscience-press.com/" className="flex flex-row items-center hover:text-blue-400">
							<svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
							National Journal
						</a>
						<a href="https://wsj.westscience-press.com/" className="flex flex-row items-center hover:text-blue-400">
							<svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
							International Journal
						</a>
						<a href="https://westscience-press.com/" className="flex flex-row items-center hover:text-blue-400">
							<svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
							Proceeding
						</a>
					</div>
				</div>
				<div className="">
					<div className="font-semibold text-lg">Our Social Network</div>
					<div className="mt-3 flex flex-row space-x-1">
						<a href="#" className="rounded-full bg-blue-400 w-10 h-10 flex justify-center items-center p-2 hover:bg-blue-300">
							<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
							</svg>
						</a>
						<a href="#" className="rounded-full bg-blue-400 w-10 h-10 flex justify-center items-center p-2 hover:bg-blue-300">
							<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<rect x="4" y="4" width="16" height="16" rx="4" />
								<circle cx="12" cy="12" r="3" />
								<line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
							</svg>
						</a>
						<a href="#" className="rounded-full bg-blue-400 w-10 h-10 flex justify-center items-center p-2 hover:bg-blue-300">
							<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
							</svg>
						</a>
						<a href="#" className="rounded-full bg-blue-400 w-10 h-10 flex justify-center items-center p-2 hover:bg-blue-300">
							<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<rect x="4" y="4" width="16" height="16" rx="2" />
								<line x1="8" y1="11" x2="8" y2="16" />
								<line x1="8" y1="8" x2="8" y2="8.01" />
								<line x1="12" y1="16" x2="12" y2="11" />
								<path d="M16 16v-3a2 2 0 0 0 -4 0" />
							</svg>
						</a>
						<a href="#" className="rounded-full bg-blue-400 w-10 h-10 flex justify-center items-center p-2 hover:bg-blue-300">
							<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<rect x="3" y="5" width="18" height="14" rx="4" />
								<path d="M10 9l5 3l-5 3z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div className="text-center bg-blue-50 py-4">
			&copy; Copyright <span className="font-semibold">Westscience Press</span> {(new Date().getFullYear())}. All Rights Reserved
		</div>
    </Layout>
  )
}
