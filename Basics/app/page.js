import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  console.log("Executing")
  return (
    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
       <p><Link href="/about">About</Link></p>
    </main>
  );
}


// NOTES:
// Reserved files in nextjs:
// -pages - the content of the page..
// -layouts - a wrapper of the pages..
// -not-found
// -error
// -app directory for holding pages
// -- nested layout.. - a layout nested inside a directory will act as a layout for all the pages inside that directory..
// --metadata - a reserved name for exporting metadata for the page..
// --icon - a reserved file name for the favicon of the nextjs app...
// --loading.js - a reserved name for the loading comp of the nextjs app..
// -- route.js - a reserved name that allow you to return the data and not jsx..

// this names are only treated as reserved files if only they are created inside the app directory..