import '../styles/globals.css'
import React,{useState} from 'react';
import Head from "next/head";
import useSWR from "swr"
import { APICommon } from "../commonAPI/api"
import { Fetching } from "../fetcher/fetching"
import 'bootstrap/dist/css/bootstrap.css'

export const ProductsContext = React.createContext()

function MyApp({ Component, pageProps }) {

  const [topContext, settopContext] = useState({
    showUser:false,
    showCart:false
  })  
  
  const { data, error } = useSWR(APICommon.productsGet,Fetching)      
    
  return(    
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {data &&      
        <ProductsContext.Provider value={{data,topContext,settopContext}}>
          <Component {...pageProps} /> 
        </ProductsContext.Provider>       
      }      
    </>          
  ) 
}

export default MyApp

