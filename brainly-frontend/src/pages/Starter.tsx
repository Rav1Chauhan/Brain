import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

export function Starter() {
  const navigate = useNavigate();

  function signup() {
    navigate("/Signup");
  }

  function login() {
    navigate("/Signin");
  }

  return (
    <div className="h-screen w-screen bg-linear-to-br from-indigo-100 via-purple-50 to-pink-100 flex justify-center items-center">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/25 min-w-95 p-8 flex flex-col gap-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Welcome
          </h1>
          <p className="text-sm text-gray-500">
            Choose an option below to get started
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Button
            variant="secondary"
            text="Sign Up"
            fullWidth={true}
            onClick={signup}
          />
          <Button
            variant="tertiary"
            text="Login"
            fullWidth={true}
            onClick={login}
          />
        </div>
      </div>
    </div>
  );
}
