"use client";

export default function CartItems() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="cart-item-specs flex items-center gap-[30px]">
          <div className="cart-item_image">
            <div className="oval">
              <img src="fries.png" />
            </div>
          </div>
          <div className="cart-item_details ">
            <h2 className="font-semibold text-[21px] ">French Fries</h2>
            <p className="font-normal text-[18px] mt-[6px]">Breakfast</p>
          </div>
        </div>
        <div className="cart-item_quantity">
          <p className="text-primary font-bold text-xl">#3500</p>
          <div className="cart-item_operation flex items-center justify-between gap-2 mt-[6px]">
            <div className="add ">
              <p className="cart-btn">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.5" y="0.5" width="22" height="22" stroke="black" />
                  <path
                    d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z"
                    fill="black"
                  />
                </svg>
              </p>
            </div>
            <p>1</p>
            <div className="minus  ">
              <p className="cart-btn">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.5" y="0.5" width="22" height="22" stroke="black" />
                  <path d="M19 12.998H5V10.998H19V12.998Z" fill="black" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="cart-total flex items-center justify-between py-3 border-t">
        <p className="text-[24px] font-semibold ">Total</p>
        <p className="text-primary font-bold text-2xl">#8000</p>
      </div>

      <button className="w-[60%] m-auto bg-primary text-white py-2 rounded-lg">
        Checkout
      </button>
    </div>
  );
}
