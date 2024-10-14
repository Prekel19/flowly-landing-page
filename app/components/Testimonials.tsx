import React from "react";

export default function Testimonials() {
  const opinions: {
    id: number;
    userName: string;
    userJob: string;
    description: string;
  }[] = [
    {
      id: 1,
      userName: "Alice Johnson",
      userJob: "Marketing Manager",
      description: `Próbowałem wielu menedżerów zadań, ale ten jest zdecydowanie najlepszy! Jest intuicyjny, łatwy w obsłudze i ma wszystkie funkcje, których potrzebuję, aby pozostać zorganizowanym.`,
    },
    {
      id: 2,
      userName: "John Smith",
      userJob: "Freelancer",
      description: `Uwielbiam, że mogę uzyskać dostęp do swoich zadań z każdego miejsca, niezależnie od tego, czy jestem na komputerze, czy na telefonie. To znacznie poprawiło moją produktywność.`,
    },
    {
      id: 3,
      userName: "Emily Davis",
      userJob: "Software Developer",
      description: `Menedżer zadań pomógł mi skutecznie priorytetyzować moją pracę. Już nie przegapiam terminów i mogę łatwo śledzić swoje postępy.`,
    },
    {
      id: 4,
      userName: "Michael Brown",
      userJob: "Project Manager",
      description: `Polecam ten menedżer zadań każdemu, kto chce uprościć swoje zadania i zwiększyć efektywność. To prawdziwa rewolucja!`,
    },
  ];

  return (
    <div
      id="testimonials"
      className="flex flex-col gap-10 max-w-normal px-16 pt-20 mx-auto max-sm:px-6"
    >
      <div className="flex flex-col items-center">
        <h2 className="font-stix text-3xl font-semibold">Opinie</h2>
        <p className="font-noto text-center">
          Użytkownicy chwalą nasz menedżer zadań za jego funkcjonalność i łatwość obsługi.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 max-sm:gap-8">
        {opinions.map((opinion) => {
          return (
            <div key={opinion.id} className="relative opinions-container">
              <div className="absolute w-full h-full bg-accent2 top-0 left-0 z-10 opinion-bg"></div>
              <div className="flex flex-col gap-4 relative w-full h-full bg-accent1 px-10 py-6 z-20 opinion-item">
                <div className="flex flex-col">
                  <p className="font-noto text-lg font-semibold">{opinion.userName}</p>
                  <span className="font-noto">{opinion.userJob}</span>
                </div>
                <p className="font-noto">{opinion.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
