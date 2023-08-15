import wait from '@/utils/wait';
import Link from 'next/link';
import React from 'react';

const SinglePost =async ({postId}) => {
  await wait()

  const {id,title,body}= postId;
    return (
        <div className='container mx-auto border border-red-500 p-2 m-2'>
            <p className='text-3xl'>Post {id}</p>
          <h1 className='text-2xl'>{title}</h1>
          <p>{body} </p>
        <Link href={`/blog/${id}`}>
            <button className='px-2 py-1 bg-blue-500 text-white mt-3'>Details</button>
        </Link>
        </div>
    );
};

export default SinglePost;