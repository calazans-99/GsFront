export default function EditarProjeto({ params }: { params: { id: string } }) {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-bold">Editar Projeto</h1>
        <p className="mt-4">Edite as informações do projeto #{params.id}.</p>
      </div>
    );
  }