import{useState} from "react";

const UseState = () => {
    
    // let count = 5;
    const [count, setCount] = useState(5);
    
    const onClickPlusBtn = () => {
        setCount(count + 1);
        console.log(count)
    }

    return (
    <div> 
        {count}
        <button onClick={onClickPlusBtn}>+</button>
     </div>
    );
}
export default UseState;