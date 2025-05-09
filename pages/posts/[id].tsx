import Header from "../../components/Header";
import { GetStaticProps, GetStaticPaths } from "next";

type PostsProps = {
  userId?: number;
  id?: number;
  title: string;
  body?: string;
};

type PostProps = {
  Post: PostsProps;
};

export default function PostsDetails({ Post }: PostProps) {
  return (
    <div className="flex flex-col p-4 justify-start items-center min-h-screen bg-gradient-to-r from-[#c9ffbf] to-[#ffafbd]">
      <Header />
      <div className="w-full p-4 mt-5 h-[560px] bg-white/60 rounded-2xl shadow-2xl overflow-x-auto text-gray-400">
        Post ID: {Post.id}
        <h3 className="text-2xl font-bold text-gray-600 mt-2 mb-5">
          {Post.title}
        </h3>
        <p className="text-gray-500 text-lg">{Post.body}</p>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostsProps[] = (await response.json()).slice(0, 7);
  const paths = posts.map((post) => ({ params: { id: post.id?.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params!.id}`
  );
  const Post = await response.json();

  return {
    props: {
      Post,
    },
  };
};
