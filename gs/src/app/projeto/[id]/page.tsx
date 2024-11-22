export default function DetalhesProjeto({ params }: { params: { id: string } }) {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-bold">Detalhes do Projeto</h1>
        <p className="mt-4">Visualize as informações detalhadas do projeto #{params.id}.</p>
      </div>
    );
  }