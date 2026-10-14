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

// changing the title of a todo
export async function PUT (request, {params}) {
    try{
        await connectDB()   

    const {Title} = await params;

    const findtitle = await Todo.findOneAndUpdate({ Title }, await request.json(), { returnDocument: 'after' });

    if(!findtitle){
        return NextResponse.json({message: "title not found"},{status: 404})
    } 

    return NextResponse.json({message: "title updated successfully", data: findtitle})  
    } 

    catch (error)   {
        return NextResponse.json({message: "Error updating title"},{status: 500})
    } 
}


// when you have more than one todo with the same title, you can delete all of them using this route
export async function DELETE (request, {params}) {
    try{
        await connectDB()

        const {Title} = await params;
        const tododata = await Todo.find({ Title })

        if(tododata.length > 0){
            const result = await Todo.deleteMany({ Title })

            return NextResponse.json({

                message: "Todos deleted successfully",
                deletecount: tododata.length,
                
                // or you can use result.deletedCount to get the number of deleted documents
                // deletedcount: result.deletedCount
            })
        }
        else{
            return NextResponse.json({message: "Todo not found"},{status: 404})
        }

    }
    catch(error){
        return NextResponse.json({error: error.message},{status: 500})
    }
}