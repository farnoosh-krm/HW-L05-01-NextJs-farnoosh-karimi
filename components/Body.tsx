import { nanoid } from "nanoid";
import Link from "next/link";
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
    <div className="w-full p-4 mt-5 h-[560px] bg-white/60  shadow-2xl overflow-x-auto rounded-2xl">
      <h2 className="text-lg font-semibold">Posts List:</h2>
      {PostsTitle.map((Posts) => (
        <div
          key={nanoid()}
          className="w-full p-3 mt-4 bg-[#c8f3c3] rounded-2xl shadow-lg border-[5px] border-white/60 hover:bg-[#9bbc99] hover:text-white hover:cursor-pointer"
        >
          <Link href={`/posts/${Posts.id}`}>
            <h4 className=" text-lg font-semibold ">
              {Posts.id} - {Posts.title}
            </h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Body;
