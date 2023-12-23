import Pusher from "pusher-js";
import { useEffect } from "react"

export default function JoinView(room:string) {
    const key = process.env.PUSHER_APP_KEY
    const cluster = process.env.PUSHER_APP_CLUSTER
    useEffect(()=>{
        if (!key|| !cluster) {
            return
        } 
        const pusher = new Pusher(key,{cluster});
            const channel = pusher.subscribe(room);
            channel.bind('event', function(data: any) {
                console.log(JSON.stringify(data))
            });
        return()=>{
            pusher.unsubscribe(room)
        }
    },[room])
    return(
    <div>In room {room}</div>
    )
}