// import React, { useContext } from "react";
// import { Context } from "../../main";
// import { Link } from "react-router-dom";
// import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";

// const Footer = () => {
//   const { isAuthorized } = useContext(Context);
//   return (
//     <footer className={isAuthorized ? "footerShow" : "footerHide"}>
//       <div>&copy; All Rights Reserved By @SahilK.</div>
//       <div>
//         <Link to={"https://www.facebook.com/sahilkumar.kushwaha.988"} target="_blank">
//           <FaFacebookF />
//         </Link>
//         {/* <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank">
//           <FaYoutube />
//         </Link> */}
//         <Link to={"https://www.linkedin.com/in/sahilkumar01/"} target="_blank">
//           <FaLinkedin />
//         </Link>
//         <Link to={"https://www.instagram.com/simple__boy_0612/"} target="_blank">
//           <RiInstagramFill />
//         </Link>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By @SahilK.</div>
      <div>
        <Link to={"https://www.facebook.com/sahilkumar.kushwaha.988"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.linkedin.com/in/sahilkumar01/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/simple__boy_0612/"} target="_blank">
          <RiInstagramFill />
        </Link>
        <Link to={"https://wa.me/yourphonenumber"} target="_blank">
          <SiWhatsapp />
        </Link>
        <Link to={"https://github.com/yourgithubusername"} target="_blank">
          <AiFillGithub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
