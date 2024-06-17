import Link from "next/link";

import { RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiYuqueLine,
  RiLinkedinLine,
  RiGithubLine,
  RiTwitterLine, 
} from "react-icons/ri";



const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
       <Link href={"https://www.linkedin.com/in/peter-sha-gyang-8aa75122a/"} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      
      <Link href={"https://web.facebook.com/peter.gyang1"} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={"https://x.com/GyangShaPeter1"} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href={"https://www.instagram.com/petergyang82/"} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={"https://github.com/Petergya"} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={"https://www.youtube.com/channel/UChJQHDiFqTSFvfkg0dOiP2A"} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiYuqueLine />
      </Link> */}
     
    </div>
  )
};

export default Socials;
