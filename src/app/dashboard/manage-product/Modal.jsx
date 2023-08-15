import React, {forwardRef , useRef } from 'react';

const Modal = ({closeModal,updateData,handledUpdate},ref) => {
    const formRef=useRef(null)
    return (
        
            <dialog ref={ref}>
  <form onSubmit={handledUpdate} ref={formRef}>
    <p>
        Update Product
    </p>
    <input type="text" name="title" placeholder='title' defaultValue={updateData?.title} />
    <input type="number" name="price" placeholder='price' defaultValue={updateData?.price}  />
    <div>
      <button onClick={()=>{
        closeModal();
        formRef.current.reset()
      }}>Cancel</button>
      <button type="submit">Confirm</button>
    </div>
  </form>
</dialog>

        
    );
};

export default forwardRef(Modal);