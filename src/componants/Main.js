import React from "react"; 
import HornedBeast from "./HorndBeast";
import Data from "./Data.json" ; 
import Row from "react-bootstrap/Row";
class Main extends React.Component {

  render(){
    return(
      <Row xs={1} md={3} className="g-4">
        <div>
          {Data.map((animal, i) => 
            <HornedBeast title={animal.title} img={animal.image_url} description={animal.description} horns={animal.horns}
            Module={this.props.Module} /> )}

        </div>
        </Row>
    )

}
}

export default Main