import React,{useContext} from "react"
import useSWR from "swr"
import Link from "next/link"
import { APICommon } from "../commonAPI/api"
import Image from "next/image"
import { FaRegHeart } from "react-icons/fa"

export default function Home () {     

    const { data, error } = useSWR(APICommon.productsGet,{refreshInterval:1000})  
         
    if (!data){
        return(
            <h1>Loading</h1>
        )
    }
    if (data){
        return(        
            <div className="home_Topspace"> 
                <div className="container-1200">
                    <div className="row no-margin">                    
                        <div className="col-md-8 no-padding hatBg positionRel text-center">
                            <Link href={`/products/${data[0].id}`}><a href="">                                                               
                                <Image 
                                    src={`${data[0].product_url}`}                                     
                                    alt="Products"                                                                                                                                                     
                                    width={842}
                                    height={780}
                                    layout={`intrinsic`}  
                                    className={`img-hover`}                           
                                />
                            </a></Link>
                            <div className="productPrice positionAbs w-100" style={{top:0}}>
                                <div className="productBg" style={{width:200}}>
                                    <h3 className="text-center no-margin productDflex fullCap">{data[0].title} /</h3>
                                    <h5 className="no-margin text-center productDflex firstLetcap">&nbsp;{data[0].price}</h5>  
                                </div> 
                                <div className="productWishBg">
                                    <FaRegHeart className="productHeart"/>    
                                </div>                           
                            </div>                        
                        </div> 
                        <div className="col-md-4 no-padding text-center">
                            <div className="row no-margin">
                                <div className="col-md-12 no-padding jacBg positionRel">
                                    <Link href={`/products/${data[1].id}`}><a href="">
                                        <Image 
                                            src={`${data[1].product_url}`}                                       
                                            width={420} 
                                            height={390}  
                                            layout={`intrinsic`}  
                                            className={`img-hover`}                                                   
                                        />
                                    </a></Link>
                                    <div className="productPrice positionAbs w-100" style={{top:0}}>
                                        <div className="productBg" style={{width:200}}>
                                            <h3 className="no-margin text-center productDflex fullCap">{data[1].title} /</h3>
                                            <h5 className="no-margin text-center productDflex firstLetcap">&nbsp;{data[1].price}</h5>  
                                        </div> 
                                        <div className="productWishBg">
                                            <FaRegHeart className="productHeart"/>    
                                        </div>                           
                                    </div>
                                </div>                              
                                <div className="col-md-12 no-padding tshirtBg positionRel">
                                    <Link href={`/products/${data[2].id}`}><a href="">
                                        <Image 
                                            src={`${data[2].product_url}`}
                                            width={420} 
                                            height={390}
                                            layout={`intrinsic`}
                                            className={`img-hover`}                                                  
                                        /> 
                                    </a></Link>
                                    <div className="productPrice positionAbs w-100" style={{top:0}}>
                                        <div className="productBg" style={{width:200}}>
                                            <h3 className="no-margin text-center productDflex fullCap">{data[2].title} /</h3>
                                            <h5 className="no-margin text-center productDflex firstLetcap">&nbsp;{data[2].price}</h5>  
                                        </div> 
                                        <div className="productWishBg">
                                            <FaRegHeart className="productHeart"/>    
                                        </div>                           
                                    </div>                               
                                </div> 
                            </div>
                        </div>              
                    </div> 
                </div>                                                                
            </div>
        )
    }
}