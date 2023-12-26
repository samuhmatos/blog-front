import { Metadata } from "next";
import { ContatoAboutSection } from "./components/ContatoAboutSection";
import { ContactForm } from "./components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato comigo",
  abstract: "Entre em contato comigo",
};

export const revalidate = 3600; // 1 hour

export default function ContatoScreen() {
  return (
    <div className="container mx-auto mt-4 px-2">
      <div className="flex gap-5 justify-center flex-wrap 2sm:flex-nowrap">
        <ContatoAboutSection />

        <div className="w-full 2sm:w-1/2">
          <h4 className="text-lg font-bold mb-4 text-center mt-2 2sm:mt-0 2sm:text-start">
            Entre em contato comigo
          </h4>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
