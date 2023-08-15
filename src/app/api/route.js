import { NextResponse } from "next/server";

export const GET = () => {
    
  const message=  {
    message: "Hello World"
    }
    // const res=response.GET(message)
  return  NextResponse.json(message)
};

