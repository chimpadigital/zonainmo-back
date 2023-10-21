import {NextResponse} from "next/server"
import {prisma} from "@/app/libs/prisma"

export async function GET(request, {params}) {
    const user = await prisma.user.findMany() 
    return NextResponse.json(user)
}

export async function POST(request) {
}