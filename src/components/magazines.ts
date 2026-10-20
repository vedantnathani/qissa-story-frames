import anniversaryCover from "@/assets/anniversary-cover.jpeg";
import customCover from "@/assets/custom-cover.png";
import spitiCover from "@/assets/spiti-cover.png";

const pageImages = import.meta.glob<string>("@/assets/magazines/*.jpg", { eager: true, import: "default" });

function pagesFor(prefix: string) {
  return Object.entries(pageImages)
    .filter(([path]) => path.includes(`/${prefix}-`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url);
}

export type Magazine = {
  id: string;
  title: string;
  kind: string;
  description: string;
  cover?: string;
  /** Page width ÷ height, taken from the original PDF. */
  aspect: number;
  pages: string[];
};

export const magazines: Magazine[] = [
  { id: "anniversary", title: "The Anniversary Magazine", kind: "Love Qissa", description: "Twenty-two and together — a love story told in twelve pages.", cover: anniversaryCover, aspect: 595.5 / 842.25, pages: pagesFor("anniv") },
  { id: "custom", title: "The Lifestyle Magazine", kind: "Custom Qissa", description: "A limited-edition cover story for a birthday bash.", cover: customCover, aspect: 594.96 / 842.25, pages: pagesFor("custom") },
  { id: "spiti", title: "Spiti", kind: "Travel Qissa", description: "Higher roads, quieter places — a journey in pictures.", cover: spitiCover, aspect: 792 / 594, pages: pagesFor("spiti") },
];
