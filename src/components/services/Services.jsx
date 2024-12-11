import React from 'react'
import './services.css'
import Image1 from '../../assets/java.png';
import Image2 from "../../assets/react.png";
import Image3 from "../../assets/node-js-icon-21.png";




const data = [
  {
    id: 1,
    image: Image1,
    title: "Java Script",
    description:
      "I specialized in React, Jquery, Axios, Express.js, Socket.IO, Node.js, Next.js and etc",
  },
  {
    id: 2,
    image: Image2,
    title: "ReactJs",
    description:
      "React Router Dom, Arrow Funtion,  Redux, React Query, React Hook Form, React Bootstrap, React Icons and etc ",
  },
  {
    id: 3,
    image: Image3,
    title: "NodeJs",
    description:
      " Express.js, SQL, NoSqul, LoopBack,  APIs, API endpoints",
  },
];


const Services = () => {
 return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
       {data.map(({ id, image, title, description }) => {
         return (
           <div className="services__card" key={id}>
             <img src={image} alt="" className="services__img" />

             <h3 className="services__title">{title}</h3>
             <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
  
  
}
 export default Services;  
 
