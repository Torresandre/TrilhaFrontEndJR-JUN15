import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function Personal(){
  return(
    <>
   
    <div className="flex  flex-col items-center justify-normal py-2">
    <Card className="w-[80%] mt-3 border-red-600">
      <CardHeader>
        <CardTitle>Gostos pessoais</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <h4 className="text-red-600 text-lg pb-2">RPG</h4>
        <p className="pb-2">
          Joguei minha primeira partida de rpg aos 14 anos e desde então nunca mais parei e hoje 25 anos depois ainda é um dos meus hobbys prefeiridos, principalente agora que tenho meu filho mais velho como parceiro de jogo.
        </p>
        <h4 className="text-red-600 text-lg pb-2">Motocicletas</h4>
        <p className="pb-2">
          Minha paixão por motos vem desde criança quando ainda brincava que minha bicicleta era uma motocicleta, quando pude comprei uma moto velha mesmo e comecei a customizá-la, sim a customização também é um de meus hobbys.   
        </p>
        <h4 className="text-red-600 text-lg pb-2">Família</h4>
        <p className="pb-2">
          Meu gosto mais importante e está acima de tudo em minha vida é minha família, é pra ela que eu dedico todo meu tempo disponível e que me faz ir sempre em frente. Tenho dois filhos maravilhosos e uma esposa fantástica que sempre me coloca na linha quando dela eu saio. 

        </p>
      </CardContent>

    </Card>
    </div>
    </>
    
  )
}