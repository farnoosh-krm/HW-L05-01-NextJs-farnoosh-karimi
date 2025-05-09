import Header from "../../components/Header";
import { GetStaticProps, GetStaticPaths } from "next";

interface PostsProps {
  userId?: number;
  id?: number;
  title: string;
  body?: string;
}

interface PostsListProps {
  PostsTitle: PostsProps[];
}

export default function PostsDetails() {
  return (
    <div className="flex flex-col p-4 justify-start items-center min-h-screen bg-gradient-to-r from-[#c9ffbf] to-[#ffafbd]">
      <Header />
      <div className="w-full p-4 mt-5 h-[560px] bg-white/60 rounded-2xl shadow-2xl overflow-x-auto"></div>
    </div>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = (await response.json()).slice(0, 5);
//   const postsId[]=posts.map(post=>(post.id))

//   return {
//     paths: [

//     ],
//     fallback:false,
//   };
// };
