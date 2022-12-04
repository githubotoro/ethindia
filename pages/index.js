import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

import HeroSection from "../components/home/HeroSection";
import Features from "../components/home/Features";
import FeaturesReverse from "../components/home/FeaturesReverse";
import Features2 from "../components/home/Features2";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />

      <Features />

      <FeaturesReverse />

      <Features2 />

      <Footer />
    </div>
  );
}
