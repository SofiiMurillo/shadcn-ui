"use client"

import { Button } from "@/components/ui/button";
import { ArrowUpIcon, CircleFadingArrowUpIcon } from "lucide-react";


function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4 mr-2 text-current"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
  );
}



export default function page() {
    return(
        <div className="grid grid-cols-5 gap-2" >


      <Button>
        Default
      </Button>
        
      <Button variant={"destructive"}>
        Destructive
      </Button>

      <Button variant={"ghost"}>
        Ghost
      </Button>

      <Button variant={"link"}>
        Link
      </Button>

      <Button variant={"outline"}>
        Outline
      </Button>

      <Button variant={"secondary"}>
        Secondary
      </Button>

      <Button onClick={() => console.log("Mensaje en consola :D")}>
        Click Me :3
      </Button>
      
      <Button variant={"success"}>
        ¡Lo grado!
      </Button>
            
      <Button variant={"outline" } size="icon" >
        <CircleFadingArrowUpIcon />
       
      </Button>



      <Button variant={"outline" } size="icon" className="rounded-full" >
        <ArrowUpIcon />
      </Button>

    <Button size="sm" variant="outline" disabled>
        <Spinner />
        Submit
      </Button>
        </div>
    )
}