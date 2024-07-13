"use server";


import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isValidInput(text) {
  return !text || text.trim() === "";
}

export default async function handleShare(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isValidInput(meal.title) ||
    isValidInput(meal.summary) ||
    isValidInput(meal.instructions) ||
    isValidInput(meal.creator) ||
    isValidInput(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("Input field invalid");
  }
  await saveMeal(meal);
  redirect("/meals");
}
