import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestRev({ rev }) {
    console.log(rev);
    const [open, setOpen] = useState(false);
    return (
        <>
            <p>Client Reviews</p>

            {
                rev.map((client) => (
                    <Card className='border m-2' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><h4>{client.name}</h4></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> {client.date}</Card.Subtitle>
                            <Card.Text>
                                Rating: {client.rating}
                            </Card.Text>
                            <Card.Text>
                                <Button
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                >
                                    Comments
                                </Button>

                                <Collapse in={open}>
                                    <div id="example-collapse-text">
                                         {client.comments}
                                    </div>
                                </Collapse>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                ))
            }
        </>

    )
}

export default RestRev