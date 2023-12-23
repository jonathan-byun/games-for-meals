import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherClient = new PusherClient(
    process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,{
        cluster:'us3'
    }
)