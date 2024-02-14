import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import TopSec from './App';
import Card from './card';
import image1 from"./Images/car-image4.jpg"
import image2  from"./Images/car-image5.jpg"
import image3 from"./Images/car-image6.jpg"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopSec/>
    <div className='Section '>
    <Card 
    img={image1}
    text="Yellow Benz"
     pricing="15000 USD"
     NGN ="220000 NGN"
     status="IN STOCK"

    />
    <Card
     img={image2}
     text="red benz"
     pricing="10000 USD"
     NGN="15000000 NGN"
     status="SOLD OUT"
    />
    <Card 
    img={image3}
    text="black mustang"
     pricing="8000 USD"
     NGN="12000000 NGN"
     status="IN STOCK"
    />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
