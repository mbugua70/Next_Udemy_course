"use client";

import { useFormStatus } from "react-dom";

export default function MealSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {" "}
      {pending ? "submitting..." : "share meal"}
    </button>
  );
}
