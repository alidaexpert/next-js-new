import db from '@/db.json'
import { NextResponse } from "next/server";

export const GET = (request) => {
    // console.log(request.cookies.get(''), request.headers.get('x-forwarded-host'))
    const {searchParams}=new URL(request.url)
    const categoryId=searchParams.get('category')
    let products =db.dashboardProducts
    if(categoryId){
        products=products.filter(product=>product.category === categoryId)
    }

  return  NextResponse.json(products)
};

export const POST =async (request) => {
    const body= await request.json()
   db.dashboardProducts.push(body)
    
  return  NextResponse.json(
    {
        message: "Product Added Successfully"
    }
  )
};
