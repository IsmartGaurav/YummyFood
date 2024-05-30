import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ itemsData }) => {
  const dispatch = useDispatch();
  console.log(itemsData);
  const handleItems = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {itemsData.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="flex justify-between my-4 border-b-2 border-b-gray-200"
        >
          <div className="w-8/12">
            <div className="font-medium text-lg text-justify">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-bold">
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm mb-2 font-normal text-left ">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-2/12 ">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-md m-auto object-cover h-20 w-full"
              alt="No Preview Availabe"
            />
            <div className="relative text-center bottom-2 font-bold">
              <button
                className="px-8 py-2 bg-white text-green-600 rounded-md text-xl hover:bg-slate-50 border border-green-100"
                onClick={() => handleItems(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
