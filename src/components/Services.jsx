import React from "react";
import Header from "./Header";
import serviceData from "../services.json";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const renderedServices = serviceData.map((service) => {
    return (
      <ServiceCard
        key={service.id}
        title={service.title}
        description={service.description}
      />
    );
  });
  return (
    <div className="bg-[linear-gradient(#6372FF,#5F8DFD)] text-white px-40">
      <Header
        title="Our Services"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec."
      />
      <div className="grid grid-cols-3 gap-4">{renderedServices}</div>
    </div>
  );
};

export default Services;
