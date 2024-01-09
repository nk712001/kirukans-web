"use client";
import { useForm, Controller } from "react-hook-form";
import CustomButton from "../CommonButton";
import TextField from "@mui/material/TextField";
import { Stack, Typography } from "@mui/material";

export default function Forms() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      Name: "",
      Email: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  const sxClass = {
    color: "#1A1547",
    borderRadius: 0,
    fontFamily: "Montserrat, san-serif !important",
    fontSize: "20px",
    backgroundColor: "#FFBF17",
    border: "2px solid #FFBF17",
    fontWeight: "700",
    textTransform: "capitalize",
    padding: "10px 24px",
    marginTop: "15px",
    "&:hover": {
      color: "#1A1547",
      border: "2px solid #1A1547",
      backgroundColor: "transparent",
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" gap={4}>
        <div className="header">
          <Typography variant="h1">Join kirukans</Typography>
        </div>
        <Controller
          name="Name"
          control={control}
          render={({ field }) => (
            <TextField
              required
              id="outlined"
              label="name"
              placeholder="your email"
              {...field}
              sx={{
                "& .MuiInputLabel-root": {
                  fontFamily: "Gochi Hand, cursive",
                  fontSize: "18px",
                },
                "& .MuiInputBase-root": { borderRadius: "0" },
              }}
            />
          )}
        />
        <Controller
          name="Email"
          control={control}
          render={({ field }) => (
            <TextField
              required
              id="outlined"
              label="Email"
              placeholder="your email"
              {...field}
              sx={{
                "& .MuiInputLabel-root": {
                  fontFamily: "Gochi Hand, cursive",
                  fontSize: "18px",
                },
                "& .MuiInputBase-root": { borderRadius: "0" },
              }}
            />
          )}
        />
        <div style={{ width: "50%" }}>
          <CustomButton label="Submit" sxProp={sxClass} btnType="submit" />
        </div>
      </Stack>
    </form>
  );
}
