import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";
const Navbar = () => {
  const isTrue = useMediaQuery('(min-width:600px)')
  return (
    <div className=" p-3 d-flex justify-content-between">
      {isTrue ? <h5>Hello Kartik 👋🏻,</h5> : <h5>Hey 👋🏻,</h5>}
      
      <TextField
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        placeholder="Search"
      />
    </div>
  );
};

export default Navbar;
