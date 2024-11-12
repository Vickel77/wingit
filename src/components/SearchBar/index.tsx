export default function SearchBar() {
  return (
    <div>
      <form action="" className="w-full">
        <div className="searchbar-container w-[80%] flex items-center justify-center gap-3">
          <div className="search-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0002 19L14.6572 14.657M14.6572 14.657C15.4001 13.9141 15.9894 13.0322 16.3914 12.0616C16.7935 11.0909 17.0004 10.0506 17.0004 9.00002C17.0004 7.94942 16.7935 6.90911 16.3914 5.93848C15.9894 4.96785 15.4001 4.08591 14.6572 3.34302C13.9143 2.60014 13.0324 2.01084 12.0618 1.6088C11.0911 1.20675 10.0508 0.999817 9.00021 0.999817C7.9496 0.999817 6.90929 1.20675 5.93866 1.6088C4.96803 2.01084 4.08609 2.60014 3.34321 3.34302C1.84288 4.84335 1 6.87824 1 9.00002C1 11.1218 1.84288 13.1567 3.34321 14.657C4.84354 16.1574 6.87842 17.0002 9.00021 17.0002C11.122 17.0002 13.1569 16.1574 14.6572 14.657Z"
                stroke="#111111"
                stroke-opacity="0.5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <input
            type="search"
            name=""
            id=""
            className=" "
            placeholder="What would you like to eat today..."
          />
        </div>
      </form>
    </div>
  );
}
