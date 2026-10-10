import { NextResponse } from "next/server";
import Todo from "@/src/model/todo";
import connectDB from "@/src/utils/connectionDB";
import todo from "@/src/model/todo";


export async function GET (request, {params}) {

    // connect to database
    await connectDB()

    const {Title} = await params;

    const findtitle = await Todo.findOne({ Title })

    if(!findtitle){
        return NextResponse.json({message: "title not found"},{status: 404})
    }

    return NextResponse.json(findtitle)
}