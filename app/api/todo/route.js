import {NextResponse} from 'next/server';
import connectDB from '@/src/utils/connectionDB';
import Todo from '@/src/model/todo';


// creating a POST request to the API
export async function POST(request){

    // connecting to the database
    connectDB()

    const tododata = await request.json();

    const createdTodo = await Todo.create(tododata);
    return NextResponse.json({message: 'Todo created successfully', data: createdTodo}); 
}


// fetching a todo data
export async function GET(request){

    const todos = await Todo.find({});

    if(todos.length === 0){
        return NextResponse.json({message: 'No data found'}); 
    }

    return NextResponse.json({message: 'all data', todos}); 
}

