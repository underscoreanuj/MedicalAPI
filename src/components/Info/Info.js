import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import './Info.css'
function Info(props) {
    return (
        <div>
            <Container>
                <div className="row my-2">
                    <div className="col col-2">
                        <Form.Label>Select Gender:</Form.Label>
                    </div>
                    <div className="col">
                        <div>
                            <Form.Check type="radio" name="gender" value="male" label="Male" />
                        </div>
                        <div>
                            <Form.Check type="radio" name="gender" value="female" label="Female" />
                        </div>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col col-2">
                        <Form.Label>Enter Age:</Form.Label>
                    </div>
                    <div className="col">
                        <Form.Control type="number" onChange={props.onAgeChanged} placeholder="Enter Age" />
                    </div>
                </div>
                <div className="row my-2">
                    <Button onClick={()=>{props.submit()}} type="primary" className="full">Submit</Button>
                </div>
            </Container>
        </div>
    )
}

export default Info
