"use client";
import {
  Button,
  Card,
  FieldError,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import React from "react";

const AddPetPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pet = Object.fromEntries(formData.entries());

    const { data: tokenData } = await authClient.token();

    const res = await fetch("http://localhost:8000/pet", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(pet),
    });

    const data = await res.json();
  };

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 ">Add a New Pet</h1>
      <Card>
        <form onSubmit={onSubmit} className="p-10 space-y-8 w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pet Name */}
            <TextField isRequired name="name" type="text">
              <Label>Pet Name</Label>
              <Input placeholder="Buddy" variant="secondary" />
              <FieldError />
            </TextField>

            {/* Breed */}
            <TextField name="breed" isRequired>
              <Label>Breed</Label>
              <Input placeholder="Golden Retriever" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Pet Type */}
            <div>
              <Select
                name="petType"
                isRequired
                className="w-full"
                placeholder="Select pet type"
              >
                <Label>Pet Type</Label>

                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Dog" textValue="Dog">
                      Dog
                    </ListBox.Item>

                    <ListBox.Item id="Cat" textValue="Cat">
                      Cat
                    </ListBox.Item>

                    <ListBox.Item id="Bird" textValue="Bird">
                      Bird
                    </ListBox.Item>

                    <ListBox.Item id="Rabbit" textValue="Rabbit">
                      Rabbit
                    </ListBox.Item>

                    <ListBox.Item id="Other" textValue="Other">
                      Other
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Gender */}
            <div>
              <Select
                name="gender"
                isRequired
                className="w-full"
                placeholder="Select gender"
              >
                <Label>Gender</Label>

                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Male" textValue="Male">
                      Male
                    </ListBox.Item>

                    <ListBox.Item id="Female" textValue="Female">
                      Female
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Age */}
            <TextField name="age" type="number" isRequired>
              <Label>Age (Years)</Label>
              <Input type="number" placeholder="2" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Color */}
            <TextField name="color">
              <Label>Color</Label>
              <Input placeholder="Golden" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Location */}
            <TextField name="location" isRequired>
              <Label>Location</Label>
              <Input placeholder="Dhaka, Bangladesh" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Adoption Fee */}
            <TextField name="adoptionFee" type="number">
              <Label>Adoption Fee</Label>
              <Input type="number" placeholder="5000" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Pet Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/pet.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Tell adopters about the pet..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          <Button
            type="submit"
            variant="outline"
            className="w-full bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] rounded-md text-xl p-3 text-black font-bold hover:cursor-pointer"
          >
            Add Pet
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddPetPage;
