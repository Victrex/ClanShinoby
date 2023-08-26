import { useState, useEffect } from "react";

export function useDeleteFetch(url){
    const [data, setdata] = useState(null);

    useEffect(()=>{
        fetch(url, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            })
            .then((response)=>response.json())
            .then((data)=>setdata(data));
      }, []);

    return {data};
}