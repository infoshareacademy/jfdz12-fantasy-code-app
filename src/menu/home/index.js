import React from 'react';
import UsersChart from './UsersChart';
import GamesChart from './GamesChart';
import { Container, Row, Col } from 'react-bootstrap';

export function Home() {
    return (
        <div>
            <Container className='container-fluid'>
                <Row className='row justify-content-around bg-secondary text-white'>
                    <Col>Welcome to Board App! Feel free to look around!</Col>
                </Row>
                <Row className='p-3 mb-2 bg-light text-secondary'>
                    <Col>
                        <GamesChart />
                    </Col>
                    <Col>
                        <UsersChart />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};