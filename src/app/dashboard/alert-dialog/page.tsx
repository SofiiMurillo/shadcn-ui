"use client";
import { useState } from "react";

import {  Check,  BadgeX, StarOff, Star    } from "lucide-react";


import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"


export default function page() {

const [dialogOpen, setDialogOpen] = useState(false)

    return(
        <div className="grid grid-cols-2 gap-4" >
         <AlertDialog 
         open={dialogOpen}
        //  onOpenChange={(open) => console.log({open}) } 
        onOpenChange={setDialogOpen}>

      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter >

          <AlertDialogCancel  onClick={() => console.log("Cancelado") }>Cancel</AlertDialogCancel>
          <AlertDialogAction  onClick={() => console.log("Aceptado") } >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>


    </AlertDialog>


<Button onClick={() => setDialogOpen(true) } >Open Dialog</Button>

     <div  className="grid grid-cols-2 gap-4">


         <AlertDialog
          
         open={dialogOpen}
        //  onOpenChange={(open) => console.log({open}) } 
        onOpenChange={setDialogOpen}>
          
      <AlertDialogTrigger asChild>
        
        <Button  variant="outline">Show Dialog
        <Check/>  
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => console.log("Cancelado") } >Cancel</AlertDialogCancel>
          <AlertDialogAction  onClick={() => console.log("Aceptado") } >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>


    </AlertDialog>

<Button onClick={() => setDialogOpen(true) } >Open Dialog
  <BadgeX/>
</Button>

</div>

        </div>
    )
}