import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-[70px] bg-white/60 rounded-2xl p-3 shadow-2xl">
      <h1 className="text-gray-700 font-bold text-2xl">
        <Link href="/">Home Page</Link>
      </h1>
    </div>
  );
};

export default Header;
