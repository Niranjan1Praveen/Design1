import { brands } from "@/assets";
import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";

function LogoTicker({ className }) {

  return (
    <div className={"container max-w-screen-lg py-20"}>
      <div className="">
        <h2 className="text-center text-lg text-muted-foreground mb-4 md:mb-6">
          Trusted by the world's most innovative teams
        </h2>
        <div className="flex justify-center">
          <Marquee className={"flex justify-center"}>
            {brands.map((brand, index) => (
              <Image
                key={index}
                src={brand}
                alt={`Brand ${index + 1}`}
                className="col-span-1 max-h-12 w-full object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </Marquee>

        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
