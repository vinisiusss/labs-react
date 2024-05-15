import { useState, useEffect } from "react";
export function Vers(){
    

    let n = 10;

    nextPrime:
    for (let i = 2; i <= n; i++) {
    
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime; 
      }
    
      return setInterval(() => {
        <p>{i}</p>
      }, 1000)
      return;
    }
    

    

}