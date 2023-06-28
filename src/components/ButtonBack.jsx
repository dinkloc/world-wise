import { NavLink } from "react-router-dom";
import Button from "./Button";
const ButtonBack = () => {
  return (
    <NavLink to={-1}>
      <Button type="back"> &larr; Back</Button>
    </NavLink>
  );
};

export default ButtonBack;
