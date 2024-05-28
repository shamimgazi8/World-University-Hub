// src/CommunityPage.js
import React from "react";

const CommunityPage = () => {
  const posts = [
    {
      id: 1,
      author: "Jane Doe",
      avatar: "https://via.placeholder.com/150",
      content: "This is a sample post content.",
      comments: [
        { id: 1, author: "John Smith", content: "Nice post!" },
        { id: 2, author: "Alice Johnson", content: "Thanks for sharing!" },
      ],
    },
    {
      id: 2,
      author: "John Smith",
      avatar: "https://via.placeholder.com/150",
      content: "Another example post content.",
      comments: [{ id: 1, author: "Jane Doe", content: "Great post!" }],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Community</h1>
        {posts.map((post) => (
          <div key={post.id} className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-bold">{post.author}</h2>
                <p className="text-gray-600">Posted just now</p>
              </div>
            </div>
            <p className="text-gray-800 mb-4">{post.content}</p>
            <div>
              <h3 className="text-lg font-semibold mb-2">Comments</h3>
              {post.comments.map((comment) => (
                <div key={comment.id} className="mb-2">
                  <p className="text-gray-800">
                    <span className="font-bold">{comment.author}:</span>{" "}
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add a comment..."
              className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
