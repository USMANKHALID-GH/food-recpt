import FoodItem from "./FoodItem.jsx";

export  default  function FoodList({data ,setFoodId}) {
    return   <div>
        {data.map((food)=><FoodItem key={food.id} item={food} setFoodId={setFoodId}/>)}
     </div>
}