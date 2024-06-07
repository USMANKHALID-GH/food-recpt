import  style from '/src/css/foodItem.module.css'
export default function FoodItem({item,setFoodId}){

    const getDetails=()=>{
        setFoodId(item.id);
    }
return  (
<div className={style.itemContainer}>
    <img className={style.image} src={item.image} alt={"food-image"}/>
   <div className={style.title}>
       <p className={style.titleContent}>{item.title}</p>
   </div>
    <button className={style.buttom} onClick={getDetails}>Details</button>
</div>
)
}