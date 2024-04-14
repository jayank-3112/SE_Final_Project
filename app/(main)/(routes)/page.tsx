import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils"
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";

const state = true;
export default function Home() {
  return (
    <div>
      <UserButton
        afterSignOutUrl="/"
      />
      <ModeToggle/>
      {/* <Button variant ="test">Click Me</Button> */}
      {/* <Button className={cn(
        "bg-indigo-500",
        state && "bg-red-500"
      )}>Click Me</Button> */}
    </div>
  );
}
