import { useState, useEffect} from "react";


/**
 * Custom hook for making asynchronous API requests with an access token.
 * @param {string} url - The URL to fetch data from.
 * @param {string} accessToken - The access token for authorization.
 * @returns {object} - An object containing data, isPending, and error state.
 */
const useFetch = (url, accessToken) => {
    // State to store the fetched data
    const [data,  setData] = useState(null);

    // State to track whether the data is still being fetched
    const [isPending, setIsPending] = useState(true)

    // State to store any error that occurs during the fetch
    const [error, setError] = useState(null)
    useEffect(() => {
        //An abort controller to handle cleanup in case the component unmounts
        const abortCont = new AbortController();

        // Use setTimeout to simulate asynchronous behavior
        setTimeout(() => {
            fetch(url, {
                method: 'GET', 
                headers: {
                  'Authorization': `Token ${accessToken}`, 
                  'Content-Type': 'application/json',
                },
                signal: abortCont.signal // Pass the abort signal to the fetch request
            })
                .then(res =>{
                    // Check if the response is OK; if not, throw an error
                    if (!res.ok){
                        throw Error('Could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then(data => {
                    // Update the state with the fetched data
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

    // Return the state values as an object
    return {data, isPending, error}
}

// Export the custom hook
export default useFetch