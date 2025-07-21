import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { featureData } from "@/constants";

export default function Features() {
  return (
    <div className="container">
      <div className="max-w-screen-md mx-auto text-center">
        <p className="text-primary uppercase text-sm">
          {featureData.sectionSubtitle}
        </p>
        <h2 className="text-4xl font-semibold my-4">
          {featureData.sectionTitle}
        </h2>
        <p className="text-muted-foreground md:text-xl">
          {featureData.sectionText}
        </p>
      </div>

      <BentoGrid className="my-14 lg:grid-rows-3">
        {featureData.features.map((feature, index) => (
          <BentoCard key={index} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
