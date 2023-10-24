import {NextResponse} from "next/server"
import {prisma} from "@/app/libs/prisma"  


export async function GET(request, {params}) {
    const task = await prisma.property.findMany() 
    return NextResponse.json(task)
}

export async function POST(request) {
    try {   
        const {data} = await request.json()  
        const newNote = await prisma.property.create({
          data:  data
        });
        console.log(newNote)
        return NextResponse.json(newNote.id);
      } catch (error) {
        if (error instanceof Error) {
          return NextResponse.json(
            {
              message: error.message,
            },
            {
              status: 500,
            }
          );
        }
      }
}