import { useSelector } from "react-redux";
import { DisplayBox, DisplayContent } from "./displayStyles";

export const DisplayFC = () => {
  const content = useSelector((state) => state);

  return (
    <DisplayBox>
      <DisplayContent
        style={
          content.expression.length >= 25
            ? { fontSize: "32px" }
            : { fontSize: "42px" }
        }
      >
        {content.result === "" ? content.expression : content.result}
      </DisplayContent>
    </DisplayBox>
  );
};
