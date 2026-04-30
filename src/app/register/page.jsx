"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import React, { useState } from "react";
import { signUp } from "@/lib/auth-client"; // আপনার সোর্স থেকে ইমপোর্ট
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = Object.fromEntries(new FormData(e.currentTarget));

    const { email, password, name, image } = data;

    const { error } = await signUp.email({
      email,
      password,
      name,
      image,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message || "Registration failed!");
    } else {
      router.push("/");
      router.refresh();
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-10">
      <h2 className="text-3xl font-bold mb-6 text-primary">Register Account</h2>

      <Form
        className="flex w-full max-w-md flex-col gap-4 bg-content1 p-8 rounded-2xl shadow-lg"
        onSubmit={onSubmit}
      >
        <TextField isRequired name="name" type="text">
          <Label>Full Name</Label>
          <Input placeholder="Enter your full name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="url">
          <Label>Photo URL</Label>
          <Input placeholder="https://example.com/photo.jpg" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8)
              return "Password must be at least 8 characters";
            if (!/[A-Z]/.test(value))
              return "Need at least one uppercase letter";
            if (!/[0-9]/.test(value)) return "Need at least one number";
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            At least 8 characters, 1 uppercase, and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2 pt-4">
          <Button
            color="primary"
            type="submit"
            isLoading={loading}
            className="flex-1"
          >
            <Check />
            Register
          </Button>
          <Button type="reset" variant="flat" className="flex-1">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
