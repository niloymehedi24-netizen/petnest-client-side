import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import CancelRequest from "@/components/CancelRequest";

const MyRequestsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/adopt/user/${user?.id}`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();
  console.log(data);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] bg-clip-text text-transparent">
          My Adoption Requests
        </h1>

        <p className="text-gray-500 mt-2">
          Track all your pet adoption requests in one place.
        </p>
      </div>

      {/* Empty State */}
      {data?.length === 0 ? (
        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 p-12 text-center bg-white dark:bg-gray-900 shadow-lg">
          <div className="text-7xl mb-4">🐾</div>

          <h2 className="text-2xl font-bold">No Adoption Requests Yet</h2>

          <p className="text-gray-500 mt-2 mb-6">
            You have not requested adoption for any pet.
          </p>

          <Link href="/all-pets">
            <Button className="bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] text-white">
              Browse Pets
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {data?.map((request) => (
            <div
              key={request._id}
              className="group rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                  {/* Left Side */}
                  <div className="flex gap-5">
                    <div className="relative w-28 h-28 rounded-2xl overflow-hidden">
                      <Image
                        src={request.petImage}
                        alt={request.petName}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold">{request.petName}</h2>

                      <div className="space-y-2 mt-4 text-gray-600 dark:text-gray-300">
                        <p>
                          <span className="font-semibold">Request Date:</span>{" "}
                          {new Date(request.createdAt).toLocaleDateString()}
                        </p>

                        <p>
                          <span className="font-semibold">Pickup Date:</span>{" "}
                          {request.pickupDate}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex flex-col items-start lg:items-center justify-center">
                    <span
                      className={`px-4 py-2 rounded-xl text-sm font-bold capitalize ${
                        request.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : request.status === "rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {request.status}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 items-center">
                    <Link href={`/all-pets/${request.petId}`}>
                      <Button
                        variant="secondary"
                        className={"rounded-xl text-white bg-[#8AB56E]"}
                      >
                        View Details
                      </Button>
                    </Link>

                    <CancelRequest id={request._id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyRequestsPage;
