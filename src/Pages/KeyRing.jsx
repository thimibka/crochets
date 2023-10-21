

export default function KeyRing() {
  

  return (
    <>
      <h1 className="h1">Les Porte-clefs</h1>
      <input type="file" onChange={handleImageSelect} />

      <div className="ContainerGrid">
        {pictureList.map((pictureItem) =>
          pictureItem.attributes.picture?.data.map((picture) => (
            <div className="ContainerGridItem" key={picture.id}>
              <div className="grid-item">
                <img
                  src={`http://localhost:1337${picture.attributes.url}`}
                  alt=""
                />
                <div className="TextInfo">
                  <p>{pictureItem.attributes.content}</p>

                  <div className="Info">
                    <p>{pictureItem.attributes.price}</p>
                  </div>
                </div>
                <button onClick={() => handleImageDelete(pictureItem.id)}>
                  Supprimer l'image
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
