import RoomInput from "@/app/components/RoomInput"
import { getServerSession } from "next-auth"
import Pusher from "pusher-js";


export default async function testPage() {
    const session = await getServerSession()
    const key = process.env.PUSHER_APP_KEY
    const cluster = process.env.PUSHER_APP_CLUSTER
    if (!key|| !cluster) {
        return 'check to see that env variables are set'
    }
    const pusher = new Pusher(key,{cluster});
    async function joinRoom(room: string) {
        "use server";
        const channel = pusher.subscribe(room);
        channel.bind('event', function(data: any) {
            console.log(JSON.stringify(data))
        });
        return (room)
    }

    async function leaveRoom(joined: string) {
        "use server";
        pusher.unsubscribe(joined)
    }
    return(
        <div className="h-screen flex flex-col justify-center">
            <div className="bg-teal-400 rounded flex p-7">
                <div className="basis-1/2 flex flex-col items-center gap-5">
                    <p className="text-3xl">Welcome {session?.user?.name}</p>
                    <RoomInput joinRoom={joinRoom} leaveRoom={leaveRoom}/>
                </div>
                <div className="basis-1/2">
                    hi
                </div>
            </div>
        </div>
    )
}