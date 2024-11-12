import DishesCard from "../DishesCard";

export default function FoodMenuTab() {
  return (
    <div>
      <section className="container">
        <div className="pills-container flex w-[80%]">
          <div className="pill " id="active-pill">
            Sides
          </div>
          <div className="pill">Snacks</div>
          <div className="pill">Drinks</div>
          <div className="pill">House Regulars</div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="menu-card_container gap-[15px] flex justify-between w-full flex-wrap">
          <div className="col-4">
            <DishesCard />
          </div>
          <div className="col-4">
            <DishesCard />
          </div>
          <div className="col-4">
            <DishesCard />
          </div>
          <div className="col-4">
            <DishesCard />
          </div>
          <div className="col-4">
            <DishesCard />
          </div>
        </div>
      </section>
    </div>
  );
}
