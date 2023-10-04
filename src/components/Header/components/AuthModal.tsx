"use client";import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AuthModalInputs } from "./AuthModalInputs";
import { useAuth } from "@domain";
import { Alert } from "@mui/material";
import { LoadButton } from "../../LoadButton/LoadButton";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export function AuthModal({ isSignIn = false }: { isSignIn?: boolean }) {
  const { signIn, signUp, loading, error } = useAuth();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setInputs({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
    setOpen(false);
  };

  const renderContent = (sigInContent: string, signUpContent: string) => {
    return isSignIn ? sigInContent : signUpContent;
  };

  const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (isSignIn) {
      if (inputs.password && inputs.email) {
        return setDisabled(false);
      }
    } else {
      if (
        inputs.name &&
        inputs.email &&
        inputs.password &&
        inputs.password_confirmation
      ) {
        return setDisabled(false);
      }
    }

    setDisabled(true);
  }, [inputs]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (isSignIn) {
      await signIn(
        {
          email: inputs.email,
          password: inputs.password,
        },
        handleClose
      );
    } else {
      await signUp(
        {
          name: inputs.name,
          email: inputs.email,
          password: inputs.password,
          password_confirmation: inputs.password_confirmation,
        },
        handleClose
      );
    }
  }

  return (
    <div>
      <LoadButton
        placeholder={renderContent("Entrar", "Cadastrar")}
        onClick={handleOpen}
      />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="p-2 h-[400px]">
            <>
              {error && (
                <Alert severity="error" className="mb-4">
                  {error[0]}
                </Alert>
              )}
              <div className="uppercase font-bold text-center pb-2 border-b mb-2">
                <p className="text-sm">
                  {renderContent("Entrar ", "Criar Conta")}
                </p>
              </div>

              <div className="m-auto">
                <h2 className="text-2xl font-light text-center">
                  {renderContent(
                    "Faça login na sua conta",
                    "Crie sua conta no blog"
                  )}
                </h2>

                <form onSubmit={handleSubmit}>
                  <AuthModalInputs
                    inputs={inputs}
                    handleChangeInputs={handleChangeInputs}
                    isSignIn={isSignIn}
                  />
                  <LoadButton
                    loading={loading}
                    placeholder={renderContent("Entrar", "Criar conta")}
                    full
                    disabled={disabled}
                    className="p-3"
                    type="submit"
                  />
                </form>
              </div>
            </>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
