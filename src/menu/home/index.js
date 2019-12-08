import React from 'react';
import UsersChart from './UsersChart';
import GamesChart from './GamesChart';
import { Container, Row, Col } from 'react-bootstrap';

export function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={true} >Welcome to Board App! Feel free to look around!</Col>
                </Row>
                <Row>
                    <Col lg={true} ><GamesChart /></Col>
                    <Col lg={true} ><UsersChart /></Col>
                </Row>
            </Container>
        </div>
    );
};