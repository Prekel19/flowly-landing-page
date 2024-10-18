import React from "react";
import Image from "next/image";
import featuresImg from "../assets/features/working-man-img.png";

export default function Features() {
  const features: { id: number; title: string; description: string }[] = [
    {
      id: 1,
      title: "Intuicyjny interfejs użytkownika",
      description: `Zarządzaj swoimi zadaniami w prosty i przejrzysty sposób. 
      Nasz intuicyjny interfejs sprawia, że dodawanie, edytowanie i śledzenie 
      zadań jest szybkie i przyjemne, co pozwala skupić się na tym, co najważniejsze.`,
    },
    {
      id: 2,
      title: "Kategoryzacja zadań",
      description: `Organizuj swoje zadania według kategorii, priorytetów lub projektów. 
      Dzięki elastycznym opcjom filtrowania łatwo znajdziesz to, czego potrzebujesz, a 
      Twoja praca stanie się bardziej uporządkowana i efektywna.`,
    },
    {
      id: 3,
      title: "Współpraca zespołowa",
      description: `Ułatwiaj współpracę w zespole dzięki możliwości przypisywania zadań i 
      dzielenia się postępami. Dzięki temu każdy członek zespołu będzie wiedział, co 
      ma robić, a Ty zyskasz pełną kontrolę nad projektem.`,
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
          priority
        />
      </div>
    </div>
  );
}
