import { Metadata } from "next";
interface LayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Usuários",
  robots: {
    index: false,
  },
};

export default function Layout({ children, modal }: LayoutProps) {
  return (
    <>
      {children}
      <div>{modal}</div>
    </>
  );
}
