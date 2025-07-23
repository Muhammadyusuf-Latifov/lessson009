import React, { useRef } from "react";
import { useStore } from "../../zustand/UseStore";
const Inputs = () => {
  const { carCards } = useStore();
  const { createCar } = useStore();

  const data = new Date().getTime();

  const url = useRef(null);
  const name = useRef(null);
  const price = useRef(null);
  const brand = useRef(null);
  const handleSave = (e) => {
    e.preventDefault();
    const carInfo = {
      id: data,
      url: url.current.value,
      name: name.current.value,
      price: price.current.value,
      brand: brand.current.value,
    };
    createCar(carInfo);

    url.current.value = "";
    name.current.value = "";
    price.current.value = "";
    brand.current.value = "";
  };

  return (
    <section className="">
      <div className="container mx-auto flex items-center justify-center ">
        <div className="inp-bg bg-[#ddd] pt-[20px] pb-[40px] px-[30px] w-[650px] mt-[80px] shadow-2xl rounded-[5px]">
          <h2 className="text-center mb-[30px] text-[#fff] text-[30px] font-medium">
            Enter your car information
          </h2>
          <form
            onSubmit={handleSave}
            action="
        "
          >
            <div className="flex items-center justify-between mb-[10px]">
              <label className="font-medium text-[#fff]" htmlFor="1">
                Enter car image url
              </label>
              <input
                required
                ref={url}
                className="block bg-[#fff] placeholder:text-[#9f9f9f] w-[350px] py-[8px] indent-[14px] border-[1px] border-[#a4a2a2] rounded-[3px]"
                type="text"
                autoComplete="off"
                placeholder="Enter car image url"
                name=""
                id="1"
              />
            </div>
            <div className="flex items-center justify-between  mb-[10px]">
              <label className="font-medium text-[#fff]" htmlFor="1">
                Enter car name
              </label>
              <input
                required
                ref={name}
                className="block bg-[#fff] placeholder:text-[#9f9f9f] w-[350px] py-[8px] indent-[14px] border-[1px] border-[#a4a2a2] rounded-[3px]"
                type="text"
                autoComplete="off"
                placeholder="Enter car name "
                name=""
                id="1"
              />
            </div>
            <div className="flex items-center justify-between  mb-[10px]">
              <label className="font-medium text-[#fff]" htmlFor="1">
                Enter car price
              </label>
              <input
                required
                ref={price}
                className="block bg-[#fff] placeholder:text-[#9f9f9f] w-[350px] py-[8px] indent-[14px] border-[1px] border-[#a4a2a2] rounded-[3px]"
                type="text"
                autoComplete="off"
                placeholder="Enter car price"
                name=""
                id="1"
              />
            </div>
            <div className="flex items-center justify-between  mb-[10px]">
              <label className="font-medium text-[#fff]" htmlFor="1">
                Enter car image brand
              </label>
              <input
                required
                ref={brand}
                className="block bg-[#fff] placeholder:text-[#9f9f9f] w-[350px] py-[8px] indent-[14px] border-[1px] border-[#a4a2a2] rounded-[3px]"
                type="text"
                autoComplete="off"
                placeholder="Enter car brand"
                name=""
                id="1"
              />
            </div>
            <button className="block mx-auto border py-[8px] mt-[30px] px-[60px] rounded-[5px] text-[18px] text-[#fff] transition border-[#fff] hover:bg-[#0000000c]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Inputs;
