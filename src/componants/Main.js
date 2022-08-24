import React from "react"; 
import HornedBeast from "./HorndBeast";
import Data from "./Data.json" ; 
class Main extends React.Component {

  render(){
    return(
        <div>
          {Data.map((animal, i) => 
            <HornedBeast title={animal.title} img={animal.image_url} description={animal.description} /> )}

        </div>
    )

}
}

export default Main