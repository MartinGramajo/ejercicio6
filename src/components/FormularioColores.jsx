import { useEffect, useState } from "react";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import ListaDeColores from "./ListaDeColores";
import Swal from "sweetalert2";
let coloresIniciales = JSON.parse(localStorage.getItem("colores")) || [];

const FormularioColores = () => {
  const [color, setColor] = useState("");
  const [listaColores, setListaColores] = useState(coloresIniciales);

  useEffect(() => {
    if (coloresIniciales) {
      localStorage.setItem("colores", JSON.stringify(listaColores));
    } else {
      localStorage.setItem("colores", JSON.stringify([]));
    }
  }, [listaColores]);

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaColores([...listaColores, color]);
    if (listaColores <= 1) {
      Swal.fire({
        icon: "success",
        title: "color guardado correctamente",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "No se pudo guardar su color.",
      });
    }
    setColor("");
  };

  const deleteColor = (colorBorrar) => {
    Swal.fire({
      title: "Estas seguro que quieres borrar la pelicula?",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `no`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Color borrado", "", "success");
        let listaColoresFiltrada = listaColores.filter(
          (itemColor) => itemColor !== colorBorrar
        );
        setListaColores(listaColoresFiltrada);
      } else if (result.isDenied) {
        Swal.fire("No se borro el color ✅", "", "info");
      }
    });
  };

  return (
    <Container>
      <Card>
        <Card.Header className="py-4">Administrar Colores</Card.Header>
        <Card.Body>
          <Form className="fondo-formulario" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between py-5  ">
              <div
                className="color-box"
                style={{
                  backgroundColor: `${color}`,
                }}
              ></div>

              <InputGroup className="mb-3 me-5 py-1">
                <Form.Control
                  placeholder="Ingrese un color ej blue"
                  type="text"
                  value={color}
                  onChange={handleChange}
                />
              </InputGroup>
            </div>
            <Card.Footer className="d-flex  justify-content-end pt-4 bg-white ">
              <Button variant="outline-primary" type="submit">
                Guardar
              </Button>
            </Card.Footer>
          </Form>
        </Card.Body>
      </Card>
      <ListaDeColores listaColores={listaColores} deleteColor={deleteColor} />
    </Container>
  );
};

export default FormularioColores;
