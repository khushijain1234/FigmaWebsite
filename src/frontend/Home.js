import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,Container,NavDropdown } from "react-bootstrap";
import { NavItem,NavLink } from "reactstrap";
import { Button } from 'reactstrap';
import { Card } from "react-bootstrap";
import { Input,Form } from "reactstrap";
import './Home.css';
import { FaTelegramPlane,FaFacebook} from "react-icons/fa";
import {SiTelegram} from "react-icons/si";
import {BsBuilding,BsInstagram,BsPlayCircle} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import { InputGroup,InputGroupText } from "reactstrap";
  
  
const Home = () =>{
  

    return (
        <>
        {/* Navbar */}
        <div>
            <Navbar bg="light" variant="light" style={{ marginLeft: "100px" }}>
            <Navbar.Brand>
                    Logo
                </Navbar.Brand>
                {/* <Nav>
                    <Nav.link href="Destinations">Destinations</Nav.link>
                    <Nav.link href="Hotels">Hotels</Nav.link>
                </Nav> */}
                   <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <NavItem>
                            <NavLink style={{marginRight:"50px"}} href="./Destinations">Destinations</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{marginRight:"50px"}} href="./Hotels">Hotels</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{marginRight:"50px"}} href="./Flights">Flights</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{marginRight:"50px"}} href="./Bookings">Bookings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{marginRight:"50px"}} href="./Login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{marginRight:"50px",border:"1px solid black",borderRadius:"5px"}} href="./Signup">Sign up</NavLink>
                        </NavItem>
                        <NavDropdown style={{marginRight:"50px"}} title="EN">
                        <NavDropdown.Item> French</NavDropdown.Item>
                  <NavDropdown.Item> German</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

            </Navbar>
    </div>

   { /*Best destination around...*/}



         <div style={{display:"inline-flex"}}>
            <div className="justify-content-start" style={{ width: "50%",margin: "100px" }}>
                <h4 style={{ color:"red" }}>BEST DESTINATIONS AROUND THE WORLD</h4>
                <br />
                <h1 style={{fontSize:"100px"}}>Travel, enjoy and live a new and full life</h1>
                <br /><br />
                <p style={{fontSize:"29px"}}>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed
                    listening. Park gate sell they west hard for the.
                </p>
                <Button color="warning" size="lg" >Find out more</Button>&nbsp;&nbsp;&nbsp;
                <BsPlayCircle size={40}/>
                <p style={{display: "inline-block", fontSize: "28px",marginLeft:"50px"}}> Play Demo</p>
         </div>
            <div style={{marginTop:"200px"}}>
                <img src="/images/girl.jpg"  style={{width:"300px",height:"500px"}} />
            </div>
        </div>

        {/* Best Services */}

    <div style={{ margin:"auto",width: "80%" }}>
                <h4 style={{ textAlign:"center" }}>CATEGORY</h4>
                <h1 style={{ textAlign:"center" }}>We Offer Best Services</h1>
        <div style={{ display: "inline-flex",width:"100%"}}>

            <div className="services" style={{ width:"40%",height:"100%",margin:"50px",flex:"1",borderRadius:"20px",boxShadow:"10px 10px 5px #aaaaaa" }}>
                <img src="/images/airlines.png" style={{width:"50%",height:"50%",marginLeft:"50px",padding:"20px"   }} />
                <h4 style={{ textAlign:"center" }}>Calculated Weather</h4>
                <p style={{ fontSize: "17px" }}>Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
                

            <div className="services" style={{ width:"40%" ,margin:"50px",flex:"1",borderRadius:"20px" ,boxShadow:"10px 10px 5px #aaaaaa" }}>
                <img src="/images/airlines.png" style={{width:"50%",height:"50%",marginLeft:"50px",padding:"20px"   }} />
                <h4 style={{ textAlign:"center" }}>Best Flights</h4>
                <p style={{ fontSize: "17px" }}>Engrossed listening. Park gate sell they west hard for the.</p>
             </div>


            <div className="services" style={{ width:"40%",margin:"50px",flex:"1",borderRadius:"20px",boxShadow:"10px 10px 5px #aaaaaa" }}>
            <img src="/images/airlines.png" style={{width:"50%",height:"50%",marginLeft:"50px",padding:"20px"   }} />
                    <h4 style={{ textAlign:"center" }}>Local Events</h4>
                    <p style={{ fontSize: "17px" }}>Barton vanity itself do in it. Preferd to men it engrossed listeneing.</p>
            </div>


                <div className="services" style={{ width:"40%",margin:"50px",flex:"1",borderRadius:"20px" ,boxShadow:"10px 10px 5px #aaaaaa" }}>
                <img src="/images/airlines.png" style={{width:"50%",height:"50%",marginLeft:"50px",padding:"20px"   }} />
                        <h4 style={{ textAlign:"center" }}>Customization</h4>
                        <p style={{ fontSize: "17px" }}>We deliver outsourced aviation services for military customers.</p>
                        
                </div>
        </div>
    </div>


                {/* Destinations */}


    <div style={{ margin:"auto",width: "80%" }}>
            <h4 style={{ textAlign:"center" }}>Top Selling</h4>
            <h1 style={{ textAlign:"center" }}>Top Destinations</h1><br />
         <div style={{ display: "inline-flex",width:"100%"}}>

            <Card  style={{ width: '18rem',margin:"50px", borderRadius:"20px",boxShadow:"10px 10px 5px #eeeeee" }}>
            <Card.Img variant="top" src="/images/rome.jpg" />
            <Card.Body>
                <Card.Text style={{display:"inline-flex"}}>Rome, Italy
                    <Card.Text className="justify-content-end">$5.42k</Card.Text>
                </Card.Text>
                <Card.Text><FaTelegramPlane />&nbsp;&nbsp;10 days Trip</Card.Text>
                
            </Card.Body>
            </Card>


            <Card style={{ width: '18rem',margin:"50px", borderRadius:"20px",boxShadow:"10px 10px 5px #eeeeee" }}>
            <Card.Img variant="top" src="/images/london.jpg" />
            <Card.Body>
                <Card.Text style={{display:"inline-flex"}}>London, UK
                    <Card.Text>$4.2k</Card.Text>
                </Card.Text>

                <Card.Text><FaTelegramPlane />&nbsp;&nbsp;12 days Trip</Card.Text>
                
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem',margin:"50px", borderRadius:"20px",boxShadow:"10px 10px 5px #eeeeee" }}>
            <Card.Img variant="top" src="/images/europe.jpg" />
            <Card.Body>
                <Card.Text style={{display:"inline-flex"}}>Full Europe
                    <Card.Text className="justify-content-end">$15k</Card.Text>
                </Card.Text>
                <Card.Text><FaTelegramPlane />&nbsp;&nbsp;28 days Trip</Card.Text>
                
            </Card.Body>
            </Card>
            </div>

    </div>

 {/* Next Trip */}

    <div style={{display:"inline-flex"}}>
        <div className="justify-content-start" style={{ width: "50%",margin: "100px" }}>
            <h4>Easy and Fast</h4>
            <h1 style={{fontSize:"80px"}}>Book Your Next Trip In 3 Easy Steps</h1><br/>
            
    

            <div style={{display:"block"}}>
                
                <div style={{display:"inline-flex",width:"60%"}}>
                    <img src="/images/destination.jpg" style={{height:"50px",width:"50px",margin:"20px"}} />
                <p><b>Choose Destination</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                </div>

                <div style={{display:"inline-flex",width:"60%"}}>
                <img src="/images/destination.jpg" style={{height:"50px",width:"50px",margin:"20px"}} />
                <p><b>Make Payment</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                </div>

                <div style={{display:"inline-flex",width:"60%"}}>
                <img src="/images/car.jpg" style={{height:"90px",width:"90px"}} />
                <p><b>Reach Airport on Selected Date</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                </div>
            </div>
        </div>
    
        
        <div style={{float:"right",marginRight:"50px",marginTop:"250px"}}>
        <Card style={{ width: '18rem',margin:"50px", borderRadius:"20px",boxShadow:"10px 10px 5px #eeeeee" }}>
            <Card.Img variant="top" src="/images/europe.jpg" />
            <Card.Body>
                <Card.Title>Trip to Greece</Card.Title>
                <Card.Text>14-29 June| by Robbin jordan
                    
                </Card.Text>
                <Card.Text><SiTelegram /></Card.Text>
                <Card.Text><BsBuilding/>&nbsp;&nbsp;24 people going</Card.Text>
            </Card.Body>
            </Card>
        </div>
    </div>


    <div style={{backgroundColor:"#ffe6ff",margin:"auto",width: "80%",height:"400px",borderRadius:"10px",borderTopLeftRadius:"70px"}}>
            <h1 style={{textAlign:"center",padding:"100px 50px"}}>Subscribe to get information, latest news and other interesting offers about Cobham</h1>
        <Form style={{display:"flex",flexDirection:"row"}}>
            <InputGroup style={{margin:"auto",width:"50%"}}>
            <InputGroupText>
            <AiOutlineMail />
            </InputGroupText>
                <Input type="email" name="email" id="exampleEmail" placeholder="Your Email"  />
                <Button color="danger">Subscribe</Button>
                
            </InputGroup>

        </Form>
        </div>


     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"80%",margin:"auto",marginTop:"100px"}}>

        <div style={{flex:"1",marginRight:"100px"}}>
                <h2>Jadoo.</h2><br />
                <p>Book your trip in minute, get full Control for much longer.</p>
        </div>

        <div style={{flex:"1"}}>
                <b>Company</b><br /><br />
                <p>About</p>
                <p>Careers</p>
                <p>Mobile</p>
        </div>

        <div style={{flex:"1"}}>
                <b>Contact</b><br /><br />
                <p>Help/FAQ</p>
                <p>Press</p>
                <p>Affilates</p>
            </div>

        <div style={{flex:"1"}}>
                <b>More</b><br /><br />
                <p>Airlinefees</p>
                <p>Airline</p>
                <p>Low fare tips</p>
            </div>

        <div style={{flex:"1"}}>
                <FaFacebook  size={50}/>&nbsp;&nbsp;&nbsp;
                <BsInstagram size={50} /><br/>
                <h4>Discover our app</h4>
                <img src="/images/googleplay.png" style={{height:"30px",width:"100px"}}/>
                <img src="/images/appstore.png" style={{height:"60px",width:"100px"}}/>
            </div>

    </div>

            <div style={{margin:"auto",width:"15%",marginTop:"120px"}}>
                <p>All rights reserved@jadoo.co</p>
            </div>


    </>
    );
}
export default Home;
