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
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    image: "/Business Advisery.svg",
    title: "Business & Investment Advisory",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    image: "/General.svg",
    title: "General Financial Consulting",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    image: "/StockBrokerDiversification.svg",
    title: "Stock Brokerage & Diversification",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
];
