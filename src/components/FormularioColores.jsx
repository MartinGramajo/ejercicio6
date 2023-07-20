import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";

const FormularioColores = () => {
  return (
    <Container>
      <Card>
        <Card.Header className="py-4">Administrar Colores</Card.Header>
        <Card.Body>
          <Form className="fondo-formulario">
            <div className="d-flex justify-content-between py-5  ">
              <div
                style={{
                  backgroundColor: `red`,
                  width: "130px",
                  height: "90px",
                  marginRight: "20px",
                  marginLeft: "20px",
                }}
              ></div>

              <InputGroup className="mb-3 me-5 py-1">
                <Form.Control placeholder="Ingrese una Tarea" type="text" />
              </InputGroup>
            </div>
            <Card.Footer className="d-flex  justify-content-end pt-4 bg-white ">
              <Button
                className="btn-agregar-tarea"
                variant="outline-primary"
                type="submit"
              >
                Guardar
              </Button>
            </Card.Footer>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FormularioColores;
