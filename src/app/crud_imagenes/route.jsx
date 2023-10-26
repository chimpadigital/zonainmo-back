import {NextResponse} from "next/server"
import {prisma} from "@/app/libs/prisma"  


export async function GET(request, {params}) {
    const task = await prisma.images.findMany() //get where params
    return NextResponse.json(task)
}

export async function POST(request, {params}) {
    try {   
        const {description, propertyId} = await request.json()  
        const newNote = await prisma.images.create({
          data: {
            base64: descriptimagesByteion,
            propertyId : propertyId 
            
          }
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