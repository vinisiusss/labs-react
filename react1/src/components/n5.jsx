
export function Button(){


let i = 0;
const color = ['red' , 'green']
function handleClick(){
    i ++;
    console.log(i)
}

  return (
    <button    onClick={handleClick}   style={{ backgroundColor: color[i] }}>
      Изменить цвет
    </button>
  );
};





