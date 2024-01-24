"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { user } = useUser();
  useEffect(() => {
    console.log(user);
  }, []);
  const router = useRouter();
  return (
    <div>
      <h1 className=" p-6 border-b flex  ml-64 items-center justify-between ">
        <SearchBar />
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => router.push("/sign-in")}>Login</button>
        )}
      </h1>
    </div>
  );
};
export default Header;
