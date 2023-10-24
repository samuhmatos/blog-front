"use client";
import { useUserCreate } from "@domain";
import { UserFormProps } from "../UserForm";
import { UserSchema } from "@schema";
import { eventUtils } from "@utils";
import { Button, FormCheckbox, FormTextInput } from "@components";
import { useRouter } from "next/navigation";

export function UserCreateForm({ schema }: UserFormProps) {
  const router = useRouter();

  const { control, formState, handleSubmit } = schema;

  const { create, loading: loadingCreate } = useUserCreate();

  function close() {
    router.back();
  }

  function handleCreate(val: UserSchema) {
    create(
      {
        email: val.email,
        name: val.name,
        password: val.password,
        password_confirmation: val.confirmPassword,
        is_admin: val.isAdmin,
      },
      () => {
        eventUtils.emit("close-modal");
        close();
      }
    );
  }

  return (
    <div>
      <FormTextInput
        control={control}
        name="name"
        placeholder="Digite o nome..."
        label="Nome"
        baseClassName="w-full"
      />

      <div className="my-3">
        <FormTextInput
          control={control}
          name="email"
          placeholder="Digite o email..."
          label="Email"
        />
      </div>

      <FormCheckbox control={control} name="isAdmin" label="É admin?" />

      <FormTextInput
        control={control}
        name="password"
        placeholder="Digite a senha..."
        label="Senha"
        className="mb-3"
        type="password"
      />

      <FormTextInput
        control={control}
        name="confirmPassword"
        placeholder="Digite a confirmação de senha..."
        label="Confirmar senha"
        className="mb-3"
        type="password"
      />

      <div className="flex gap-3 w-full justify-center mt-3">
        <Button
          placeholder="Salvar"
          disabled={!formState.isValid}
          onClick={handleSubmit(handleCreate)}
          loading={loadingCreate}
        />
        <Button
          placeholder="Cancelar"
          paleteColor="danger"
          outline
          onClick={close}
        />
      </div>
    </div>
  );
}
