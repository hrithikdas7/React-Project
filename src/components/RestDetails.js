import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestRev from './RestRev';

function RestDetails() {
  //1. get restid from url
  const urlParams = useParams()
  console.log(urlParams);

  //create a state for holding the list
  const [restuaantlists, setRestuarantList] = useState([])
  //api call
  const fetchData = async () => {
    await fetch('/restaurants.json')
      .then((data) => data.json()
        .then(res => setRestuarantList(res.restaurants))
      )
  }
  // to load items or values when a component is created
  useEffect(() => {
    fetchData()
  }, [])
  console.log(restuaantlists);
  //5. find rest whose id is given in url params
  const restuarant = restuaantlists.find(
    item => (item.id == urlParams.id)
  )
 // console.log(restuarant);




  return (
    <div>
      {
        restuarant ? (<Row className='m-3'>
          <Col md={3}>
            <Image className='border rounded' src={restuarant.photograph} fluid></Image>
          </Col>
          <Col className='mx-5' md={8}>
            <ListGroup>
              <ListGroup.Item>
                <h2>{restuarant.name}</h2>
                <p>{restuarant.neighborhood}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Cusine-Type : &nbsp; {restuarant.cuisine_type}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Address : &nbsp; {restuarant.address}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <RestOp op={restuarant.operating_hours}/>
              </ListGroup.Item>
              <ListGroup.Item>
              <Row>
                 <RestRev rev={restuarant.reviews}/>
                 </Row>
              
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>) : 'no data to display'

      }
    </div>
  )
}

export default RestDetails