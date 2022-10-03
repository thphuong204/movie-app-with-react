import { AddBoxTwoTone } from "@mui/icons-material";
import { Box, CardMedia, Typography, Divider, Grid } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./../App.css";
import BasicLayout from "../layouts/basic";

function FilmDetails() {
  return (
    <BasicLayout>
      <div id="filmDetails">
        <Container fluid>
          <Container fluid className="imageCover" sx={{ width: 151 }}>
            <Container
              fluid
              component="img"
              image="./../../public/logo192.png"
              alt="img"
            ></Container>
            <Typography>Title</Typography>
          </Container>
          <Divider sx={{ borderColor: "success.dark" }} />
          <Container className="filmDetailContent">
            <Row>
              <Col xs={5} lg={4} className="description">
                <Container component="div" variant="h5">
                  Title
                </Container>
                <Divider sx={{ borderColor: "success.dark" }} />
                <Container
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Description
                </Container>
                <Divider sx={{ borderColor: "success.dark" }} />
                <Container
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Film type
                </Container>
              </Col>

              <Col xs={6} lg={7} className="season">
                <Container component="div" variant="h5">
                  Season
                </Container>
                <Divider sx={{ borderColor: "success.dark" }} />
                <Container
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Trailer
                </Container>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </BasicLayout>
  );
}

export default FilmDetails;
