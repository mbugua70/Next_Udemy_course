import Link from "next/link";
import { Suspense } from "react";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/database/meals";

export async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicous meal created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals......</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
