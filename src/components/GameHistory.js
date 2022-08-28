import React, { useEffect, useState } from 'react';
import {collection,getDocs} from "firebase/firestore";
import { db } from "../firebase-config";
import style from '../styles/gamehistory.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

function GameHistory(props) {
  const [gameCollection,setGameCollection] = useState([]);
  const usersCollectionRef = collection(db, "scorecard");
   
  useEffect(()=>{
    const getMatch= async () => {
      const data = await getDocs(usersCollectionRef);
      setGameCollection(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getMatch();
  },[])
 
  return (
    <div className={style.GameHistory}>
       <div className={style.GameHead}>
          <div className={style.HeadImage}>
              <img src='https://cdn-icons-png.flaticon.com/512/502/502189.png' alt='start'/>   
          </div>
          <div className={style.HeadText}><h1>Game History</h1></div>
      </div>
      
      <Table striped  hover id="table_id">
        <thead>
          <tr>
            <th>
              S.n
            </th>
            <th>
              Player 1
            </th>
            <th>

            </th>
            <th>
              Player 2
            </th>
          </tr>
        </thead>
        <tbody>
            {gameCollection.map((val,index)=>{
              const sn = index+1;
              return (<tr key={index} className={style.tbodyTr} onClick={()=>{props.handleGameDetail(val)}}>
                <td>{sn}</td>
                <td>{val.player1}</td>
                <td><img src='https://cdn-icons-png.flaticon.com/512/3407/3407050.png' alt='vs' width='40px' /></td>
                <td>{val.player2}</td>
                </tr>)
            })}
        </tbody>
       
      </Table>
      {/* {gameCollection.map((val,index)=>{
        return <div>{val.player1} Vs {val.player2}<button onClick={()=>{props.handleGameDetail(val)}}>Open</button></div>
      })} */}
    </div>
  )
}

export default GameHistory