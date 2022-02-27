export const Fetching = async (url) => {           
    const response = await fetch (url,{
        method:"GET",
    })
    const data = await response.json()
    return data
}

export const FetchingByID = async (url,id) => {    
    const response = await fetch (url,{
        method:"PUT",
        body: id ,
        headers:{
            'Content-Type':'application/json'
        }        
    })
    const data = await response.json()
    return data
}

export const FetchingPost = async (url,val) => {          
    const response = await fetch (url,{
        method:"POST",
        body: JSON.stringify({val}) ,
        headers:{
            'Content-Type':'application/json'
        }        
    })
    const data = await response.json()
    return data
}

export const FetchingUser = async (url,val) => {
    const response = await fetch (url,{
        method:"PUT",
        body: JSON.stringify({val}),
        headers:{
            "Content-Type":"application/json"
        }        
    })
    const data = await response.json()
    return data
}