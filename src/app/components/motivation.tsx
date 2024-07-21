import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function Motivation(){
  return(
    <>
   
    <div className="flex  flex-col items-center justify-normal py-2">
    <Card className="w-[80%] mt-3 border-red-600">
      <CardHeader>
        <CardTitle>Motivações</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        
        <p className="pb-2  ">
          Inicialente minha motivação foi um fascínio por computadores e o que ele poderia criar, isso foi um bom tempo atrás. 
          Hoje o minhas motivações são muito mais sóbrias, busco uma carreira sólida e que me traga conforto a mim e minha família, 
          tenho algumas metas que quero atingir e a comunidade <a className="text-red-600 font-bold ">Codigo Certo Coders</a> vai me ajudar a alcançar essas metas, ainda não possuo experiências como profissional, apenas acadêmicas 
          e a proposta da comunidade consegue chegar ao que seria um ambiente de trabalho real. 
        </p>
        
      </CardContent>

    </Card>
    </div>
    </>
    
  )
}