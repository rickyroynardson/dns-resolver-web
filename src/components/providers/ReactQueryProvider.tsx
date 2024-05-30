"use client";
import { PropsWithChildren } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";

const ReactQueryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
