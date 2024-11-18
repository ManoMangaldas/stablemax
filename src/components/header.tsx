import React from "react";
import { ModeToggle } from "./modetoggle";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="fixed top-0 w-full h-[60px] bg-black border-b-2 border-white/60 p-3 flex">
      <div className="text-bold text-2xl">
        <Link href="/">StableMax</Link>
      </div>
      <div className="flex-grow  text-right">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
