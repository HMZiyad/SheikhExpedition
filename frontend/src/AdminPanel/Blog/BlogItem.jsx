import React from "react";

const BlogItem = ({ blog, onEdit, onDelete }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{blog.BlogTitle}</h2>
                <div>
                    <button
                        type="button"
                        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                        Delete
                    </button>
                </div>
            </div>
            <p className="mb-2">Content: {blog.BlogContent}</p>
            <p className="mb-2">Publish Date: {blog.BlogPublishTime}</p>
            <p>Author: {blog.BlogAuthor}</p>
        </div>
    );
};

export default BlogItem;
