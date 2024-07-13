"use server";


import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isValidInput(text) {
  return !text || text.trim() === "";
}

export default async function handleShare(prevState, formData) {
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
    // throw new Error("Input field invalid");
    return {
      message: "Invalid form input",
    };
  }
  await saveMeal(meal);
  // with nextjs revalidatePath nextjs will throw away the caching when submitting the form (meals added)
  //  the revalidatePath takes two arguement
  // we can use the page or layout as the second arguement
  // page will only validate single page  while the layout will set up the layout to be validated
  // meaning nextjs will throw away the cache for this page during the production stage
  revalidatePath("/meals");
  redirect("/meals");
}
