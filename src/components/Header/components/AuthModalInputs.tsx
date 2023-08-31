import { ChangeEvent } from "react";interface Props {
  inputs: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  handleChangeInputs: (e: ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}
export function AuthModalInputs({
  inputs,
  handleChangeInputs,
  isSignIn,
}: Props) {
  return (
    <div>
      {!isSignIn && (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-3 py-3 w-full"
            placeholder="Name Completo"
            value={inputs.name}
            onChange={handleChangeInputs}
            name="name"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="email"
          className="border rounded p-3 py-3 w-full"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChangeInputs}
          name="email"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className={`border rounded p-3 py-3 ${
            !isSignIn ? "w-[49%]" : "w-full"
          }`}
          placeholder="Senha"
          value={inputs.password}
          onChange={handleChangeInputs}
          name="password"
        />

        {!isSignIn && (
          <input
            type="password"
            className="border rounded p-3 py-3 w-[49%]"
            placeholder="Confirmar senha"
            value={inputs.password_confirmation}
            onChange={handleChangeInputs}
            name="password_confirmation"
          />
        )}
      </div>
    </div>
  );
}
