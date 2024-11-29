interface TituloProps {
  title: string;
  mensagem: string;
}


export default function Titulo(props: TituloProps) {
    return (
      <div className="mx-8">
        <h1 className="text-3xl">{props.title}</h1>
        <p className="text-gray-300">{props.mensagem}</p>
      </div>
    );
  }
  