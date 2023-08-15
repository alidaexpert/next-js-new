import SinglePost from '@/app/Component/Posts/SinglePost';
import loadBlogData from '@/utils/loadBlogData';
import React from 'react';

const BlogPage = async() => {
    const posts=await loadBlogData();

    // console.log(posts)
    return (
        <div>
            {
                posts.map((post)=><SinglePost key={post.id}   postId={post} ></SinglePost>)
            }
        </div>
    );
};

export default BlogPage;