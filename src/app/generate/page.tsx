import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-start p-2 pt-[72px]">
      <div className="w-full border border-red-700 text-center">
        <h1 className="text-4xl p-1">Create</h1>
        <p className="pb-1">Generate stunning images from text for FREE</p>
      </div>
      <div className=" flex border border-green-700 flex-grow w-full">
        <div className="__form flex-[2] border border-yellow-400 flex flex-col justify-center items-center p-2 gap-2">
          <p>Type your prompt below to create any image you can imagine</p>
          <div className="flex justify-between">
            <input
              type="text"
              className="border border-[var(--color-primary)] w-full flex-grow"
              placeholder="a 50yr old man with beard and glasses in his home office writing code..."
            />
            <Button> Create</Button>
          </div>
        </div>
        <div className="__form flex-[1] border border-yellow-400"></div>
      </div>
    </div>
  );
}
