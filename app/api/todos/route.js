import { NextResponse } from "next/server";

// creatin todo route
export async function GET(request) {

    return new NextResponse(JSON.stringify({
        message: "welcome to my first next.js app"
    }))
}
