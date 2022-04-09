// import { useTheme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const Card= () =>{

const [user, setUser] =useState([]);
    
      let fetchData=()=>{
        fetch("https://randomuser.me/api/?nat=us&results=18&page=2")
        .then((response)=>{
          return response.json()
        })
        .then((data)=>{
          console.log(data);
          let ritik = data.results;
          console.log(ritik);
          setUser(ritik);
        });
      }
      useEffect(
        ()=>{
          console.log("print ");
          fetchData();
        }
      ,[])
        
      return (
        <div className='This_is_Wrapper'>
          {/* <div className='Cards' > */}
            {
              user.map(
                cvalue=> (
                  <div className='Cards' key={cvalue.phone}>
                    <div className='Image_Wrapper'>
                      <img src={cvalue.picture.large} />                     
                    </div>
                    <div>
                       <span> {cvalue.phone} </span>
                       <span> {cvalue.email} </span>
                       <span> {cvalue.name.first + " "+ cvalue.name.last } </span>
                    </div>
                  </div>
                )
              )
            }
            
          {/* </div> */}
        </div>
      );
      // return(
      //   <>
      //     <h1>Hello all</h1> 
      //     {/* <h1>{ritik.gender}</h1> */}
      //     {user.map(
      //       cvalue=>(
      //         < div className='wrapper' key={cvalue.phone}>
      //           <img src={cvalue.picture.large}/>
      //           <h4>{cvalue.name.first+" "+cvalue.name.last }</h4>
      //           <p> {cvalue.phone}</p>
                
      //         </ div>
      //       )
      //     )}
      //   </>
      // );
    
}
export default Card; 