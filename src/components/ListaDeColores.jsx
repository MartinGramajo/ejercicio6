import ItemCardColor from "./ItemCardColor";

const ListaDeColores = ({ listaColores, deleteColor }) => {
  return (
    <section className="container my-5 d-flex flex-wrap justify-content-around">
      {listaColores.map((color, index) => (
        <ItemCardColor color={color} key={index} deleteColor={deleteColor} />
      ))}
    </section>
  );
};

export default ListaDeColores;
