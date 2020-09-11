import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css';

// // Component Quiz 2
// import ListOfCards from './Quiz2/Cards';

// Component Tugas 15
import Routes from './Tugas15/Routes'


// const data = [
//   {name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745"}, 
//   {name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg"}, 
//   {name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756"}, 
//   {name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }
// ]


function App() {
  return (
    <Router>
      {/* <Timer />
      <br />
      <Form />
      <br /> */}
      {/* <ItemLists /> */}
      {/* <br />
      <div style={{width: '50%', margin: '2rem auto'}}>
        <ListOfCards data={data} />
      </div>
      <br /> */}
      {/* <ListFruits /> */}
      {/* <ApiFetch /> */}
      {/* <Fruit /> */}
      <Routes />
    </Router>
  );
}

// Simpan dulu

export default App;
