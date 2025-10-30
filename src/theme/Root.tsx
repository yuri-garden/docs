import React from "react";
import type { Props } from "@theme/Root";
import CommandKSearch from "../components/CommandKSearch";

export default function Root({ children }: Props) {
  // Render modal ở root để trang nào cũng dùng được
  return (
    <>
      {children}
      <CommandKSearch />
    </>
  );
}
