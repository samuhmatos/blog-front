"use client";import { FormEvent, useState } from "react";
import { Button, InputText } from "@components";
import { useCreateNewsletter } from "@domain";

export function NewsletterForm() {
  const [email, setEmail] = useState<string>("");
  const { loading, create } = useCreateNewsletter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    create(email, () => {
      setEmail("");
    });
  }

  return (
    <form className="form-inline form_getEmail" onSubmit={handleSubmit}>
      <label className="text-sm mb-2" htmlFor="contact">
        Quer fazer parte de nossa Newsletter semanal?
      </label>
      <div className="flex gap-3">
        <InputText
          placeholder="Deixe seu email"
          value={email}
          setValue={setEmail}
          name="email"
        />

        <Button placeholder="Enviar" type="submit" loading={loading} />
      </div>
    </form>
  );
}
