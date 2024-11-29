import DatePicker from "@/app/Components/TelaDate/Date";
import ButtonEtapas from "@/app/Components/TelaMensagem/ButtonsEtapas/ButtonsEtapas";
import Titulo from "@/app/Components/TelaMensagem/Titulo/Titulo";


export default function HomePage() {
    return (
      <div>
       <Titulo title="Data de início" mensagem="Informe a data de início que simbolize o início de uma união, relacionamento, amizade, etc."/>

        <DatePicker/>

        <div className="flex flex-row justify-center gap-5">
          <ButtonEtapas link="/Pages/Mensagem" content="Voltar Etapa"/>
          <ButtonEtapas link="/Pages/Fotos" content="Próxima Etapa"/>
        </div>
      </div>

      
    );
  }
  