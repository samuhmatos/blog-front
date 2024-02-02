"use client";
import { SocialMedia } from "@components";
import { NextErrorPage } from "@types";

export default function Error({ error, reset }: NextErrorPage) {
  return (
    <div className="bg-gray-100 px-2 text-center">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl font-extrabold text-red-500">500</h1>
        <p className="text-4xl font-medium text-gray-800">
          Internal Server Error
        </p>
        <p className="text-xl text-gray-800 mt-4">
          Nos desculpe pela inconveniência. Por favor, tente mais tarde.
        </p>
        <SocialMedia className="mt-4" />
      </div>
    </div>
  );
}
