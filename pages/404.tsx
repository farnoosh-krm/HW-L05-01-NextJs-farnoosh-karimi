import Image from "next/image";
import error404Pic from "../images/error404.png";
import Header from "../components/Header";

export default function Custom404() {
  return (
    <div className="flex flex-col p-4 justify-start items-center min-h-screen bg-gradient-to-r from-[#c9ffbf] to-[#ffafbd]">
      <Header />
      <Image
        src={error404Pic}
        alt="error 404"
        className="w-[500px] rounded-[50%] mt-[50px] shadow-2xl border-[7px] border-white/60"
        priority
      />
    </div>
  );
}
