import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const items = [

    {
        id: "item-1",
        question: "Is it accessible?",
        answer: "Este es el primer item de el acordeón"
    },
    {
        id: "item-2",
        question: "How  do I get started?",
        answer: "Este es el segundo item de el acordeón"
    },
     {
        id: "item-3",
        question: "Is it access?",
        answer: "Este es el tercer item de el acordeón"
    },
]

export default function page() {
    return(
        <div>
          <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
        {items.map((item) =>(
        
        <AccordionItem value={item.id} key={item.id} >
        <AccordionTrigger>{item.question}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
         {item.answer}
        </AccordionContent>
      </AccordionItem>
        ) )}

    </Accordion>
        </div>
    )
}