"use client";
import { useUserCreate } from "@domain";
import { ReturnUserCreateSchemaType, UserCreateSchema } from "@schema";
import { eventUtils } from "@utils";
import { Button, FormCheckbox, FormTextInput } from "@components";
import { useRouter } from "next/navigation";

interface UserCreateFormProps {
  schema: ReturnUserCreateSchemaType;
}

export function UserCreateForm({ schema }: UserCreateFormProps) {
  const router = useRouter();
  const { control, formState, handleSubmit } = schema;

  const { create, loading: loadingCreate } = useUserCreate();

  function close() {
    router.back();
  }

  function handleCreate(val: UserCreateSchema) {
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
      <h1 className="text-2xl font-semibold text-gray-800 mb-4 mt-2">
        Criar usuário
      </h1>

      <FormTextInput
        control={control}
        name="name"
        placeholder="Digite o nome..."
        label="Nome"
        baseClassName="w-full"
      />

      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite o email..."
        label="Email"
      />

      <FormCheckbox control={control} name="isAdmin" label="Administrador" />

      <FormTextInput
        control={control}
        name="password"
        placeholder="Digite a senha..."
        label="Senha"
        type="password"
      />

      <FormTextInput
        control={control}
        name="confirmPassword"
        placeholder="Digite a confirmação de senha..."
        label="Confirmar senha"
        type="password"
      />

      <div className="flex gap-3 w-full justify-center mt-2">
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
