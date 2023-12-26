import { ForgotPasswordForm } from "./components/ForgotPasswordForm";
export default function ForgotPasswordPage() {
  return (
    <>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
        Esqueceu a sua senha ?
      </h1>

      <ForgotPasswordForm />
    </>
  );
}
