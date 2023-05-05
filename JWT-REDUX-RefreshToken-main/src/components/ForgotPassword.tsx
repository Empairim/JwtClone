import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { TextField, Button } from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleForgotPassword = async () => {
    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("A password reset email has been sent to your email.");
        history.push("/");
      } else {
        const data = await response.json();
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while resetting your password.");
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          fullWidth
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={handleForgotPassword}
          disabled={!email}
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
