import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="c">
        <Button size={"lg"} variant={"ghost"}>Click Me</Button>
      </div>
    </main>
  );
}
