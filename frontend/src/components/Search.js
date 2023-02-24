import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


const Search = ({ word, setWord, handleSubmit }) => {
    return (
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
                <Form.Control 
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)} 
                placeholder="Search for new image..." 
                />
                <Button variant="primary" type="submit">
                  Search
                </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
};

export default Search;