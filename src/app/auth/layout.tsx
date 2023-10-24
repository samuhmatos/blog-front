import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-gray-50">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              className="w-12 h-12 mr-2"
              src="/assets/logo.png"
              alt="logo"
              width={100}
              height={100}
            />
            Blog do Samuel
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6">{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
