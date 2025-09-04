// import React from "react";

// const SpotlightBackground = () => {
//   return (
//     <section className="relative w-full h-[300px] bg-black overflow-hidden">

//       <div className="absolute inset-0">
//         <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full bg-gradient-to-t from-white/40  to-black blur-3xl opacity-50"></div>
//       </div>

      


//     </section>
//   );
// };

// export default SpotlightBackground;

import React from "react";

const RadialBackground = () => {
  return (
    <section
      className="relative w-full h-[300px] overflow-hidden"
      style={{
        background: `radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.6) 0%, rgb(0,0,0) 100%)`,
      }}
    >
      {/* Content */}
    

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700/40 to-transparent"></div>
    </section>
  );
};

export default RadialBackground;

