"use client";
import React, { useState } from "react";
import { addToast } from "@heroui/toast";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { IoLogoGoogle } from "react-icons/io";
import Link from "next/link";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const { data, error } = await signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        addToast({
          title: "Login Failed",
          description: error.message || "Invalid email or password!",
          color: "danger",
        });
      } else {
        addToast({
          title: "Welcome back!",
          description: "Logged in successfully.",
          color: "success",
        });
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      addToast({
        title: "Error",
        description: "An unexpected error occurred.",
        color: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      addToast({
        title: "Social Login Failed",
        description: "Could not connect to Google.",
        color: "danger",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-10 px-4">
      <Card className="w-full max-w-md p-8 shadow-2xl bg-content1 rounded-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Welcome Back</h2>
          <p className="text-default-500 text-sm mt-2">
            Login to your SkillSphere account
          </p>
        </div>

        {/* Email Login Form */}
        <Form className="flex flex-col gap-4" onSubmit={onEmailLogin}>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="Enter your email" variant="bordered" />
            <FieldError />
          </TextField>

          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter your password" variant="bordered" />
            <FieldError />
          </TextField>

          <Button
            color="primary"
            type="submit"
            isLoading={loading}
            className="font-bold mt-2"
            size="lg"
            fullWidth
          >
            Sign In
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center my-6 gap-2">
          <div className="h-[1px] bg-divider flex-grow"></div>
          <span className="text-xs text-default-400 uppercase">or</span>
          <div className="h-[1px] bg-divider flex-grow"></div>
        </div>

        {/* Google Login */}
        <Button
          variant="bordered"
          startContent={<IoLogoGoogle className="text-xl" />}
          onPress={handleGoogleLogin}
          className="w-full font-medium"
          size="lg"
        >
          Continue with Google
        </Button>

        {/* Register Link */}
        <p className="text-center text-sm text-default-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-semibold hover:underline"
          >
            Register Now
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;
