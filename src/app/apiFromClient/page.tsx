"use client";

import { useEffect, useState } from "react";

export default function APITestPage() {
    const [name,setName]= useState<string>();

    useEffect(()=>{
        fetch("/api/auth/whoAmI")
        .then((res)=>res.json())
        .then((data)=>setName(data.name));
    },[]);

    return (
        <div>
            <div>API ROUTE From Client</div>
            <div>Name: {name}</div>
        </div>
    )
}