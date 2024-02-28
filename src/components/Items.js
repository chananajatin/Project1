import Card from "./Card";

const Items = () => {
  return (
    <div className="grid grid-cols-2 px-2 h-screen sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 xl:px-8  justify-items-center items-center ">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Items;
