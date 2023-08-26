import { useState, useEffect } from "react";

export function useFetch(url){
    const [data, setdata] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>setdata(data));
    } ,[]);

    return {data};
}