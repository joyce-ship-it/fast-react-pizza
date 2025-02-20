import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity:70 grayscale" : ""}`}
      />
      <div className="flex flex-grow flex-col">
        <p className="font-semibold">{name}</p>
        <p className="italic, text-sm capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <Button type="small">Add item</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
