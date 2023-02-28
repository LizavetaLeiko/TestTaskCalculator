import { useEffect } from "react"; 
import {
  HistoryBox,
  HistoryTitle,
  HistoryList,
  HistoryItem,
  Button,
} from "./historyStyles";
import { v4 as uuidV4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { getHistoryAction } from "../../store/actions";

export const HistoryFC = () => {

  const dispatch = useDispatch();
  const historyArr = useSelector((state) => state.history);

  useEffect(() =>{
    dispatch(getHistoryAction())
  }, [])

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
