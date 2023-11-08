import Clock from "./Clock";

const today = new Date();

const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const formattedDate = today.toLocaleDateString();

const Navbar = () => {
  return (
    <div className="navbar">
      <Clock />
      <img src=".\idlogo1nobg.png" alt="Logo" />
      <h4>{formattedDate}</h4>
    </div>
  );
};

export default Navbar;
export { formattedDate };
