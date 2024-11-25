"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-2xl sm:text-6xl font-bold text-center"
        >
          Welcome to StableMax
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="text-center text-white/50"
        >
          Transform your ideas into stunning images with StableMax.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
        >
          <Link href="/generate" className="mt-4">
            <Button className="mt-4 text-center">Get Started</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
