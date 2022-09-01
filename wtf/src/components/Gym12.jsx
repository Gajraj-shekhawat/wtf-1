import { Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Gym.css";


const Gymtwo = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("")


  let getData = () => {
    axios
      .get(
        `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`
      )
      .then((res) => {
        setData(res.data.data);
       
      });
  };
const handlesort = (e) =>{
  setFilter(e.target.value)
  var filterlist = data.filter((el)=>{
    return el.address2 === filter
 })

 getData(filterlist)
}
   

 
  useEffect(() => {
    getData();
  }, []);
 
  return (
    <div id="mainbox">
      <div id="filter">
        <h2 id="h2">Filters</h2>
        <div id="location">
          <p>Locations</p>
          <Input
            id="in1"
            width={"75%"}
            height={"50px"}
            placeholder="Locations"
          />
        </div>
        <div id="cities">
          <p>Cities</p>
          <select id="selects" onChange={handlesort}>
            <option value="">Select Citi</option>
            <option value="Noida">Noida</option>
     
            
          </select>
        </div>
      </div>
      <div id="list">
        {data.map((el,i) => (
          <div id="Box2" key ={i}>
            <div id="image_div">
                {el.cover_image?<img src={el.cover_image} alt="" />:<img alt="" src="https://www.bing.com/th?id=OIP.cl6p7nZBiruTcSJZE5ZdQgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"/>}
            </div>
            <div id="details_div">
               <Text id="p">{el.gym_name}</Text>
               <p id="p1">{el.address1} ,<span>{el.address2}</span></p>
               <p id="p1">{el.duration_text} | <span>{el.distance_text}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gymtwo;
