import Button from "@mui/material/Button";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";

export default function CustomButton(props) {
  return (
    <Button
      variant="outlined"
      type={props.btnType}
      sx={props.sxProp}
      onClick={props.click}
      endIcon={<FavoriteBorderSharpIcon />}
    >
      {props.label}
    </Button>
  );
}
