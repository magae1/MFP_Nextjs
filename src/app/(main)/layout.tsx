import { ReactNode } from "react";
import DefaultHeader from "@/app/(main)/_components/DefaultHeader";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <DefaultHeader />
      {children}
    </>
  );
}
