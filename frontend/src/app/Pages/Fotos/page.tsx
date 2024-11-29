"use client"
import InputImage from "@/app/Components/TelaFotos/InputImage";
import ButtonEtapas from "@/app/Components/TelaMensagem/ButtonsEtapas/ButtonsEtapas";
import Titulo from "@/app/Components/TelaMensagem/Titulo/Titulo";


export default function HomePage() {
    return (
      <div>
       <Titulo title="Fotos" mensagem="Anexe fotos para personalizar a página. Você pode adicionar até 8 fotos."/>

        <InputImage/>

        <div className="flex flex-row justify-center gap-5">
          <ButtonEtapas link="/Pages/DataInicio" content="Voltar Etapa"/>
          <ButtonEtapas link="/Pages/Musica" content="Próxima Etapa"/>
        </div>
      </div>

      
    );
  }
  