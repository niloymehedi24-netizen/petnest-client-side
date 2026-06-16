"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="flex justify-between items-center shadow-md px-4 lg:px-5 bg-white">
      {/* Left */}
      <div>
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="PetNest" width={65} height={65} />

          <span className="text-2xl font-extrabold bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] bg-clip-text text-transparent tracking-wide">
            PetNest
          </span>
        </Link>
      </div>

      {/* Center */}
      <div className="hidden lg:flex">
        <ul className="flex gap-6 font-medium text-black">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-pets">All Pets</Link>
          </li>
          <li>
            <Link href="/my-requests">My Requests</Link>
          </li>
          <li>
            <Link href="/add-pet">Add Pet</Link>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {session?.user ? (
          <div className="flex items-center gap-2">
            {/* Avatar */}
            <div className="relative group">
              <Avatar>
                <Avatar.Image alt="John Doe" src={session?.user.image} />
                <Avatar.Fallback>{session.user.name}</Avatar.Fallback>
              </Avatar>

              {/* Tooltip */}
              <div className="absolute top-12 right-0 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {session?.user.name}
              </div>
            </div>

            <Button
              onClick={handleLogout}
              className={"text-red-500 rounded-xl"}
              variant="outline"
            >
              {" "}
              Logout{" "}
            </Button>
          </div>
        ) : (
          <ul className="hidden lg:flex gap-4 font-medium text-black">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
