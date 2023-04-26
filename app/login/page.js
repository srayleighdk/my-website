"use client";
import { TextInput, Button, Checkbox, Label } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import iXanhApi from "../api/axios";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.prevenDefault();
    try {
      const res = await iXanhApi.post("/api/auth/login", {
        email,
        password,
      });
      router.push("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="px-3">
      {error && <p>{error}</p>}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1">Your email</Label>
          </div>
          <TextInput
            id="email1"
            type="email"
            value={email}
            placeholder="name@flowbite.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1">Your password</Label>
          </div>
          <TextInput
            id="password1"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
