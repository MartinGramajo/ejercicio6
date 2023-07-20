import { Button, Card } from "react-bootstrap";

const ItemCardColor = () => {
  return (
    <Card className="card-item">
      <Card.Header className="py-4">Nombre color</Card.Header>
      <Card.Body className="fondo-formulario">
        <div className="d-flex justify-content-center py-5  ">
          <div
            className="color-box-card"
            style={{
              backgroundColor: `red`,
            }}
          ></div>
        </div>
        <Card.Footer className="d-flex  justify-content-end pt-4 bg-white ">
          <Button variant="outline-danger" type="submit">
            Borrar
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ItemCardColor;
