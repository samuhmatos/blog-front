"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AuthModalInputs } from "./AuthModalInputs";
import { useAuth } from "@domain";
import { Alert, CircularProgress } from "@mui/material";

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

  async function handleSubmit() {
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
      <button className={`hover:text-zinc-300`} onClick={handleOpen}>
        {renderContent("Entrar", "Cadastrar")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2 h-[400px]">
            {loading ? (
              <div className="flex justify-center py-24">
                <CircularProgress />
              </div>
            ) : (
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

                  <AuthModalInputs
                    inputs={inputs}
                    handleChangeInputs={handleChangeInputs}
                    isSignIn={isSignIn}
                  />
                  <button
                    className="uppercase bg-sky-500 w-full text-white p-3 rounded text-sm mb-5 transition-all disabled:bg-gray-400 hover:bg-sky-600"
                    disabled={disabled}
                    onClick={handleSubmit}
                  >
                    {renderContent("Entrar", "Criar conta")}
                  </button>
                </div>
              </>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
