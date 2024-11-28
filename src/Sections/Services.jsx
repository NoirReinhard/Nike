import ServiceCard from "../Components/ServiceCard";
import { services } from "../constants";


const Services = () => {
  return (
    <div className="flex max-lg:flex-col gap-8" id="about-us">
      {services.map((item,index)=>(
        <ServiceCard {...item} key={index}/>
      ))}
    </div>
  )
}

export default Services
