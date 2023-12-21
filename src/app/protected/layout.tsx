import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function protectedLayout({
    children
}:{children: React.ReactNode}) {
    return(
        <div>
            {children}
        </div>
    )
}