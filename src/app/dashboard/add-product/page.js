"use client"
import { useRouter } from 'next/navigation';
import React, { useRef, useState, useTransition } from 'react';

const AddProduct = () => {
    const [isPending,startTransition]=useTransition()
    const router=useRouter()
  const [loading,setLoading]=useState(false)
  const isLoading= loading || isPending
    const addRef=useRef(null)
    const handledAdd=async(e)=>{
        e.preventDefault();
        const form=e.target;
        let id=Number(form.id.value);
        let title=form.title.value;
        let price=Number(form.price.value);
        const data={id,title,price}

        console.log(data)
        if(id && title && price){
            try{

                const res=await fetch(`http://localhost:5000/dashboardProducts`,{
                    method:'POST',
                    cache: "no-cache",
                    headers:{
                        "content-type":"application/json"
                    },
                    body: JSON.stringify(data)
                })
                const result=await res.json({ revalidated: true })
                console.log(result)
                startTransition(()=>{
                    router.refresh();
                })
                form.reset()
             
            }
            catch(error){
                        console.log(error)
            }
        }

  }
    return (
        <div className='w-3/4'>
            <form onSubmit={handledAdd} ref={addRef} className={`m-2 p-4 flex flex-col gap-4 bg-teal-400 ${isLoading? 'opacity-50': 'opacity-100'}`}>
    <p className='text-2xl text-gray-500 text-center'>
        Add Product
    </p>
    <input className='px-2 py-1 outline-1 outline-teal-900 rounded-md placeholder-blue-300' type="number" name="id" placeholder='id'  />
    <input  className='px-2 py-1 outline-1 outline-teal-900 rounded-md placeholder-blue-300' type="text" name="title" placeholder='title'  />
    <input  className='px-2 py-1 outline-1 outline-teal-900 rounded-md placeholder-blue-300' type="number" name="price" placeholder='price' />
    <div className='flex justify-center'>
     <button className='px-3 py-2 bg-teal-900  text-white rounded-lg hover:bg-slate-950 transition-colors' type="submit">Confirm</button>
    </div>
  </form>
        </div>
    );
};

export default AddProduct;