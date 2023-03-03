import { useSelector } from "react-redux";
import { DisplayBox, DisplayContent } from "./displayStyles";

export const DisplayFC = () => {
  const content = useSelector((state) => state);

  return (
    <DisplayBox>
      <DisplayContent>
        {content.result === "" ? content.expression : content.result}
      </DisplayContent>
    </DisplayBox>
  );
};
