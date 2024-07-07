import Link from "next/link";

export default function MealPage() {
  return (
    <main>
      <h1>Meal Main Paeg</h1>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="meals/page-1">page 1</Link>
      </p>
      <p>
        <Link href="meals/page-2">page 2</Link>
      </p>
    </main>
  );
}
