import logo from './logo.svg';
import './App.css';
import {Nav} from './components/Nav';



function App() {
  const images = [{image:"https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
title:"desk"}
,{image:"https://images.unsplash.com/photo-1649562231804-f1bfadc450d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
title:"sky"},
{image:"https://images.unsplash.com/photo-1612828898794-a64150c56e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",title:"grass"}]
  return (
    <div className='App'>
      <div className='head'>
        <p className='logo'>Logo backery</p>
      {images.map(el=> <Nav image={el.image} lable={el.title}/>)}
      <button className='button'>contact</button>
      </div>
    
    
    </div>

  );
}

export default App;
