"use client"
import { pusherClient } from "@/app/lib/pusher";
import { useSession } from "next-auth/react";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";


export default function joinPage() {
    const { data: session } = useSession();
    const [room, setRoom] = useState('');
    const [roomText, setRoomText] = useState('');
    
    function joinRoom(){
        setRoom(roomText);
    }

    useEffect(()=>{
        if(room) {
            pusherClient.subscribe(room)
        pusherClient.bind('event', (res:any)=>{console.log(res)})
        }
        return()=>{
            pusherClient.unsubscribe(room)
        }
    },[room])

    return(
        <div className="h-screen flex flex-col justify-center">
            <div className="bg-teal-400 rounded flex p-7">
                <div className="basis-1/2 flex flex-col items-center gap-5">
                    <p>{session?.user && `Welcome ${session.user.name}`}</p>
                    <input type="text" onChange={(e)=>setRoomText(e.target.value)} value={roomText}/>
                    <button onClick={joinRoom}>Join</button>
                </div>
                <div className="basis-1/2">
                    hi
                </div>
            </div>
        </div>
    )
}