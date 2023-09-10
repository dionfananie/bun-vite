import { CardProvider } from "@/contexts/card";
import { Dispatch, SetStateAction, memo } from "react";
import TextDesc from "./TextDesc";

const Card = ({ setCountCard, countCard }: { countCard: number; setCountCard: Dispatch<SetStateAction<number>> }) => {
  console.log("card rendered");

  return (
    <div className="block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100">
      <CardProvider>
        <button
          type="button"
          onClick={() => setCountCard(v => v + 1)}
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Click Count Card
        </button>
        <p>countCard: {countCard}</p>
        <TextDesc />
      </CardProvider>
    </div>
  );
};

export default memo(Card);
