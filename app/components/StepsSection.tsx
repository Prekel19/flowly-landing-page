import React from "react";

export default function StepsSection() {
  const steps: { id: number; title: string; description: string }[] = [
    {
      id: 1,
      title: "Sign up",
      description: `Create an account to start using our task manager.`,
    },
    {
      id: 2,
      title: "Create task",
      description: `Easily add tasks with titles, descriptions, due dates, and priorities.`,
    },
    {
      id: 3,
      title: "Organize task",
      description: `Group tasks into categories or projects for better organization.`,
    },
    {
      id: 4,
      title: "Track progress",
      description: `Monitor the status of your tasks, mark them as completed, and stay up to date.`,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-12 px-16 max-w-normal mx-auto">
      <div className="relative">
        <div className="flex flex-col gap-6 sticky top-10">
          <h2 className="font-stix text-3xl font-semibold">
            Discover the power of our product
          </h2>
          <p className="font-noto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
            enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
            dolor interdum nulla, ut commodo diam libero vitae erat.
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
