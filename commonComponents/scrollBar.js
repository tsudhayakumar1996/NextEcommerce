import Link from "next/link"
import React, {useContext} from "react"
import { ProductsContext } from "../pages/_app"
import Image from "next/image"


export default function ScrollBar () {
    
    const { data } = useContext(ProductsContext)     
    const products = data    
    
    return(
        <div className="row no-margin" style={{backgroundColor:'lightgray'}}>
            {products.map((each,index)=>{
                return(
                    <div className="col-md-3 no-padding positionRel text-center" key={index}> 
                        <Link href={`/products/${each.id}`}>
                            <a href="">                                                               
                                <Image 
                                    src={each.product_white_url}
                                    alt={`Product pictures`}                                                 
                                    width={600}
                                    height={600}
                                    layout={`intrinsic`}  
                                    className={`img-hover`}                           
                                /> 
                            </a>
                        </Link>                        
                    </div> 
                )
            })}            
        </div>
    )
}