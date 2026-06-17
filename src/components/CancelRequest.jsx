"use client";

import { Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CancelRequest = ({ id }) => {
  const router = useRouter();

  const handleCancel = async () => {
    const res = await fetch(`http://localhost:8000/adopt/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      toast.success("Request cancelled");
      router.refresh();
    } else {
      toast.error("Failed to cancel request");
    }
  };

  return (
    <Button
      color="danger"
      variant="outline"
      onClick={handleCancel}
      className={"rounded-xl text-red-500"}
    >
      Cancel Request
    </Button>
  );
};

export default CancelRequest;
