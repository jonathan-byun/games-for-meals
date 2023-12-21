"use client";
import { getServerSession } from "next-auth";
import { getSession, signIn, signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import Link from "next/link"
export default function Home() {
  const { data: session } = useSession();
  return (
    <main className="flex flex-col mx-auto max-w-5xl justify-center items-center h-screen gap-8">
      <p className="text-4xl font-bold">Loser chooses where to eat</p>
      {session?.user
        ? <>
          <Link href={'/protected'}>Start</Link>
          <button onClick={() => signOut()}>Sign out</button>
          </>
        : <button onClick={() => signIn()} className="border-2 rounded py-2 px-4">Log In</button>

      }

    </main>
  )
}
