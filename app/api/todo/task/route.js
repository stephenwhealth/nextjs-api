import {NextResponse} from 'next/server';
import connectDB from '@/src/utils/connectionDB';
import Todo from '@/src/model/todo';


// getting numbers of not complted todos

export async function GET (request, {params}){
    // connecting to the database
    connectDB()

    try{
        const notCompletedTodos = await Todo.find({ Completed: false });
        const count = notCompletedTodos.length;

        if(count === 0){
            return NextResponse.json({ message: 'no uncompleted todos found', count });
        }

        return NextResponse.json({ message: 'Not completed todos count', count, notCompletedTodos });
    }
    catch(error){
        return NextResponse.json({message: 'Error fetching data', error});
    }
}