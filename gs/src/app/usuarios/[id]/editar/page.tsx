export default function EditarUsuario({ params }: { params: { id: string } }) {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-bold">Editar Usuário</h1>
        <p className="mt-4">Edite as informações do usuário #{params.id}.</p>
      </div>
    );
  }
  