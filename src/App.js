import './App.css';
import {ColorPicker,TextField} from '@shopify/polaris'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { HexColorPicker } from "react-colorful";


function App() {
  const [color, setColor] = useState("#aabbcc");
  // const [color,setColor] = useState({
  //     hue: 120,
  //     brightness: 1,
  //     saturation: 1,
  //     alpha:1
  // });
  const [value,setValue] = useState('');
  const [imageUrl,setImageUrl] = useState('');
  // const colorr = convert.hsv.rgb(color)
  // console.log(color,colorr);
  const quote = value.length > 0 ? value : 'Your Quote Goes Here';
  useEffect(() =>
  {
    axios.post('https://g2-task-manager.herokuapp.com/tasks/getUrlOfImage',{
      actualQuote:quote,
      color
  })
    .then(function (response) {
      setImageUrl(response.data);
      setValue("");
    })
    .catch(function (error) {
      console.log(error.message);
    });
  },[color]);

  return (
    <div className="App" style={{margin:15}}>
      <TextField 
      placeholder='Your Quote Goes Here' 
      label="Enter Quote" 
      value={value} 
      onChange={(newValue) =>{setValue(newValue)}} 
      autoComplete="off"
      id="searchBar"
      /><br />
      <HexColorPicker color={color} onChange={(newColor) => {
       if(value === '')
       {
        return alert("please select quote first!")
       };
       setColor(newColor);

      }}  />
      {/* <ColorPicker color={color} onChange={(newColor)=>{setColor(newColor)}} allowAlpha/><br /><br /> */}
      <img src={imageUrl} alt="image" />
    </div>
  );
}

export default App;
