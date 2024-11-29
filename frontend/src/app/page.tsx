import ButtonComecar from "./Components/TelaInicial/ButtonComecar/ButtonComeçar";
import FraseAnimation from "./Components/TelaInicial/FraseComAnimacao/FraseAnimation";
import InputText from "./Components/TelaInicial/InputText/InputText";
import ParagraphTelaInicial from "./Components/TelaInicial/Paragraph/ParagraphInicial";

export default function Home() {
  return (
    <div>
      <FraseAnimation/>
      <ParagraphTelaInicial/>
      <InputText/>
      <ButtonComecar/>
    </div>
  );
}
