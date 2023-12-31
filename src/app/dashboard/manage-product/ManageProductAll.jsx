"use client"
import loadDashboardProducts from '@/utils/loadDashboardProducts';
import Input from 'postcss/lib/input';
import React, { useEffect } from 'react';

// Initialization for ES Users
// import {
//   Modal,
//   Ripple,
//   initTE,
// } from "tw-elements";



const ManageProductAll =async () => {

  // useEffect(()=>{
  
  //       initTE({ });

    
  // },[])

  useEffect(() => {
    const test = async () => {
      const { initTE } = await import('tw-elements');
      const { Modal, Ripple  } = await import('tw-elements'); // Import the Collapse component if needed
      initTE({ Modal, Ripple }); // Call the initTE function with the Collapse component
    };
    test();
  }, [1000]);
    const products= await loadDashboardProducts()
    
    return ( 
      
        <div className='w-screen '> 
       

{/* <!-- Modal --> */}
<div
  data-te-modal-init
  className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModal"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div
    data-te-modal-dialog-ref
    className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
    <div
      className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
      <div
        className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        {/* <!--Modal title--> */}
        <h5
          className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
          id="exampleModalLabel">
         Update Product
        </h5>
        {/* <!--Close button--> */}
        <button
          type="button"
          className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* <!--Modal body--> */}
      <div className="relative flex-auto p-4" data-te-modal-body-ref>
        jhjkdfhkja 
        {/* <input type="" name="" value=""/> */}
      </div>

      {/* <!--Modal footer--> */}
      <div
        className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <button
          type="button"
          className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          data-te-modal-dismiss
          data-te-ripple-init
          data-te-ripple-color="light">
          Close
        </button>
        <button
          type="button"
          className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>

        <table className='table-fixed mx-2   w-full '>
        <thead>
       <tr>
        <th colSpan={3} className='   bg-teal-400 '  >
        Manage Product
        </th>
       </tr>
        </thead>
        <tbody >
            {
                products.map(({id,title})=>
               
          
                <tr key={id} className='border border-gray-200'>
                    <td className='border border-gray-200 p-2 w'>
                        <p>{title}</p>
                    </td>
                    <td className='border border-gray-200'>
                       {/* <button type="button" className='text-white px-2 py-1 bg-blue-500 m-2 '>
                            Update
                        </button> */}
                        <button
  type="button"
  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
  data-te-toggle="modal"
  data-te-target="#exampleModal"
  data-te-ripple-init
  data-te-ripple-color="light">
  Update
</button>

                    </td>
                    <td>
                        <button type="" className='text-white px-2 py-1 bg-red-500 m-2 '>
                            Delete
                        </button>
                    </td>
                </tr>
            
        )
            }
            </tbody>
           </table>


        </div>

        
        
    );
};

export default ManageProductAll;



