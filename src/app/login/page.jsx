"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Input } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const toastId = toast.loading("Signing in...");

    try {
      setLoading(true);

      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message, {
          id: toastId,
        });
        return;
      }

      toast.success("Login successful!", {
        id: toastId,
      });

      form.reset();

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (err) {
      toast.error(err.message || "Something went wrong", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-cyan-50 via-white to-purple-50 dark:from-black dark:via-gray-950 dark:to-gray-900 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] bg-clip-text text-transparent">
              PetNest
            </h1>

            <p className="text-gray-500 mt-2">
              Welcome back! Login to continue.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              variant="bordered"
              required
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              variant="bordered"
              required
            />

            <Button
              type="submit"
              className="w-full bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] text-white font-semibold rounded-xl"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Login"}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
            <span className="text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
          </div>

          {/* Google Login */}
          <Button
            variant="bordered"
            className="w-full flex items-center justify-center gap-3 py-6 font-medium hover:bg-default-100 transition-all duration-300"
            onPress={handleGoogleLogin}
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </Button>

          {/* Register Link */}
          <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
            Do not have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-cyan-600 hover:text-blue-600 transition"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
