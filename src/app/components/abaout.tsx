import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutMe(){
  return(
    <>
    <Separator className=" bg-red-600 h-2 w-screen mb-6" />
    <div className="flex  flex-col items-center justify-normal py-2">
    <Card className="w-[80%] mt-3 border-red-600">
      <CardHeader>
        <CardTitle>Sobre</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <p className="pb-2">
          Meu nome é André tenho 38 anos, sou estudante de Análise e desenvolvimento de sitemas pela Anhembi Morumbi e 
          também estudo programação pela plataforma <a href="https://www.dio.me/" target="blank" className="text-red-600 ">DIO</a> onde estou aprendendo React, typescript, Nodejs e Java.
        </p>
        <p className="pb-2">
          Atualemnte moro em Portugal e estou focado em conseguir minha primeira vaga na área aqui, mas fora do Brasil há uma grande dificuldade
          que é o inglês, que é uma língua muito cobrada em todas as vagas no mercado. 
        </p>
      </CardContent>

    </Card>
    </div>
    </>
    
  )
}