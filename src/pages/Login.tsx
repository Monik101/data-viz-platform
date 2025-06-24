"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

export default function AuthForm() {
  //utilised react-hook-form for better user form interaction
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");

    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        navigate("/");
      } else {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        navigate("/");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 border border-gray-700 rounded-lg bg-[#161616] text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">
        {mode === "login" ? "Login to your account" : "Create an account"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-3 py-2 bg-[#222] border border-gray-600 rounded text-sm"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters required",
              },
            })}
            className="w-full px-3 py-2 bg-[#222] border border-gray-600 rounded text-sm"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#C9FF3B] text-black py-2 rounded mt-2 hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Please wait..." : mode === "login" ? "Log In" : "Sign Up"}
        </button>
      </form>

      <div className="mt-4 text-center text-sm text-gray-400">
        {mode === "login" ? (
          <>
            Don't have an account?{" "}
            <button
              onClick={() => setMode("signup")}
              className="text-[#C9FF3B] hover:underline"
            >
              Sign up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setMode("login")}
              className="text-[#C9FF3B] hover:underline"
            >
              Log in
            </button>
          </>
        )}
      </div>
    </div>
  );
}
