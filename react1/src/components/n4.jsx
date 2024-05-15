export function Temp(){

    const t = -4 
    const color = t < 0 ? "blue" : "red";
      return (
      <>
        <span style={{ color }}>{t}</span>
      </>
      
      )   
    }