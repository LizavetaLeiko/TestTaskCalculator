import {
  HistoryBox,
  HistoryTitle,
  HistoryList,
  HistoryItem,
  Button,
} from "./historyStyles";
import { v4 as uuidV4 } from "uuid";
import { useSelector } from "react-redux";

export const HistoryFC = () => {
  const historyArr = useSelector((state) => state.history);

  return (
    <HistoryBox>
      <HistoryTitle>History</HistoryTitle>
      <Button>Clear all</Button>
      <HistoryList>
        {historyArr.map((item) => {
          return (
            <HistoryItem key={uuidV4()}>
              {item.expression}={item.result}
            </HistoryItem>
          );
        })}
      </HistoryList>
    </HistoryBox>
  );
};
