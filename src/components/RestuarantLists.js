import React from 'react'
import { useState,useEffect } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestuarantList } from './actions/restuarantListAction';
import { useDispatch,useSelector } from 'react-redux';



function RestuarantLists() {
 // const[restuaantlists,setRestuarantList]=useState([])


  //  const fetchData = async ()=>{
  //    await fetch('/restaurants.json')
  //    .then((data)=>data.json()
  //    .then(res=>setRestuarantList(res.restaurants))
  //    )
//  }
 

  // to use dispatch hooks
  const dispatch = useDispatch()
// to get upadated state from store
const {restuarantList} = useSelector((state)=>state.restListReducer)
console.log(restuarantList);

  useEffect(()=>{
   // fetchData()
   // dispatch the action
   dispatch(RestuarantList())
  },[])

  
  return (

    <Row>

    {
      restuarantList.map(restuarant=>(
       <Col md={6} lg={4} xl={3}>
       <Restcard item={restuarant} />
       </Col> 
      ))
    }



    </Row>
  )
}

export default RestuarantLists