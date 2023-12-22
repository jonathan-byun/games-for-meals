"use client";
import { getSession, signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center h-auto bg-indigo-50 p-10 gap-8 rounded-md">
          <div className="rounded-full overflow-hidden">
            <Image src={"/logo.png"} alt="Games For Meals" width={200} height={200} />
          </div>
          <p className="text-4xl font-bold">Loser chooses where to eat</p>
          {session?.user
            ? <>
              <Link href={'/protected/home'} className="border-2 rounded py-2 px-7 bg-cyan-500">Start</Link>
              <button onClick={() => signOut()} className="border-2 rounded py-2 px-4 bg-blue-500">Sign out</button>
            </>
            : <button onClick={() => signIn()} className="border-2 rounded py-2 px-4 bg-green-500">Log In</button>
          }
        </div>
    </div>
        
  )
}
