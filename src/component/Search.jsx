import {useEffect, useState} from "react";
import  style from "/src/css/search.module.css"
const URL="https://api.spoonacular.com/recipes/complexSearch";
const API_KEY="5f04b02933514bc58ae0b0a0edc7484c";

export  default  function Search({setFoodData,foodData}){


    const  [search ,setSearch]=useState("pizza")
    //
    useEffect(()=>{
      async function  fetchFood() {
     const re= await  fetch(`${URL}?query=${search}&apiKey=${API_KEY}`);
     const data= await re.json();
     console.log(foodData);
     setFoodData(data.results);
     console.log(foodData.title);
      } fetchFood();
    },[search])

    const  getSearch=(e)=>{
        setSearch(e.target.value);}

    return(
        <div className={style.searchContainer}>
            <input className={style.input} value={search} onChange={(e)=>getSearch(e)} type="text" placeholder="search for your food"/>
        </div>
    )

}