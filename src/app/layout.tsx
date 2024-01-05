import "@Styles/app.scss";

import type { Metadata } from "next";
import React from "react";

import { poppinsFont } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Project",
  description: "Project",
};

// prettier-ignore
export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <html lang="en">
      <body className={poppinsFont.className}>{children}</body>
    </html>
  );
}
