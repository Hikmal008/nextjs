import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const[ukuran, setUkuran]=useState(300)
  return (
    <>
    <h1>HIKMAL</h1>
      <img width={ukuran} src="/diri.jpg" />
      <br />
      <button onClick={()=>{
        setUkuran(ukuran+20)
      }}>Tambah Ukuran</button>
      <br />
      <br />
      <button onClick={()=>{
        setUkuran(ukuran-20)
      }}>Kurangi Ukuran</button>
    <br />
    <br />

      <Link href="biodata">Ke Halaman biodata</Link>

    </>
  );
}
