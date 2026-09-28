"use client";
import InputElement from "@/components/inputFields/inputElement";

export default function Testing({
  search,
}: {
  search: {
    [key: string]: string | undefined;
  };
}) {
  return (
    <>
      <InputElement
        label="Search"
        placeholder="Search here.."
        name="search"
        type="text"
      />
    </>
  );
}
