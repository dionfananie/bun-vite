import Card from "../components/Card";
import FirstCard from "@/components/FirstCard";
import { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);
  const [countCard, setCountCard] = useState(0);
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div>
        <FirstCard count={count} setCount={setCount} />
        <Card countCard={countCard} setCountCard={setCountCard} />
      </div>
    </div>
  );
};

export default Index;
