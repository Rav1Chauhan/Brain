import { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        username,
        password,
      });

      console.log(response.data);
      navigate("/Signin");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="h-screen w-screen bg-linear-to-br from-indigo-100 via-purple-50 to-pink-100 flex justify-center items-center">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 min-w-95 p-8 flex flex-col gap-5">
        <div className="text-center space-y-1 mb-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Create an Account
          </h2>
          <p className="text-sm text-gray-500">
            Enter your details to get started
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Username
            </label>
            <Input ref={usernameRef} placeholder="Enter your username" />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Password
            </label>
            <Input ref={passwordRef} placeholder="Enter your password" />
          </div>
        </div>

        <div className="pt-2">
          <Button
            variant={"secondary"}
            text="Sign Up"
            fullWidth={true}
            onClick={signup}
          />
        </div>
      </div>
    </div>
  );
}
