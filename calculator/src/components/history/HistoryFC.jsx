import { useEffect } from "react"; 
import {
  HistoryBox,
  HistoryTitle,
  HistoryList,
  HistoryItem,
  Button,
  HistoryListContainer
} from "./historyStyles";
import { v4 as uuidV4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { getHistoryAction } from "../../store/actions";
import { Context } from '../../utils/Context';

export const HistoryFC = () => {

  const dispatch = useDispatch();
  const historyArr = useSelector((state) => state.history);

  useEffect(() =>{
    dispatch(getHistoryAction())
  }, [dispatch])

  return (
    <Context.Consumer>
      {({ historyIsOpen }) => (
        <HistoryBox style={historyIsOpen ? {display: "block"} : {display: "none"}}>
        <HistoryTitle>History</HistoryTitle>
        <Button>Clear all</Button>
        <HistoryListContainer>
        <HistoryList>
          {historyArr && historyArr.reverse().map((item) => {
            return (
              <HistoryItem key={uuidV4()}>
                {item.expression}={item.result}
              </HistoryItem>
            );
          })}
        </HistoryList>
        </HistoryListContainer>
      </HistoryBox>
      )}
    </Context.Consumer>
  );
};
