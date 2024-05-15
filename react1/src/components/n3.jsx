export function Num(){

    const arr=[14, 5, 6, 12, 21, 2]
      return (
      <>
      <div>
      {arr.filter((num) => num % 2 === 0).join(", ")}
    </div>
      </>
      
      )   
    }