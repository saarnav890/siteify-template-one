import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar initials='AS'/>  
    <Main firstName='Aarnav' 
    lastName='Sanghvi' 
    email='mailto:aarnav.sanghvi890@gmail.com'
     jobDescription='A 19-year old software engineer who loves to innovate'
     twitterLink='https://twitter.com/AarnavSanghvi'
     gitHubLink='https://github.com/saarnav890'
     instagramLink=''

     
     />
    </>
    
  )
}
