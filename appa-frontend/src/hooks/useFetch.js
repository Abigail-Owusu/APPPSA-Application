import { useState, useEffect} from "react";



const useFetch = (url, accessToken) => {
    
    const [data,  setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, {
                method: 'GET', // or 'POST', 'PUT', etc., depending on your API
                headers: {
                  'Authorization': `Token ${accessToken}`, // Include the access token directly
                  'Content-Type': 'application/json', // Adjust the content type as needed
                },
                signal: abortCont.signal
            })
                .then(res =>{
                    if (!res.ok){
                        throw Error('Could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                },)
                .catch(err => {
                    if (err.name === 'AbortError'){
                        console.log('fetch aborted')
                    }
                    else{
                        setError(err.message)
                        console.log(err.message)
                        setIsPending(false)

                    }
                })
        },1000)
        // return () => abortCont.abort()
    }, [url, accessToken]);

    return {data, isPending, error}
}


export default useFetch