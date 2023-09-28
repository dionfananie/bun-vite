import { memo } from "react";
import Button from "./Button";
interface TextDesc {
  desc: string;
}
const TextDesc = () => {
  return <Button text="hello" />;
};

export default memo(TextDesc);
