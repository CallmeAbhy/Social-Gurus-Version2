import React from 'react';
import NavBar3 from './NavBar3';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Yourjob from './Yourjob';
import Navbar from 'react-bootstrap/Navbar';
import './You.css'

const You = () => {
  let API = "http://34.205.65.36:4000/jobs/findAll";

  const[users, setUsers] = useState([]);
  let city_name = [];
  const fetchApiData =  async (url) => {
      try{
          const res = await fetch(url);
          setUsers(await res.json());
          } 
      catch(error){
          console.log(error);

      }

  }

  useEffect(() => {
   fetchApiData(API);
  }, [])

  
  const [viewjob,setViewJob] = useState({});

  
    

  return (
    <>
    <NavBar3 />

    <Navbar>

      <Container>
        <Navbar.Brand href="#home">List of Opportunities</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Button id="boxer_" as={ Link } to="/Applied">My Applied Jobs</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    <div className="container-fluid mt-2 p-5">
      <div className="row text-center">
      
        {
          users.map((curElem) =>{
            for(let i in curElem.cities){
              let x = curElem.cities[i].city;
               console.log(x);
               city_name.push(x);
               
           }

            return (
              
              <>
    
    
      
        

    <Container className="job-card mt-5">
    <Row >
        <Col xs={6} md={4}>
        <h3 variant="subtitle1" >{ curElem.jobprofile }</h3>
        <h2 variant="subtitle1" className="company-name">{curElem.client.organizationname}</h2>
        <br/><h variant="subtitle1" >Stipend :- Upto ₹ { curElem.stipendamountmax }</h>
        </Col>
        <Col xs={6} md={4}>
        <Container >
        <Col xs={6} className='skill-set'>
          
        {curElem.cities.map(el=> {
        
            return(
               <div>
               
               <div class="col py-3 px-lg-2 ">
                <ul>
               <li>📍{el.city}</li>
               </ul>
               </div>
                
               </div>
            )
          })}

          </Col>

          </Container>

          
        </Col>
        <Col xs={6} md={4}>
        Skills Required
        
       
        {curElem.skills.map(el => {
                                
                                return (
                                  <>
                                  
                                  <div className="col py-3 px-lg-2">
                                  
                                <ul>
                                  <li>👨‍🏭{el.skill}</li>
                                  </ul>
                                  </div>
                                  
                                  
                                  </>

                                  )
                            })
                            
                            }



          
          {/* <Yourjob open={() => setViewJob(curElem)}/> */}
          


          
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={4} >Duration :- {curElem.duration} Months</Col>
        <Col xs={4} md={4} >Total Openings :- {curElem.openings}</Col>
        <Col xs={4} md={4} >

          <Yourjob />
        </Col>
      </Row>
      
      <Row>
        <label>Responsibilities :- {curElem.responsibilities}</label>
      </Row>
    </Container>
    




    
      
    </>
            )
          })
        }


      </div>
    </div>
    </>
  )
}

export default You
