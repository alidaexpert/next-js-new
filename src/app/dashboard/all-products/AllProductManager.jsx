"use client"
import React ,{ useRef, useState } from 'react';
import Modal from '../manage-product/Modal';
import useProducts from '@/hooks/useProducts';

const AllProductManage =  () => {
    const {products, isLoading,isValidating,mutate}=useProducts()
    const modalRef=useRef(null)
  const [updateData,setUpdateData]=useState(null)



  const openModal=(product)=>{
    setUpdateData(product)
    modalRef.current.showModal()
    console.log("clicked")
    
  }
  const closeModal=()=>{
    setUpdateData(null)
    modalRef.current.close()
  }

  const handledUpdate=async(e)=>{
        e.preventDefault();
        const form=e.target;
        const title=form.title.value;
        const price=form.price.value;
        const data={title,price}
        // console.log(data)
        if(title && price){
            try{
                const res=await fetch(`http://localhost:5000/dashboardProducts/${updateData?.id}`,{
                    method:'PATCH',
                    headers:{
                        "content-type":"application/json"
                    },
                    body: JSON.stringify(data)
                })
                const result=await res.json({ revalidated: true })
                console.log(result)
                closeModal()
                mutate()
                form.reset()
            }
            catch(error){
                        console.log(error)
            }
        }

  }
  const handledDelete=async(id)=>{
 
        try{
            const res=await fetch(`http://localhost:5000/dashboardProducts/${id}`,{
                method:'DELETE'
            })
            const result=await res.json()
            console.log(result)
            mutate()
        }
        catch(error){
            console.log(error)
        }

}


    return (
        <div >
            {
                isLoading && <h1 className='text-center text-2xl m-2 '>Loading..</h1>
            }
        {!isLoading && <table className={`table-fixed mx-2   w-full ${isValidating? 'opacity-50': 'opacity-100'}`}>
             <thead>
            <tr>
             <th colSpan={6} className='   bg-teal-400 '  >
             Manage Product
             </th>
            </tr>
             </thead>
             <tbody >
                 {
                     products.map((product)=>
                    
               
                     <tr key={product.id} className='border border-gray-200'>
                        <td  className='border border-gray-200 '>
                             <p className='text-center'>{product.id}</p>
                         </td>
                         <td colSpan={2} className='border border-gray-200 p-2'>
                             <p className='text-center'>{product.title}</p>
                         </td>
                         <td className='border border-gray-200'>
                         <p className='text-center'>{product.price}</p>
                         </td>
                         <td className='border border-gray-200'>
                         <button onClick={()=>openModal(product)}  className='text-white px-2 py-1 bg-blue-500 m-2 '>
                                 Update
                             </button> 
                         </td>
                         <td>
                             <button onClick={()=>handledDelete(product.id)} type="" className='text-white px-2 py-1 bg-red-500 m-2 '>
                                 Delete
                             </button>
                         </td>
                     </tr>
                 
             )
                 }
                 </tbody>
                </table>}
                <Modal ref={modalRef} handledUpdate={handledUpdate} closeModal={closeModal} updateData={updateData}></Modal>
         </div>
    );
};

export default AllProductManage;