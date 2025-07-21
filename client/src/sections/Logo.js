import { favicon, logo } from "@/assets";
import Image from "next/image";

function Logo({ variant }) {
  return (
    <a href="/">
      {variant === "default" && <Image src={logo} alt="Analytix Logo" width={150} height={31}/>}
      {variant === "icon" && <Image src={favicon} alt="Analytix Logo" width={32} height={32}/>}
    </a>
  );
}

export default Logo;
