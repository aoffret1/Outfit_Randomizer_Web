//Resources: 
//Dowloading data: https://firebase.google.com/docs/storage/web/download-files#download_data_via_url
// net ninjas on Youtube

import './App.css';
import { useState } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


function App() {

  //Output for the pictures.
  const [output, setOutput] = useState(
    <div id="output">
      <p>Default Text</p>
    </div>
  );

/********************** 
* Print a random shirt and top. Currently has placeholder images. 
***********************/
  var shirtClick = () => {
    console.log("Shirt/Bottoms button worked");
    const shirtNum = (Math.random() * 10 + 2);
   
    setOutput(
      <div id="output">
        <p>Shirt</p>
        <img src="https://imgprd19.hobbylobby.com/2/4f/57/24f57e245a879cb2543edd1df4e090bfebf24a45/700Wx700H-1013689-0320.jpg" alt="Shirt URL"></img>
        <p>Bottoms</p>
        <img src="https://dimg.dillards.com/is/image/DillardsZoom/main/free-people-just-float-on-flare-bell-bottom-jeans/05779032_zi_blue.jpg" alt="Shirt URL"></img>
      
      </div>
    );
  }

  /********************** 
  * Print a dress. Currently has placeholder images. 
  ***********************/
  var dressClick = () => {
    console.log("Dress button worked");
    setOutput(
      <div id="output">
        <p>Dress</p>
        <img src="https://img.abercrombie.com/is/image/anf/KIC_159-2765-4207-300_prod1?policy=product-medium&wid=350&hei=438" alt="Shirt URL"></img>
      </div>
    );
  }

  /********************** 
  * Print shoes. Currently has placeholder images. 
  ***********************/
  var shoeClick = () => {
      console.log("Shoes button worked")
      setOutput(
        <div id="output">
          <p>Shoes</p>
          <img src="https://cdn.shopify.com/s/files/1/0086/9646/3419/products/VSS_3801_300x300.JPG?v=1571708755" alt="Shirt URL"></img>
        </div>
      );
    }


  return (
    <div className="App">

      <div className="content">
        <h1>Options</h1>
        <h3>Pick a button below</h3>
        <button onClick={shirtClick}>Shirt / Bottoms</button>
        <button onClick={dressClick}>Dress </button>
        <button onClick={shoeClick}>Shoes</button>
      </div>
      {output}
    </div>
  );
}

export default App;
