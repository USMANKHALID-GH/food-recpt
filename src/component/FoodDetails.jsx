import {useEffect, useState} from "react";

const API_KEY="5f04b02933514bc58ae0b0a0edc7484c";

export  default function FoodDetails({foodId})   {
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`;
    const [details, setDetails]=useState({})
     useEffect(()=>{
         const  getData = async ()=>
         {
             const res= await fetch(`${URL}?apiKey=${API_KEY}`)

             const data=  await res.json();

             setDetails(data);
             console.log(data);
         }
         getData()
     },[foodId])
    return <div>
        <div>
        <h1>
           {details.title}
        </h1>



            <img src={details.image}/>


            <div>
                <span><strong>{details.readyInMinutes} minutes</strong></span>
                <span>{details.vegetarian ? " VEGETARAIN MEAL": " NOT VEGETARAIN MEAL" }</span>
                <span>{details.vegan ? " VEGEN MEAL": " NOT VEGEN MEAL" }</span>
                <span> Serves: {details.servings}</span>

            </div>

            <div >
                <h1>Recipe Instructions</h1>
                <div dangerouslySetInnerHTML={{ __html: details.instructions }} />
            </div>

            <div>
                <h1>Summary</h1>
                <div dangerouslySetInnerHTML={{ __html: details.summary }} />
            </div>



            <div>
                <h1>Additional Ingredients</h1>
                {details.extendedIngredients?.length > 0 ? (
                    details.extendedIngredients.map((ing, index) => (
                        <p key={index}>name: {ing.aisle} : amount: {ing.amount}</p>
                    ))
                ) : (
                    <p>No ingredients available.</p>
                )}
            </div>

        </div>

    </div>
 }