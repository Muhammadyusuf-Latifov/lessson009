import React from "react";
import { useStore } from "../../zustand/UseStore";
import { FaRegTrashCan } from "react-icons/fa6";

const Carproduct = () => {
  const { removeItem } = useStore();
  const { carCards } = useStore();
 
  const remove = (card) => {
    removeItem(card);
  };
  return (
    <section>
      <h2 className="text-center text-[45px] text-[#0464c3] mb-[80px]">Cars</h2>
      <div className="container mx-auto grid grid-cols-4 gap-[18px]">
        {carCards?.map((item) => (
          <div className="border border-[#ddd] shadow-md" key={item.id}>
            <div>
              <img className="block h-[230px]" src={item.url} alt="" />
            </div>
            <div className="p-[20px]">
              <h3 className="text-[22px] mb-[8px] text-[#0c5db3] font-medium">
                {item.name}
              </h3>
              <p className="text-[18px] text-[#e2c20b] font-bold">
                {item.price} $
              </p>
              <p className="font-medium">{item.brand}</p>
              <button
                onClick={() => remove(item)}
                className="p-[10px] rounded-[50%] block mt-[20px] text-[white] bg-[crimson]"
              >
                <FaRegTrashCan />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Carproduct);
