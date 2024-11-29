"use client"
import ButtonEtapas from "@/app/Components/TelaMensagem/ButtonsEtapas/ButtonsEtapas";
import Titulo from "@/app/Components/TelaMensagem/Titulo/Titulo";
import SearchMusic from "@/app/Components/TelaMusica/page";


export default function HomePage() {
    return (
      <div>
       <Titulo title="Musica dedicada" mensagem="Dedique uma música especial. A música será reproduzida automaticamente na página."/>

        <SearchMusic/>

        <div className="flex flex-row justify-center gap-5">
          <ButtonEtapas link="/Pages/Fotos" content="Voltar Etapa"/>
          <ButtonEtapas link="/Pages/Musica" content="Próxima Etapa"/>
        </div>
      </div>

      
    );
  }
  