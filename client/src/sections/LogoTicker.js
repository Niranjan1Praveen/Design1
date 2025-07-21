import { brands } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";

function LogoTicker({ className }) {

  return (
    <div className={"container max-w-screen-lg"}>
      <div className="">
        <h2 className="text-center text-lg mb-4 md:mb-6">
          Trusted by the world's most innovative teams
        </h2>
        <div className="flex justify-center gap-5 md:gap-10">
          {brands.map((brand, index) => (            
            <Image
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              className="col-span-1 max-h-12 w-full object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
