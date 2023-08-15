// import { generateMetadata } from '@/app/layout';
import loadBlogData from '@/utils/loadBlogData';
import loadSingleBlogData from '@/utils/loadSingleBlogData';
import React from 'react';

export const generateMetadata=async ({params})=>{
    const {title}=await loadSingleBlogData(params.id);

   return {
        title:"Nex Project | " + title
    }
}
export const generateStaticParams=async ()=>{
const blogs=await loadBlogData()
 return blogs.map(({id})=>({
    id: id.toString()
 }))
}
const SingleBlogPost =async ({params}) => {
    const {id}=params
  const post=await loadSingleBlogData(id);
    const {title,body}=post
    console.log(post)
    return (
        <div className='container mx-auto border border-red-500 p-2 m-2'>
            <p className='text-4xl'>Post {id}</p>
        <h1 className='text-2xl'>{title}</h1>
        <p>{body} </p>
      </div>
    );
};

export default SingleBlogPost;