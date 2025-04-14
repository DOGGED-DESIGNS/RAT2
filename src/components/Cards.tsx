import { HoverEffect, CardTitle } from "./ui/Card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    image: "/Digital Asset.svg",
    title: "Digital Asset & Securities",
    description:
      "Protect your digital and financial assets with trusted, expert-grade security solutions tailored for peace of mind.",
    link: "#",
  },
  {
    image: "/Business Advisery.svg",
    title: "Business & Investment Advisory",
    description:
      "Strategic guidance to help businesses and individuals make smart, scalable, and future-proof investment decisions.",
    link: "#",
  },
  {
    image: "/General.svg",
    title: "General Financial Consulting",
    description:
      "From budgeting to big decisions—we offer clear, professional advice to keep your finances healthy and growing.",
    link: "#",
  },
  {
    image: "/StockBrokerDiversification.svg",
    title: "Stock Brokerage & Diversification",
    description:
      "Licensed brokerage services designed to grow and safeguard your portfolio through intelligent, diversified investments.",
    link: "#",
  },
];
