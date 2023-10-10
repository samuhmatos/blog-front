"use client";import { Menu } from "@mui/material";
import { Button, FormTextInput } from "@components";
import { useForm } from "react-hook-form";
import {
  UserChangePasswordSchema,
  userChangePasswordSchema,
} from "../userChangePasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserUpdate } from "@domain";

interface Props {
  anchor: HTMLElement | null;
  isOpen: boolean;
  onClose: () => void;
  userId: number;
}

export function ChangePassword({ anchor, onClose, isOpen, userId }: Props) {
  const { loading, update } = useUserUpdate();
  const { control, formState, handleSubmit, reset } =
    useForm<UserChangePasswordSchema>({
      resolver: zodResolver(userChangePasswordSchema),
      mode: "onChange",
      defaultValues: {
        confirmPassword: "",
        password: "",
      },
    });

  function handleChangePassword(e: UserChangePasswordSchema) {
    var formData = new FormData();
    formData.append("password", e.password);
    formData.append("password_confirmation", e.password);

    update(userId, formData, handleClose);
    handleClose();
  }

  function handleClose() {
    onClose();
    reset();
  }

  return (
    <Menu anchorEl={anchor} open={isOpen} onClose={handleClose}>
      <div className="px-3 py-1">
        <div className="flex gap-3">
          <FormTextInput
            control={control}
            name="password"
            placeholder="Nova senha..."
            type="password"
          />
          <FormTextInput
            control={control}
            name="confirmPassword"
            placeholder="Confirmar senha..."
            type="password"
          />
        </div>
        <Button
          placeholder="Atualizar"
          className="mt-2"
          disabled={!formState.isValid}
          onClick={handleSubmit(handleChangePassword)}
          loading={loading}
        />
      </div>
    </Menu>
  );
}
