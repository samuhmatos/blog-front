"use client";import { FormEvent, useState } from "react";
import { Button, InputText } from "@components";

export function Form() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="form-inline form_getEmail" onSubmit={handleSubmit}>
      <label className="text-sm mb-2" htmlFor="contact">
        Quer receber notificação de novas postagens?
      </label>
      <div className="flex gap-3">
        <InputText
          placeholder="Deixe seu email"
          value={email}
          setValue={setEmail}
          name="email"
        />

        <Button placeholder="Enviar" type="submit" />
      </div>
    </form>
  );
}

// TODO: ENVIAR EMAIL PARA API
