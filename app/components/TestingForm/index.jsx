const TestingForm = () => {
  return (
    <div>
      <form className="max-w-md mx-auto mt-8">
      <input
        type="text"
        placeholder="Titre de la vidéo"
        className="border rounded p-2 w-full mb-4"
      />
      <input
        type="text"
        placeholder="Description de la vidéo"
        className="border rounded p-2 w-full mb-4"
      />
      <input
        type="number"
        placeholder="Durée de la vidéo (en secondes)"
        className="border rounded p-2 w-full mb-4"
      />
      <input
        type="text"
        placeholder="URL de la vidéo"
        className="border rounded p-2 w-full mb-4"
      />
      <button
        type="submit"
        className="bg-emerald-500 text-white px-4 py-2 mt-4 rounded hover:bg-emerald-600"
      >
        Ajouter la vidéo
      </button>
    </form>
    </div>
  )
}

export default TestingForm
