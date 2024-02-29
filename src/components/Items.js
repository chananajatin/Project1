import Card from "./Card";

const Items = () => {
  return (
    <div className="grid grid-cols-2 p-1 gap-x-4 gap-y-0 h-screen sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  xl:px-8  justify-items-center items-center ">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Items;
