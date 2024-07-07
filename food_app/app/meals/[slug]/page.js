export default function MealPage({ params }) {
  return (
    <main>
      <h1>Dynamic page for meals</h1>
      <p>{params.slug}</p>
    </main>
  );
}
