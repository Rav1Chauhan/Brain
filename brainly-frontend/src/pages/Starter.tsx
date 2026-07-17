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
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">
        <div className="flex justify-center gap-2 pt-2">
          <Button
            variant="secondary"
            text="Signup"
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