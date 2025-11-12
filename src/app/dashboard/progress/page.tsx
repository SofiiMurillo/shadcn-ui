"use client"
import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { useEffect } from "react"



export default function page() {

             const [progress, setProgress] = React.useState(13)



    useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
  return <Progress value={progress} className="w-[60%]" />


  
      
    
}