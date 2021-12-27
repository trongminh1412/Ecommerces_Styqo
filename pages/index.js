import Head from "next/head";
import Image from "next/image";
import IndexNavbar from "../components/Navbars/IndexNavbar";
import styles from "../styles/Home.module.scss";
import EmblaCarousel from "components/slider/slider";
const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <IndexNavbar fixed />
      <EmblaCarousel slides={slides} />
    </>
  );
}
