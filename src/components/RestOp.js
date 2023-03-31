import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function RestOp({ op }) {
   // console.log(op);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className='btn-btn-dark' variant="dark" onClick={handleShow}>
                Restuarant Operating Hours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>MonDay : {op.Monday}</ListGroup.Item>
                        <ListGroup.Item>TueDay : {op.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>WedDay : {op.Wednesday}</ListGroup.Item>
                        <ListGroup.Item>ThursDay : {op.Thursday}</ListGroup.Item>
                        <ListGroup.Item>FriDay : {op.Friday}</ListGroup.Item>
                        <ListGroup.Item>SaturDay : {op.Saturday}</ListGroup.Item>
                        <ListGroup.Item>SunDay : {op.Sunday}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default RestOp