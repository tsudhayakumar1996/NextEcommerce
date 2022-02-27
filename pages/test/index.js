import react,{useEffect, useState} from "react"
import { Fetching, FetchingPost } from "../../fetcher/fetching";
import useSWR, { useSWRConfig } from "swr"
import { TestFetching } from "../../fetcher/testfetching";

export default function Test () {

    const [swrtesttrig, setswrtesttrig] = useState(true)

    const {data,error} = useSWR(swrtesttrig ? "http://localhost:3000/api/test" : "http://localhost:3000/api/test2",TestFetching)
    console.log(data,"data for testing swr in conditional rendering")
    const { mutate } = useSWRConfig()
    
    const [Input, setInput] = useState('')

    // const [names, setnames] = useState([])    
    // useEffect(async()=>{
    //     const response = await Fetching('http://localhost:8080/api/test');
    //     if(response){
    //         setnames(response)
    //     }
    // },[]);    
    
    const clickHandler = async () => {
        const response = await FetchingPost(swrtesttrig ? 'http://localhost:3000/api/test' : "http://localhost:3000/api/test2",Input)        
        if(response){
            mutate(swrtesttrig ? 'http://localhost:3000/api/test' : "http://localhost:3000/api/test2");
            // setnames(response)
        }
    }
    const onChange = (val) => {
        setInput(val)
    }
    return(
        <div>
            <p>Test page</p>
            <input onChange={(e)=>onChange(e.target.value)}></input>
            <button onClick={()=>clickHandler()}>Submit</button>
            {data && data.map((each,index)=>{
                return(
                    <p key={index}>{each.name}</p>
                )
            })}
            {/* {names && names.map((each,index)=>{
                return(
                    <p key={index}>{each.name}</p>
                )
            })} */}                        
        </div>        
    )
}