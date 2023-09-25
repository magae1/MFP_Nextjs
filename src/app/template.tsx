"use client";
import { ReactNode } from "react";
import useSWR from "swr";

import { refreshFetcher } from "@/app/_libs/fetchers";
import { TRefresh } from "@/app/_libs/types";

export default function Template({ children }: { children: ReactNode }) {
  const { data, error } = useSWR<TRefresh>(`refresh`, refreshFetcher, {
    revalidateOnMount: false,
    dedupingInterval: 15 * 60 * 1000,
  });

  return children;
}
