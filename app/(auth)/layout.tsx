import {redirect} from "next/navigation";
import Image from "next/image";
import { ReactNode } from "react";
import { auth } from "@/auth";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if(session) redirect("/")
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
            <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
            <h1 className="text-2xl font-semibold text-white">BookWise</h1>
          </div>
          <div>{children}</div>
        </div>
      </section>
      <section className="auth-illustration">
        <Image
          src="/images/auth-illustration.png"
          alt="authillustration"
          width={1000}
          height={1000}
          className="size-full object-cover"
        />
      </section>
    </main>
  );
};

export default Layout;
