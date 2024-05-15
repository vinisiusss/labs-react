import { Time} from "./component/n1";
import { Timer} from "./component/n2";
import { Vers} from "./component/n3";





function App() {
  return (
    <>
    <div>
      <h1>N1</h1>
      <Time />
    </div>
    <div>
      <h1>N2</h1>
      <Timer />
       
    </div>
    <div>
      <h1>N3</h1>
      <Vers />
      <p>Числа меняются при любом изменение кода, не понял как обновлять с интервалом</p>
    </div>
    <div>
      <h1>N4</h1>
      <p>Отдельным файлом</p>
    </div>
    <div>
      <h1>N5</h1> 
      
    </div>
    
    </>
    
    
    
  );
}

export default App;