"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700"
const INACTIVE_ROUTE = "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700"
const ROUTES = [{
    path: '/',
    name: 'Home'
}, {
    path: '/protected',
    name: 'Protected'
}, {
    path: '/serverAction',
    name: 'ServerAction'
}, {
    path: '/apiFromClient',
    name: 'APIFROMCLIENT'
}, {
    path:'/protected/testPage',
    name:'/testing'
}]

function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                {session?.user?.name}
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            Not signed in
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}

export default function NavMenu() {
    const pathname = usePathname();
    const MappedRoutes = ROUTES.map((route) =>
        <Link href={route.path}>
            <li className={pathname == route.path ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                {route.name}
            </li>
        </Link>)
    return (
        <div>
            <AuthButton />
            <div className="my-4 bg-gray-500"></div>
            <ul>
                {MappedRoutes}
            </ul>
        </div>
    )
}