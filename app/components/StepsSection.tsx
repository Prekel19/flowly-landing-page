import React from "react";

export default function StepsSection() {
  const steps: { id: number; title: string; description: string }[] = [
    {
      id: 1,
      title: "Załóż konto",
      description: `Create an account to start using our task manager.`,
    },
    {
      id: 2,
      title: "Twórz zadania",
      description: `Łatwo dodawaj zadania z tytułami, opisami, terminami realizacji i priorytetami.`,
    },
    {
      id: 3,
      title: "Organizuj zadania",
      description: `Grupuj zadania w kategorie lub projekty, aby lepiej zorganizować swoją pracę.`,
    },
    {
      id: 4,
      title: "Śledź postępy",
      description: `Monitoruj status swoich zadań, oznaczaj je jako ukończone i bądź na bieżąco.`,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-12 px-16 max-w-normal mx-auto max-md:flex max-md:flex-col max-sm:px-6">
      <div className="relative">
        <div className="flex flex-col gap-6 sticky top-10">
          <h2 className="font-stix text-3xl font-semibold text-center">
            Poznaj potencjał naszego produktu
          </h2>
          <p className="font-noto text-center">
            Nasze narzędzie zostało zaprojektowane z myślą o efektywności i prostocie.
            Dzięki zaawansowanym funkcjom i intuicyjnemu interfejsowi, możesz
            skoncentrować się na realizacji celów, a nie na organizacji pracy. Usprawnij
            swoje zadania i ciesz się lepszymi wynikami!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 relative">
        {steps.map((step) => {
          return (
            <div
              key={step.id}
              className="flex flex-col py-6 px-10 odd:bg-accent1 even:bg-accent2 gap-6 odd:rotate-2 even:-rotate-2 sticky top-10"
            >
              <div className="flex justify-between">
                <h4 className="font-stix text-2xl font-semibold">{step.title}</h4>
                <p className="font-stix text-2xl font-semibold">0{step.id}</p>
              </div>
              <p className="font-noto text-center">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
