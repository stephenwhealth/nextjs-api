import {NextResponse} from 'next/server';
import connectDB from '@/src/utils/connectionDB';
import Todo from '@/src/model/todo';

export async function GET (request, {params}){

    // connecting to the database
    connectDB()

    const {id} = await params;

    const todo = await Todo.findById(id).select('Title');
    if(!todo){
        return NextResponse.json({message: 'No data found'}); 
    }

    return NextResponse.json({message: 'Todo data', todo});
}

// updating a todo data

export async function PUT (request, {params}){

    // connecting to the database
    connectDB()

    const {id} = await params;

    const todo = await Todo.findByIdAndUpdate(id, await request.json(), { returnDocument: 'after' });

    if(!todo){
        return NextResponse.json({message: 'No data found'}); 
    }

    return NextResponse.json({message: 'updated data', todo});
}

// DELETING a todo data

export async function DELETE (request, {params}){

    // connecting to the database
    connectDB()

    const {id} = await params;

    const todo = await Todo.findByIdAndDelete(id);
    
    if(!todo){
        return NextResponse.json({message: 'No data found'}); 
    }

    return NextResponse.json({message: 'data deleted successfully'});
}

// // getting numbers of not complted todos

// export async function GET (request, {params}){
//     // connecting to the database
//     connectDB()

//     try{
//         const notCompletedTodos = await Todo.find({ completed: false });
//         const count = notCompletedTodos.length;

//         if(count === 0){
//             return NextResponse.json({ message: 'no uncompleted todos found', count });
//         }

//         return NextResponse.json({ message: 'Not completed todos count', count, notCompletedTodos });
//     }
//     catch(error){
//         return NextResponse.json({message: 'Error fetching data', error});
//     }
// }