import Button from "@mui/material/Button";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";

export default function CustomButton(props) {
  return (
    <Button
      variant="outlined"
      sx={props.sxProp}
      endIcon={<FavoriteBorderSharpIcon />}
    >
      {props.label}
    </Button>
  );
}
