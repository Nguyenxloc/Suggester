import React from "react";

export default function GitFlow() {
  const data = [
    { stage: "Step 1", content: "Git init" },
    { stage: "Step 2", content: "Git add ." },
    { stage: "Step 3", content: 'Git commit -m "first commit"' },
    { stage: "Step 4", content: "Git remote add origin repository_URL" },
    { stage: "Step 5", content: "Git push origin master" },
  ];
  return (
    <div className="bg-white w-full">
      <h2 className="text-start font-bold">Firtly</h2>
      {data.map((item) => (
        <div className="flex gap-5 ms-3">
          <div className="">{item.stage}:</div>
          <div className="">{item.content}</div>
        </div>
      ))}
    </div>
  );
}
