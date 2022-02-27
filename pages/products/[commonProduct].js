import { APICommon } from "../../commonAPI/api"
import NavBar from "../../commonComponents/navBar"
import { FetchingByID } from "../../fetcher/fetching"
import Image from "next/image"
import { FaRegHeart } from "react-icons/fa"
import ScrollBar from "../../commonComponents/scrollBar"
import Footer from "../../commonComponents/footer"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

export default function CommonProduct ({particularproduct}) {    
       
    const colors = particularproduct[0].colors
    const sizes = particularproduct[0].sizes
    const id = particularproduct[0].product_url
    const initialProducturl = particularproduct[0].product_url  
        
    const [url, seturl] = useState(initialProducturl) 
    const router = useRouter()
    const pageTitle = router.query.commonProduct

    useEffect (() =>{        
            seturl(initialProducturl)        
    },[id,initialProducturl])
    
    const clickImagehandler = (each) => {        
        seturl(each.product_url)
    }
    
    return(
        <>
            <Head>
                <title>{pageTitle}</title>        
            </Head>
            <div style={{position:"relative"}}>
                <NavBar />            
                <div className="productPage_topSpace">
                    <div className="container-1200">
                        <div className="row no-margin productHeight">
                            <div className="col-md-8 no-padding hatBg positionRel text-center">                                                               
                                <Image 
                                    src={url} 
                                    alt="Product picture"                                                                                                            
                                    width={600}
                                    height={600}    
                                    layout={`intrinsic`}  
                                    className={`img-hover`}                           
                                />
                                <div className="productPrice positionAbs w-100" style={{top:0}}>
                                    <div className="productBg" style={{width:200}}>
                                        <h3 className="text-center productDflex fullCap">{particularproduct[0].title} /</h3>
                                        <h5 className="no-margin text-center productDflex firstLetcap">&nbsp;{particularproduct[0].price}</h5>  
                                    </div> 
                                    <div className="productWishBg">
                                        <FaRegHeart className="productHeart"/>    
                                    </div>                           
                                </div>
                                <div className="row no-margin productPreview">
                                    {particularproduct[0].url.map((each,index)=>{
                                        return(
                                            <div className="" key={index} onClick={()=>clickImagehandler(each)}>                                                                  
                                                <Image 
                                                    src={each.product_url}                                                 
                                                    width={80}
                                                    height={90}
                                                    layout={`intrinsic`}  
                                                    className={`img-hover`}                           
                                                />                                                   
                                            </div> 
                                        )
                                    })}            
                                </div>                        
                            </div>
                            <div className="col-md-4 no-padding"> 
                                <div className="productProp">                      
                                    <div>
                                        <p className="no-margin fullCap colorText">color</p>
                                        {colors.map((each,index)=>{                                        
                                            return(
                                                <button className="roundButton" style={{backgroundColor: each.color === "black" ? "black" : "white"}} key={index}></button>
                                            )                                    
                                        })}                                                                
                                    </div>
                                    <div>
                                        <p className="no-margin fullCap sizeText">size</p>
                                        {sizes.map((each,index)=>{                                        
                                            return(
                                                <button className="roundButton" key={index}>{each.size}</button>
                                            )                                    
                                        })}                                                                
                                    </div>
                                    <div className="desBox">
                                        <p className={"productDes"}>{particularproduct[0].description}</p>                                
                                    </div>
                                    <div className="text-center">
                                        <button className="addCartbutton">Add to a cart</button>                                  
                                    </div>
                                </div> 
                            </div>                                                          
                        </div> 
                        <ScrollBar />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export async function getServerSideProps ({query}) {        
    const response = await FetchingByID(APICommon.productsGet, query.commonProduct)    
    return{
        props:{
            particularproduct:response
        }
    }
}