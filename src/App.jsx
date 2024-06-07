import Search from "./component/Search.jsx";
import {useState} from "react";
import FoodList from "./component/FoodList.jsx";
import Nav from "./component/Nav.jsx";
import '/src/css/main.css'
import Container from "./component/Container.jsx";
import InnerContainer from "./component/InnerContainer.jsx";
import FoodDetails from "./component/FoodDetails.jsx";


function App() {
    const [foodData,setFoodData]=useState([])

    const  [foodId, setFoodId]=useState('658615');

  return (
    <div >
        <Nav/>
     <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
          <InnerContainer>
              <FoodList data={foodData} setFoodId={setFoodId}/>
          </InnerContainer>
          <InnerContainer>
              <FoodDetails foodId={foodId}/>
          </InnerContainer>
      </Container>

    </div>
  )
}

export default App
