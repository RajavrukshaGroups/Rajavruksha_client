// import React from "react";
// import loader_video from "../../components/assets/loader_new.mp4";
// import { Oval } from "react-loader-spinner";
// import "./loader.css";

// const Loader = ({ color = "#4fa94d", secondaryColor = "#4fa94d", logo }) => {
//   return (
//     <div className={`loader ${logo ? "" : "loader-with-bg"}`}>
//       {!!logo ? (
//         <video
//           src={loader_video}
//           type="video/mp4"
//           autoPlay
//           loop
//           muted
//           className="loader-logo"
//         />
//       ) : (
//         <Oval
//           visible={true}
//           height="80"
//           width="80"
//           color={color}
//           secondaryColor={secondaryColor}
//           ariaLabel="oval-loading"
//           wrapperStyle={{}}
//           wrapperClass="oval-spinner"
//         />
//       )}
//     </div>
//   );
// };

// export default Loader;
import React from "react";
import { Circles, Oval } from "react-loader-spinner";
import RRPL_logo from "../../components/assets/RRPL_loader-removebg-new.png";
import loader_video from "../../components/assets/loader.mp4";
import "./loader.css";

const Loader = ({ color = "#4fa94d", secondaryColor = "#4fa94d", logo }) => {
  return (
    <div
      className={`loader ${logo ? "loader-with-logo" : "loader-default-bg"}`}
    >
      {!!logo ? (
        <div className="spinner-with-logo">
          <img src={RRPL_logo} alt="rrpl_logo" className="loader-logo" />
          <Oval
            visible={true}
            height="120"
            width="120"
            color={color}
            secondaryColor={secondaryColor}
            ariaLabel="oval-loading"
            wrapperStyle={{ position: "absolute" }}
            wrapperClass=""
          />
        </div>
      ) : (
        <Oval
          visible={true}
          height="80"
          width="80"
          color={color}
          secondaryColor={secondaryColor}
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
    </div>
  );
};

export default Loader;
