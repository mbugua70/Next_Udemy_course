import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderNavlink from "./nav-link";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={LogoImg} alt="Plate with food" />
        FastDrive Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <MainHeaderNavlink href="/meals">Browse Meal</MainHeaderNavlink>
          </li>
          <li>
            <MainHeaderNavlink href="/community">
              Foodies Community
            </MainHeaderNavlink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
