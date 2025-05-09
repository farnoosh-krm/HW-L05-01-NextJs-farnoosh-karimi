import { nanoid } from "nanoid";
import React from "react";

interface PostsProps {
  userId?: number;
  id?: number;
  title: string;
  body?: string;
}

interface PostsListProps {
  PostsTitle: PostsProps[];
}

const Body = ({ PostsTitle }: PostsListProps) => {
  return (
    <div className="w-full p-4 mt-5 h-[560px] bg-white/60 rounded-2xl shadow-2xl overflow-x-auto">
      <h2 className="text-lg font-semibold">Posts List:</h2>
      {PostsTitle.map((Posts) => (
        <div
          key={nanoid()}
          className="w-full p-3 mt-4 bg-[#bdefb7] rounded-2xl shadow-lg border-[5px] border-white/60 hover:bg-[#9bbc99] hover:text-white hover:cursor-pointer"
        >
          <h4 className=" text-lg font-semibold ">{Posts.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Body;
