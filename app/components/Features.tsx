import React from "react";
import Image from "next/image";
import featuresImg from "../assets/features/working-man-img.png";

export default function Features() {
  const features: { id: number; title: string; description: string }[] = [
    {
      id: 1,
      title: "Feature #1",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
        enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
        dolor interdum nulla, ut commodo diam libero vitae erat.`,
    },
    {
      id: 2,
      title: "Feature #2",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
        enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
        dolor interdum nulla, ut commodo diam libero vitae erat.`,
    },
    {
      id: 3,
      title: "Feature #3",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
        enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
        dolor interdum nulla, ut commodo diam libero vitae erat.`,
    },
  ];

  return (
    <div
      className="grid grid-cols-2 gap-12 pt-20 px-16 max-w-normal mx-auto mb-32 max-md:flex max-md:flex-col-reverse max-sm:px-6"
      id="features"
    >
      <div className="flex flex-col gap-6">
        {features.map((feature) => {
          return (
            <div key={feature.id}>
              <h3 className="font-stix text-3xl font-semibold leading-normal">
                {feature.title}
              </h3>
              <p className="font-noto">{feature.description}</p>
            </div>
          );
        })}
      </div>
      <div>
        <Image
          src={featuresImg}
          alt="working man image"
          width={660}
          height={460}
          className="rotate-1 w-full"
        />
      </div>
    </div>
  );
}
