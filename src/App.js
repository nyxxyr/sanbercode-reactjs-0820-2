import React from 'react';
import './App.css';

// Components Tugas 10 Soal 1
import Form from './Tugas9/Form';

// Components Tugas 10 Soal 2
import ItemLists from './Tugas10/ItemLists';

// Component Quiz 2
import ListOfCards from './Quiz2/Cards';

// Component Tugas 11
import Timer from './Tugas11/Timer'

// Component Tugas 13
import ListFruits from './Tugas13/ListFruits'
import ApiFetch from './Tugas13/apiFetch'

// Component Tugas 14
import Fruit from './Tugas14/Fruit'


const data = [
  {name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745"}, 
  {name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg"}, 
  {name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756"}, 
  {name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }
]


function App() {
  return (
    <div>
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
      <Fruit />
    </div>
  );
}

// Simpan dulu

export default App;
