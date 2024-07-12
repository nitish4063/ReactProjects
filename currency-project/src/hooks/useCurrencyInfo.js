import { useEffect, useState } from "react";

function useCurrencyInfo (currency){
    const [data, setData] = useState({});

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`

    useEffect(()=>{
        fetch(url)
        .then((response) =>{
            return response.json();
        })
        .then((response) => {
            setData(response[currency])
        })
        console.log(data)
    }, [currency]);

    console.log(data)
    return data;
}

export default useCurrencyInfo;