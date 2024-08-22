import Image from "next/image";
// next Link
import Link from "next/link";

// icons
import { HiArrowRight } from "react-icons/hi2"


const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0  md:mb-24 ">
      <Link href={"/work"} 
      className="relative w-[135px] h-[135px] flex justify-center items-center
      bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image src={"/rounded-text.png"} 
        width={141} 
        height={148} 
        alt=""
        className="animate-spin-slow w-full h-full max-w-[100px] max-h-[100px] " 
        />
        <HiArrowRight className=" absolute text-3xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  )
};

export default ProjectsBtn;
