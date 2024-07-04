import { VsfLogoProps } from "./types";
import classNames from "classnames";
import Image from "next/image";

export function VsfLogo({ className, style, ...attributes }: VsfLogoProps) {
  return (
    <div>
      {/* logo was here before 
      <div className={classNames(className)}>
     <Image
       src="/images/logo_thikana.png" // Replace with your image path in the public folder
       alt="Logo"
       width={100} // Adjust width as needed
       height={400} // Adjust height as needed
     />
   </div>*/}
    </div>
  );
}
