"use client";
import { FormEvent, useState } from "react";
import { Button, TextInput } from "@components";

export function Form() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="form-inline form_getEmail" onSubmit={handleSubmit}>
      <label className="text-sm mb-1" htmlFor="contact">
        Quer receber notificação de novas postagens?
      </label>
      <div className="flex gap-3">
        <TextInput
          text={email}
          setText={setEmail}
          type="email"
          placeholder="Deixe seu email"
          required
          id="contact"
        />

        <Button />
      </div>
    </form>
  );
}
