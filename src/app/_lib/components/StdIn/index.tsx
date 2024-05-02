"use client";

import { useState } from "react";
import BlinkingCaret from "../BlinkingCaret";
import Breadcrumb from "../BreadCrumb";

export default function StdIn() {
  const [value, setValue] = useState("");
  return (
    <>
      <Breadcrumb />
      <span>{value}</span>
      <input
        autoFocus
        onChange={(v) => {
          setValue(v.target.value);
        }}
        onSubmit={() => console.log("submit")}
        className="w-0 border-0 p-0 m-0 bg-transparent outline-none"
        type="text"
      ></input>
      <BlinkingCaret />
    </>
  );
}
