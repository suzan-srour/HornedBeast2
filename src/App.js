import React from "react";
import Header from "./componants/Header";
import Main from "./componants/Main";
import Footer from "./componants/Footer"; 
import data from "./Data";
import SelectedBeast from "./selectedBeast";
import Form from "./componants/Form";
class App extends React.Component {
render(){
return( 
  <div>
  <Header/> 

  <div className="cards"> 
  <Main/>

  <SelectedBeast
            show={this.state.show}
            selectedBeastData={this.state}
            closeModal={this.closeModal} />
<Form/>
  </div>


  <Footer/> 
  </div>
) ; 
}
}
export default App;