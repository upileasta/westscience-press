import Head from "next/head"
import Header from "./Header"
import Navbar from "./Navbar"

export default function Layout(props) {
  return (
    <div>
        <Head>
            <title>Westscience Press</title>
        </Head>
        <Navbar 
          cName='bg-transparent'
        />

        <Header />
        {props.children}    
    </div>
  )
}
