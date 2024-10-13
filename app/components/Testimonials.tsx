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
      description: `I've tried many task managers, but this one is by far the best! It's intuitive, easy to use, and has all the features I need to stay organized.`,
    },
    {
      id: 2,
      userName: "John Smith",
      userJob: "Freelancer",
      description: `I love how I can access my tasks from anywhere, whether I'm on my computer or phone. It has greatly improved my productivity.`,
    },
    {
      id: 3,
      userName: "Emily Davis",
      userJob: "Software Developer",
      description: `The task manager has helped me prioritize my work effectively. I no longer miss deadlines and can track my progress easily.`,
    },
    {
      id: 4,
      userName: "Michael Brown",
      userJob: "Project Manager",
      description: `I recommend this task manager to anyone looking to streamline their tasks and boost their efficiency. It's a game-changer!`,
    },
  ];

  return (
    <div id="testimonials" className="flex flex-col max-w-normal px-16 pt-20 mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="font-stix text-3xl">Testimonials</h2>
        <p>See what our users have to say about our task manager.</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {opinions.map((opinion) => {
          return (
            <div key={opinion.id} className="relative">
              <div className="absolute w-full h-full bg-accent2 top-0 left-0 z-10"></div>
              <div className="relative w-full h-full bg-accent1 px-10 py-6 z-20">
                <div className="flex flex-col">
                  <p>{opinion.userName}</p>
                  <span>{opinion.userJob}</span>
                </div>
                <p>{opinion.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
