// import TestimonialSlider from "./../../components/TestimonialSlider";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";

// const Testimonials = () => {
//   return (
//     <div className="h-full bg-primary/30 py-32 text-center">
//       <div className="container mx-auto h-full flex flex-col justify-center">
//         {/* title */}
//         <motion.h2
//           variants={fadeIn("up", 0.2)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           className="h2 mt-16 xl:mb-8"
//         >
//           What clients <span className="text-accent">say.</span>
//         </motion.h2>

//         {/* slider */}
//         <motion.div
//           variants={fadeIn("up", 0.4)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//         >
//           <TestimonialSlider />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
import TestimonialSlider from "./../../components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Assuming you only want to hide the image on Vercel or other conditions
const isHostedOnVercel = process.env.NEXT_PUBLIC_VERCEL_ENV;

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mt-16 xl:mb-8"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider hideImage={isHostedOnVercel} />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;

