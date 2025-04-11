import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "doggedCase - custom high-quality phone cases",
  description = " Backed by 9 years of hands-on experience as a licensed stockbroker and investment adviser, I’ve successfully guided clients through market highs and lows—earning trust while consistently delivering results. My work with some of the most respected firms in the United States has equipped me with the insight, precision, and strategic edge needed to help clients build and protect lasting wealth",
  image = "/favicon.png",
  icons = "/favicon.png",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@ritaorowo",
    },
    icons,
    metadataBase: new URL("https://ritaorowo.com/"),
  };
}
