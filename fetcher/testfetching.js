export const TestFetching = async (url) => {           
    const response = await fetch (url,{
        method:"GET",
    })
    const data = await response.json()
    return data
}