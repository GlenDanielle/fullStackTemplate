import { useState, useEffect } from 'react';
import './CSS/AboutMe.css'
//wag kalimutan import axios
import axios from 'axios'

const AboutMe = () => {
    //taga salo lang ng data galing backend
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Fetch data from the server when the component mounts
      axios.get("http://localhost:3000/aboutMe")//saan kukunin yung data
        .then((response) => setData(response.data))
        .catch((error) => console.log("Error fetching data", error));
    }, []);

  return (
    <>
    <div>
      {/* */}
      {/*mapping para madisplay like props yung data sa array ng usestate */}
      {data.map((data)=>(
        //need unique id kea nilagay ko sa div
        <div key={data.mema.id}>

          <div>
            <p>{data.mema.name}</p>
          </div>

        </div>
      ))}
    </div>
    </>
  )
}

export default AboutMe