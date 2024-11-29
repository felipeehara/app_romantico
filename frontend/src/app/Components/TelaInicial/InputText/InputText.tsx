export default function InputText() {
    return (
      <div>
       <form className="flex justify-center">
            <input 
                type="text" 
                placeholder="Ex: João e Maria ou Feliz Aniversário ou etc" 
                className="p-2 border rounded bg-gray-900 w-80 text-sm"
            />
        </form>
      </div>
    );
  }
  