"use client";

import { Button, Input, TextArea } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const AdoptionForm = ({ pet }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleAdopt = async (e) => {
    e.preventDefault();

    if (!session?.user) {
      toast.error("Please login first");
      return;
    }

    const form = e.target;

    const adoptionData = {
      petId: pet?._id,
      petName: pet?.name,
      petImage: pet?.imageUrl,

      userId: session?.user?.id,

      userName: session?.user?.name,
      userEmail: session?.user?.email,
      userPhoto: session?.user?.image,

      pickupDate: form.pickupDate.value,
      message: form.message.value,

      status: "pending",
      createdAt: new Date(),
    };

    const { data: tokenData } = await authClient.token();

    try {
      const toastId = toast.loading("Submitting adoption request...");

      const res = await fetch("http://localhost:8000/adopt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(adoptionData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to submit request", {
          id: toastId,
        });
        return;
      }

      toast.success("Adoption request submitted successfully!", {
        id: toastId,
      });

      form.reset();
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleAdopt} className="space-y-5">
      <Input label="Pet Name" defaultValue={pet?.name} />

      <Input
        label="User Name"
        placeholder="Your name"
        defaultValue={session?.user?.name || ""}
      />

      <Input
        label="User Email"
        placeholder="Your email"
        defaultValue={session?.user?.email || ""}
      />

      <Input type="date" name="pickupDate" label="Pickup Date" required />

      <TextArea
        name="message"
        label="Message"
        placeholder="Tell us why you would like to adopt this pet..."
      />

      <Button
        type="submit"
        className="w-full bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] text-white rounded-xl"
      >
        Adopt Now
      </Button>
    </form>
  );
};

export default AdoptionForm;
