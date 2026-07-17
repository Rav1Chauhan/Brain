import { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const navigate = useNavigate();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        username,
        password,
      });

      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
    navigate("/Signin");
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />
        <div className="flex justify-center pt-2">
          <Button
            variant={"secondary"}
            text="Signup"
            fullWidth={true}
            onClick={signup}
          />
        </div>
      </div>
    </div>
  );
}
