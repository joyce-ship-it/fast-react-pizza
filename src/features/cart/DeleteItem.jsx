import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cardSlice";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button
      type="small"
      onClick={() => {
        dispatch(deleteItem(pizzaId));
      }}
    >
      Delete
    </Button>
  );
}
