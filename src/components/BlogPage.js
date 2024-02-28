import React from 'react';
import blogData from '../api/blogData.json';
import exercises from '../assets/images/exercises.jpeg'

const BlogPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h3 className="font-semibold text-yellow-600 opacity-10 lg:block hidden text-9xl absolute top-0 right-0 mr-12 mt-32">Exercise</h3>
      <h1 className="text-3xl font-bold mb-8 text-green-600 text-center">Articles For You</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {blogData.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl text-yellow-600 font-bold mb-4">{post.title}</h2>
            <img src={exercises} alt="hero-banner" className="hero-banner-img lg:mt-4" />
            <p className="text-gray-700 font-serif mt-4 mb-4 ">{post.content}</p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-black-600">By {post.author} on {post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
