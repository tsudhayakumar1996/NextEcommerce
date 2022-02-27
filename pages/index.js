import { APICommon } from "../commonAPI/api";
import Footer from "../commonComponents/footer";
import NavBar from "../commonComponents/navBar";
import ScrollBar from "../commonComponents/scrollBar";
import { Fetching } from "../fetcher/fetching";
import Home from "./home";
import { SWRConfig } from "swr";
import Head from "next/head";

export default function Index ({fallback}) {     

  return(
    <>       
      <Head>
        <title>Next-JS Commerce</title>        
      </Head>     
      <NavBar />      
      <SWRConfig>
        <Home products={{fallback}} />
      </SWRConfig>
      <ScrollBar />
      <Footer />
    </>
  )
}

export async function getServerSideProps () {
  const response = await Fetching(APICommon.productsGet) 
  return{
    props:{
        fallback:{
          [APICommon.productsGet]:response
        }
      }      
  }
}