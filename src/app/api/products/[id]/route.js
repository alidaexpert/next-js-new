import db from '@/db.json'
import { NextResponse } from "next/server";

export const GET = (request,{params}) => {
    // console.log(request.cookies.get(''), request.headers.get('x-forwarded-host'))
    // const {searchParams}=new URL(request.url)
    let product =db.dashboardProducts.find(product=>product.id === +params.id)
    if(product){
        return  NextResponse.json(product)
    }
    return  NextResponse.json({
        message:"Product Not Found"
    },
    {
        status: 404
    })

 
};

export const PATCH =async (request,{params}) => {
    const body= await request.json()
   const index=db.dashboardProducts.findIndex((product)=>product.id === +params.id)
   db.dashboardProducts[index]={...db.dashboardProducts[index], ...body}
  return  NextResponse.json(
    {
        message: "Product Update Successfully"
    }
  )
};


export const DELETE = (request,{params}) => {
    db.dashboardProducts = db.dashboardProducts.filter((product)=>product.id !== +params.id)

  return  NextResponse.json(
    {
        message: "Product Delete Successfully"
    }
  )
};
