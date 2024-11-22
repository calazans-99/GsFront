interface FormUsuarioProps {
    onSubmit: (data: any) => void;
  }
  
  export default function FormUsuario({ onSubmit }: FormUsuarioProps) {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const data = new FormData(e.target as HTMLFormElement);
      const formData = Object.fromEntries(data.entries());
      onSubmit(formData);
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-bold">Nome:</label>
          <input type="text" name="nome" className="border rounded w-full p-2" required />
        </div>
        <div>
          <label className="block font-bold">Email:</label>
          <input type="email" name="email" className="border rounded w-full p-2" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Salvar
        </button>
      </form>
    );
  }
  