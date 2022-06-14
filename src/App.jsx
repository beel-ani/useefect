import Component2 from './Component/Component2'
import Componet  from './Component/Componet'
import NavBar from './Component/Navbar'
import Component1 from './Component/Component1'
import Contar from './Component/Contador'



function App(){
  
   
/*function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
  
    useEffect(() => {
       setCount(cont + 1);
    }, [cont]);*/
        return(
        <>
        <div>
            <NavBar></NavBar>
          

            <Contar contador={0}></Contar>
                
  
     
        
          
            
        </div>
        </>
    )
}
export default App;