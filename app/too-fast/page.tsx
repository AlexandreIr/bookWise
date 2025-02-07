"use client";

import { ArrowLeftCircleIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [back, setBack] = useState(false);
  const redir = () => {
    redirect("/sign-in");
  };

  setTimeout(() => {
    setBack(true);
  }, 10000);

  return (
    <main className="root-container relative flex min-h-screen flex-col items-center justify-center">
      {back && (
        <div
          className="flex fixed top-3 left-3 items-center justify-center cursor-pointer"
          onClick={redir}
        >
          <ArrowLeftCircleIcon className="text-light-100 w-12 h-12" />
          <p className="ms-3 max-w-xl text-center text-light-400 text-2xl">
            Voltar
          </p>
        </div>
      )}
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100">
        Whoa, Slow Down there Speedy!
      </h1>
      <p className="mt-3 max-w-xl text-center text-light-400">
        Looks like you've been a little too eager. We've put a temporary pause
        on your excitment. Chill for a bit and try again shortly
      </p>
    </main>
  );
};

export default page;
