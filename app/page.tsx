import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import data from '../data.json';
import CardsArea from '@/components/CardsArea'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <>
    <Navbar initials='AS'/>  
    <Main firstName={data.firstName}
    lastName={data.lastName}
    email={data.email}
     jobDescription={data.jobDescription}
     twitterLink={data.twitterUrl}
     gitHubLink={data.githubUrl}
     instagramLink={data.instagramUrl}
     />
    <About firstParagraph={data.aboutText} secondParagraph=''/>
     <CardsArea projects={data.projects}/>
    

    </>
    
  )
}
