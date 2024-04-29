import React from 'react'
import { FaSuitcase, FaBuilding, FaUsers, FaUserPlus } from 'react-icons/fa';
const HeroSection = () => {

  const details = [
    {
      id: 1,
      title: "1,53,631",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "90720",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "4,65,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "2,03,763",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <div className='heroSection'>
      <div className="container">
        <div className="title">
          <h1>Find a Job that Suits</h1>
          <h1>Your Interest and Skills</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio labore enim consequatur sequi, illum officia accusantium at praesentium obcaecati perferendis sed expedita esse adipisci dolorum eum ipsum dicta accusamus.</p>
        </div>
        <div className="image">
          <img src="/heroS.jpg" alt="hero" />
        </div>
      </div>
      <div className="details">{
        details.map(element=>{
          return(
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="content">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          )
        })
      }</div>
    </div>
  )
}

export default HeroSection


//   return (
//     <>
//       <div className="heroSection">
//         <div className="container">
//           <div className="title">
//             <h1>Find a job that suits</h1>
//             <h1>your interests and skills</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
//               voluptate repellat modi quidem aliquid eaque ducimus ipsa et,
//               facere mollitia!
//             </p>
//           </div>
//           <div className="image">
//             <img src="/heroS.jpg" alt="hero" />
//           </div>
//         </div>
//         <div className="details">
//           {details.map((element) => {
//             return (
//               <div className="card" key={element.id}>
//                 <div className="icon">{element.icon}</div>
//                 <div className="content">
//                   <p>{element.title}</p>
//                   <p>{element.subTitle}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };
