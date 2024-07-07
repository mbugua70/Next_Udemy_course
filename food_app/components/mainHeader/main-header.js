"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  const path = usePathname();
  console.log(path);
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={LogoImg} alt="Plate with food" />
        FastDrive Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link
              href="/meals"
              className={path.startsWith("/meals") ? classes.active : undefined}
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className={path === "community" ? classes.active : undefined}
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
