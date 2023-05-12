import React from "react";

function MyPosts() {
  const myPosts = [
    {
      id: 1,
      img: "./images/m1.png",
      title: "Business",
      heading: "Font sizes in UI design: The complete guide to follow",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: "./images/m2.png",
      title: "Economy",
      heading: "How to build rapport with your web design clients",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto my-20 px-10 xl:px-0 md:w-10/12 lg:w-full space-y-4">
      <h2 className="text-2xl font-semibold">My Posts</h2>
      <div className="space-y-10">
        {myPosts.map((post) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 overflow-hidden items-center">
            <img src={post.img} alt="post-img" className="w-full h-80 object-cover border-2  rounded-md" />
            <div className="space-y-4">
              <h3 className="uppercase text-purpleColor tracking-[3px]">{post.title}</h3>
              <h2 className="text-2xl font-semibold">{post.heading}</h2>
              <p>{post.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPosts;
