import Body from "../components/Body";
import Header from "../components/Header";
import { GetStaticProps } from "next";

interface PostsProps {
  userId?: number;
  id?: number;
  title: string;
  body?: string;
}

interface PostsListProps {
  PostsTitle: PostsProps[];
}

export default function Home({ PostsTitle }: PostsListProps) {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-r from-[#c9ffbf] to-[#ffafbd] ">
      <Header />
      <Body PostsTitle={PostsTitle} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const Posts = await response.json();
  const PostsTitle = Posts.slice(0, 5);

  return {
    props: {
      PostsTitle,
    },
  };
};
