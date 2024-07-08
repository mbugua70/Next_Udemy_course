"use client";
import classes from "./page.module.css";

export default function Error() {
  return (
    <main className="error">
      <h1>An Error Occurred!</h1>
      <p>Failed to fetch the meal data, Please try again!</p>
    </main>
  );
}
