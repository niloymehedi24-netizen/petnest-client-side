"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Input } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const image = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain one lowercase letter.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    try {
      setLoading(true);

      const toastId = toast.loading("Creating your account...");

      const { data, error } = await authClient.signUp.email({
        email,
        password,
        name,
        image,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message, {
          id: toastId,
        });
        return;
      }

      toast.success("Account created successfully!", {
        id: toastId,
      });

      form.reset();

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (err) {
      toast.error(err.message || "Something went wrong");
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
        {/* Card */}
        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] bg-clip-text text-transparent">
              PetNest
            </h1>

            <p className="text-gray-500 mt-2">
              Create your account and start adopting pets.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignUp} className="space-y-5">
            <Input
              label="Full Name"
              name="name"
              placeholder="Enter your name"
              variant="bordered"
              required
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              variant="bordered"
              required
            />

            <Input
              label="Photo URL"
              name="photoURL"
              placeholder="https://example.com/photo.jpg"
              variant="bordered"
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              variant="bordered"
              required
            />

            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              variant="bordered"
              required
            />

            {/* Password Requirements */}
            <div className="rounded-2xl bg-cyan-50 dark:bg-amber-200 p-4 text-sm">
              <p className="font-semibold mb-2">Password Requirements:</p>

              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>✓ At least 8 characters</li>
                <li>✓ One uppercase letter</li>
                <li>✓ One lowercase letter</li>
                <li>✓ Passwords must match</li>
              </ul>
            </div>

            <Button
              type="submit"
              className="w-full bg-linear-to-r from-[#D98A52] via-[#8AB56E] text-white rounded-xl"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
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
              onClick={handleGoogleLogin}
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </Button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-cyan-600 hover:text-blue-600 transition"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
