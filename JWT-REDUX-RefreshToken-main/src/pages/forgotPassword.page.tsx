import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { styled } from "@mui/material/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Container, Box, Typography } from "@mui/material";
import { LoadingButton as _LoadingButton } from "@mui/lab";
import { useForgotPasswordMutation } from "../redux/api/authApi";
import FormInput from "../components/FormInput";

const LoadingButton = styled(_LoadingButton)`
  background-color: black;
`;

const forgotPasswordSchema = object({
  email: string()
    .min(1, "Email is required")
    .email("Email address is not valid"),
});

export type ForgotPasswordInput = TypeOf<typeof forgotPasswordSchema>;

const ForgotPasswordPage = () => {
  const methods = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });
  const [forgotPassword, { isLoading, isSuccess, error, isError }] =
    useForgotPasswordMutation();
  const location = useLocation();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password reset email sent!");
    }
    if (isError) {
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error((error as any).data.message, { position: "top-right" })
        );
      } else {
        toast.error((error as any).data.message, {
          position: "top-right",
        });
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, []);

  const onSubmitHandler: SubmitHandler<ForgotPasswordInput> = (values) => {
    forgotPassword(values);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#2363eb",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography>Forgot Password</Typography>

        <FormProvider {...methods}>
          <Box
            component="form"
            noValidate
            width="100%"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <FormInput
              name="email"
              type="email"
              label="Enter the email associated with your account"
            ></FormInput>

            <LoadingButton
              type="submit"
              variant="contained"
              loading={isLoading}
              disableElevation
              fullWidth
            >
              Submit
            </LoadingButton>
          </Box>
        </FormProvider>
      </Box>
    </Container>
  );
};

export default ForgotPasswordPage;
