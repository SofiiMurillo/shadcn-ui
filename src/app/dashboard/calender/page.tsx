"use client"
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"



export default function calender() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [multiplesDates, setmultiplesDates] = React.useState<Date[] | undefined>([])


    const smallDate = date?.toLocaleDateString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    return(
        <div className="flex-col sm:flex-wrap sm:flex sm:flex-row gap-4" >
            <Calendar
      mode="multiple"
      selected={multiplesDates}
      onSelect={setmultiplesDates}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
    />

    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
      disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />

     <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
      disabled={(date) => date < new Date()}

      />

        <div>
            <h1 className="text-3xl" >Información</h1>
            <div className="border-b" ></div>
            <p>{smallDate}</p>
            <p>{multiplesDates?.map(date => date.toLocaleDateString("es-ES")).join(", ")}</p>
        </div>
        </div>




    )
}