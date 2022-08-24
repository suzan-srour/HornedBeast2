import React from "react";
import Header from "./componants/Header";
import Main from "./componants/Main";
import Footer from "./componants/Footer"; 
class App extends React.Component {
render(){
return( 
  <div>
  <Header/> 

  <div className="cards"> 
  <Main/>  
  </div>


  <Footer/> 
  </div>
)  
}
}
export default App;