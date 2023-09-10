import { memo } from "react";

const TextDesc = () => {
  console.log("rerendered text desc");

  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum repudiandae, dolorem pariatur est aut,
      culpa officiis, magni beatae eligendi magnam ullam itaque eaque qui autem doloremque! Quia, adipisci consequuntur!
    </p>
  );
};

export default memo(TextDesc);
