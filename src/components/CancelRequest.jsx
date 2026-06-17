"use client";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const CancelRequest = ({ id }) => {
  const router = useRouter();

  const handleCancel = async () => {
    const { data } = await authClient.token();

    const res = await fetch(`http://localhost:8000/adopt/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${data.token}`,
      },
    });

    if (res.ok) {
      toast.success("Request cancelled");
      router.refresh();
    } else {
      toast.error("Failed to cancel request");
    }
  };

  return (
    <AlertDialog>
      <Button
        onClick={handleCancel}
        variant="outline"
        className={"rounded-xl text-red-500"}
      >
        Delete Request
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Request permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>This action cannot be undone.</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" className={"rounded-xl"}>
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default CancelRequest;
