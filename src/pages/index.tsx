import { AppGlobalProvider, useAppGlobalContext } from "@/contexts/appGlobal";
import Card from "../components/Card";
import { CardProvider } from "../contexts/card";
import FirstCard from "@/components/FirstCard";
import { useMemo, useState } from "react";

const Index = () => {
  // const { count, countCard, setCount, setCountCard } = useAppGlobalContext();
  // const countFinalCard = useMemo(() => countCard, [countCard]);
  const [count, setCount] = useState(0);
  const [countCard, setCountCard] = useState(0);
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div>
        <FirstCard count={count} setCount={setCount} />
        {/* <CardProvider> */}
        <Card countCard={countCard} setCountCard={setCountCard} />
        {/* </CardProvider> */}
      </div>
    </div>
  );
};

export default Index;
