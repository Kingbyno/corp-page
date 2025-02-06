import Hero from "@/components/hero";
import homeImg from "@/public/home.jpg";

export default function HomePage() {
  return (
    <Hero imgData={homeImg} imgAlt="Home Image" title="Welcome to the Homepage" />
  );
}
