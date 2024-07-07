import Link from "next/link";

export default function Blog() {
    return (
      <main>
         <h1>Blog Post</h1>
         <p><Link href="/blog/page-1">page 1</Link></p>
         <p><Link href="/blog/page-2">page 2</Link></p>
      </main>
    );
  }