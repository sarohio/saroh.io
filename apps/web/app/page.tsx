import { BentoGridThirdDemo } from "@/components/home/bento-grid-demo";
import { CardHoverEffectDemo } from "@/components/home/card-hover-demo";
import { SparklesPreview } from "@/components/home/sparkles-preview";
import { SpotlightPreview } from "@/components/home/spotlight";

export default function Page(): JSX.Element {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between ">
			{/* <NewHero /> */}
			{/* <Hero /> */}
			{/* <GoogleGeminiEffectDemo /> */}
			<SpotlightPreview />
			<BentoGridThirdDemo />
			<CardHoverEffectDemo />
			<SparklesPreview />
		</main>
	);
}
