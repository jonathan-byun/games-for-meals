'use client';
import { join } from "path";


import { useEffect, useState } from "react";

export default function RoomInput({ joinRoom, leaveRoom }: {
    joinRoom: (arg: string) => Promise<String>,
    leaveRoom: (arg:string)=>{}
}) {
    const [room, setRoom] = useState('');
    const [joined, setJoined] = useState('')
    async function attemptJoin() {
        const result = await joinRoom(room)
        setJoined('result')
    }
    async function leave() {
        await leaveRoom(joined)
    }
    return (
        <>
            <input type="text" onChange={(e) => setRoom(e.target.value)} />
            <button onClick={attemptJoin}>Join</button>
            {/* <button onClick={leave}>Leave</button> */}
            {joined}
        </>
    )

}