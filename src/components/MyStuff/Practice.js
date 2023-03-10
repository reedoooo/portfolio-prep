import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class Practice extends Component {
  render() {
    return (
      <Container>
        <Row>
            <Col className='grid-cols-1 h-screen border-black'>Col 1</Col>
            <Col className='grid-cols-2 h-screen border-black'>Col 2</Col>
            <Col className='grid-cols-3 h-screen border-black'>Col 3</Col>
            <Col className='grid-cols-4 h-screen border-black'>Col 4</Col>
        </Row>
      </Container>
    )
  }
}
