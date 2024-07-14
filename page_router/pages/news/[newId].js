// dynamic nested page
import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();
  const paramsId = router.query.newId;
  return (
    <main>
      <h1>Details Page {paramsId}</h1>
    </main>
  );
}
