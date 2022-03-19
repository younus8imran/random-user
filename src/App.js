import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";


export default function App() {
  
  const [random, setRandom] = useState([]);


  const fetchUser = async() => {
    const api = await fetch('https://randomuser.me/api/');
    const data = await api.json();

    setRandom(data.results);
  }

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <>
      {random.map((user) => {
        return (
          <Card key={user.id}>
             
            <img src={user.picture.large} alt="" />
            <h2>{user.name.first} {user.name.last}</h2>
            <p><strong>Email: </strong>{user.email}</p>
            <p><strong>Age: </strong>{user.dob.age}</p>
            <p><strong>Location: </strong>{user.location.state}, {user.location.country}</p>
            <p><strong>Phone: </strong>{user.phone}</p>

            <button onClick={fetchUser}>Next User</button>
          </Card>
          )
      })}
   
    </>

  );
}




const Card = styled.div`
  
  padding-top: 100px;
  padding-bottom: 50px;
  margin: auto;
  border-radius: 25px;
  min-height: 25px;
  max-width: 400px;
  color: white;
  justify-content: center;
  background-color: #22303C;


  button {
    cursor: pointer;
    display: inline-block;
    background: blue;
    color: white;
    font-size: 15px;
    border: 0.5;
    border-radius: 0.5rem;
    padding: 0.9rem 1.5rem;
    margin-left: 35%;
    margin-top: 20px;
  }
  
  button:focus {
    outline: none;
  }
  
  button:hover {
    transform: scale(0.98);
  }
  img {
    text-align: center;
    display: block;
    margin: auto;
    border-radius: 50%;
    border: 2px solid blue;
  }

  h2 {
    text-align: center;
    margin-bottom: 3rem;
 
  }
  p {
    padding-left: 2rem;
    line-height: 0.5rem;
    margin-bottom: 0.1rem;
  }


`
