import { useState } from "react";
import { Button } from "../components/Button";

export const Registration = () => {
    function savename(formData: { get: (arg0: string) => any; }) {
        const username = formData.get("username");
        alert(`${username} - это вы`)
    }
    
  const [count,setCount] = useState<number>(0);
  return (
    <div className="flex justify-between flex-wrap">
      <form action={savename}>
        <input type="text" name="username" className="bg-black border-1"/>
        <button type='submit'>Save my name</button>
    </form>
        <Button
        color="primary"
        size="small"
        title="Увеличить счётчик" onClick={()=> {setCount(count+1); alert("вы нажали в : "+ count+ " раз")}} disabled={false}        ></Button>

    </div>
    
  )
}
