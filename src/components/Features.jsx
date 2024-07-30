import React from "react";
import Header from "./Header";
import FeatureCard from "./FeatureCard";
import { IoChatbubble } from "react-icons/io5";

const Features = () => {
  const featureInfo = [
    {
      id: 1,
      icon: <IoChatbubble />,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
    },
    {
      id: 2,
      icon: <IoChatbubble />,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
    },
    {
      id: 3,
      icon: <IoChatbubble />,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
    },
    {
      id: 4,
      icon: <IoChatbubble />,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
    },
  ];

  const renderedFeatures = featureInfo.map((feature) => {
    return (
      <FeatureCard
        key={featureInfo.indexOf(feature) + 1}
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
      />
    );
  });

  return (
    <div className=" bg-neutral-100 space-y-10 py-4">
      <Header title="FEATURES" />
      <div className="flex gap-4 px-40">{renderedFeatures}</div>
    </div>
  );
};

export default Features;
