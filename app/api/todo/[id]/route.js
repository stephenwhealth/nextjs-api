import {NextResponse} from 'next/server';


// GETTING a single todo data
export async function GET(request, {params}) {

    const {id} = params;

    return NextResponse.json({message: `fetching todo with id: ${id}`});
}


// UPDATING a single todo data
export async function PUT(request, {params}) {

    const {id} = params;

    return NextResponse.json({message: `fetching todo with id: ${id}`});
}


// DELETING a single todo data
export async function DELETE(request, {params}) {

    const {id} = params;

    return NextResponse.json({message: `fetching todo with id: ${id}`});
}