import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form 'react-bootstrap/Form';
class Form extends React.Component {
render(){
return( 
  
  <h1> filter</h1>
  <Form.Group className="mb-3">
            <Form.Label htmlFor="numOfHorns">
                   Number Of Hornes
            </Form.Label>
            <Form.Select id="numOfHorns">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3/option>
            </Form.Select>
          </Form.Group>



)  
}
}
export default Form;