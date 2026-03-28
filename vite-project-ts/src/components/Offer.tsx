import { useState } from "react";
import { Button } from "./Button";

interface OfferProps {
    title: string;
    children?: React.JSX.Element;
}
export const Offer = (props:OfferProps) => {
    const {title} = props;
    const [count,setCount] = useState<number>(0);
    return (
    <div className="bg-black max-w-1/3   ">
        <p>{title} {count}</p>
        <Button
            color="primary"
            size="small"
            title="Хочу этот попит" onClick={()=> {setCount(count+1);/* alert("ваш интерес в " + title+ "= "+ count)*/}} disabled={false}
        ></Button>
    </div>
  );
};
