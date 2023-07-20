import ItemCardColor from "./ItemCardColor";

const ListaDeColores = ({ listaColores }) => {
  return (
    <section className="container my-5 d-flex flex-wrap justify-content-between">
      {listaColores.map((color, index) => (
        <ItemCardColor color={color} key={index} />
      ))}
    </section>
  );
};

export default ListaDeColores;
