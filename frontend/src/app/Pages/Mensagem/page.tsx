import ButtonEtapas from "@/app/Components/TelaMensagem/ButtonsEtapas/ButtonsEtapas";
import InputTextMensagem from "@/app/Components/TelaMensagem/InputText/InputTextMensagem";
import Titulo from "@/app/Components/TelaMensagem/Titulo/Titulo";

export default function HomePage() {
    return (
      <div>
        <Titulo title="Mensagem" mensagem="Escreva uma mensagem especial. Seja criativo e demonstre todo seu carinho."/>
        <InputTextMensagem/>

        <div className="flex flex-row justify-center gap-5">
          <ButtonEtapas link="/" content="Voltar Etapa"/>
          <ButtonEtapas link="/Pages/DataInicio" content="Próxima Etapa"/>
        </div>
      </div>
    );
  }
  