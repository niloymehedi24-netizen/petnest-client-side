"use client";

import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

export default function Error({ error, reset }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-cyan-50 via-white to-purple-50 dark:from-black dark:via-gray-950 dark:to-gray-900 px-6">
      <div className="max-w-3xl text-center">
        {/* Icon */}
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 text-white shadow-2xl animate-pulse">
          <AlertTriangle size={60} />
        </div>

        {/* Title */}
        <h1 className="mt-10 text-5xl md:text-6xl font-extrabold bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] bg-clip-text text-transparent">
          Something Went Wrong!
        </h1>

        {/* Message */}
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-8 max-w-2xl mx-auto">
          Oops! We could not complete your request. An unexpected error occurred
          while loading this page. Please try again or return to the homepage.
        </p>

        {/* Error Message (Development Only) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-left shadow-sm dark:bg-red-950 dark:border-red-800">
            <p className="font-semibold text-red-600 mb-2">Error Details</p>

            <code className="text-sm -wrap-break-words text-red-500">
              {error?.message}
            </code>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={() => reset()}
            className="flex items-center gap-3 rounded-2xl bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] px-8 py-4 text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <RefreshCw size={20} />
            Try Again
          </button>

          <Link href="/">
            <button className="flex items-center gap-3 rounded-2xl border-2 border-[#8AB56E] px-8 py-4 font-semibold text-[#4F7180] transition-all duration-300 hover:bg-[#8AB56E] hover:text-white">
              <Home size={20} />
              Back to Home
            </button>
          </Link>
        </div>

        {/* Decorative */}
        <div className="mt-16 flex justify-center gap-4">
          <div className="h-3 w-3 rounded-full bg-[#D98A52] animate-bounce"></div>
          <div className="h-3 w-3 rounded-full bg-[#8AB56E] animate-bounce delay-100"></div>
          <div className="h-3 w-3 rounded-full bg-[#4F7180] animate-bounce delay-200"></div>
        </div>
      </div>
    </section>
  );
}
