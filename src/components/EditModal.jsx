"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { SquarePen } from "lucide-react";

export function EditModal({ pet }) {
  const {
    _id,
    name,
    breed,
    petType,
    gender,
    age,
    color,
    location,
    adoptionFee,
    imageUrl,
    description,
  } = pet;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pet = Object.fromEntries(formData.entries());
    console.log(pet);

    // const res = await fetch("http://localhost:8000/pet", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(pet),
    // });

    // const data = await res.json();
  };
  return (
    <Modal>
      <div className="flex justify-end">
        <Button
          className={
            "rounded-xl bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] text-white m-5"
          }
        >
          <SquarePen></SquarePen>Edit
        </Button>
      </div>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-xl font-bold">
                Provide Details of Your Pet
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Pet Name */}
                    <TextField
                      defaultValue={name}
                      isRequired
                      name="name"
                      type="text"
                    >
                      <Label>Pet Name</Label>
                      <Input placeholder="Buddy" variant="secondary" />
                      <FieldError />
                    </TextField>

                    {/* Breed */}
                    <TextField defaultValue={breed} name="breed" isRequired>
                      <Label>Breed</Label>
                      <Input
                        placeholder="Golden Retriever"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Pet Type */}
                    <div>
                      <Select
                        defaultValue={petType}
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
                        defaultValue={gender}
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
                    <TextField
                      defaultValue={age}
                      name="age"
                      type="number"
                      isRequired
                    >
                      <Label>Age (Years)</Label>
                      <Input
                        type="number"
                        placeholder="2"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Color */}
                    <TextField defaultValue={color} name="color">
                      <Label>Color</Label>
                      <Input placeholder="Golden" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Location */}
                    <TextField
                      defaultValue={location}
                      name="location"
                      isRequired
                    >
                      <Label>Location</Label>
                      <Input
                        placeholder="Dhaka, Bangladesh"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Adoption Fee */}
                    <TextField
                      defaultValue={adoptionFee}
                      name="adoptionFee"
                      type="number"
                    >
                      <Label>Adoption Fee</Label>
                      <Input
                        type="number"
                        placeholder="5000"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
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
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea
                          placeholder="Tell adopters about the pet..."
                          className="rounded-3xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  <Modal.Footer>
                    <Button slot="close" variant="outline">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className={
                        "bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180]"
                      }
                      slot="close"
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
