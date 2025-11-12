"use client"

import { Toaster } from "@/components/sonner";
import { toast } from "sonner";



export default function page() {
    return(
        <div>

        <Toaster/>
 
        
        <button onClick={() =>toast("Event has been created.")  } >
            Click me
        </button>
 
        </div>
    )
}