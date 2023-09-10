import { Dispatch, SetStateAction, memo } from "react";

const FirstCard = ({ count, setCount }: { count: number; setCount: Dispatch<SetStateAction<number>> }) => {
  return (
    <div className="block p-6 bg-white rounded-lg shadow hover:bg-gray-100 mb-4">
      <button
        type="button"
        onClick={() => setCount(v => v + 1)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Click Count
      </button>
      <p>count App global: {count}</p>
      this is a first card
    </div>
  );
};

export default memo(FirstCard);
