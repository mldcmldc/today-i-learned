import { learnings } from "@/definitions/learnings";

export default function Home() {
  return (
    <div className="flex flex-col items-start min-h-screen w-screen px-5">
      <h1 className="text-2xl py-5 font-dotGothic">today i learned</h1>

      <div className="flex space-x-2 mb-4">
        <div className="border border-black p-2">Filter 1</div>
        <div className="border border-black p-2">Filter 2</div>
        <div className="border border-black p-2">Filter 3</div>
        <div className="border border-black p-2">Filter 4</div>
      </div>

      <div className="pb-5 flex flex-col roboto w-full space-y-2">
        {learnings.map((learning) => (
          <div className="border border-black p-3 w-full flex flex-col" key={learning.id}>
            <h3 className="text-xl mb-4">{learning.title}</h3>
            <p>{learning.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
