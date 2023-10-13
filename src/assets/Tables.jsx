import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import "../App.css";
const Tables = () => {
  const isTrue = useMediaQuery("(min-width:650px)");
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  // const rows = [
  //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   ];
  return (
    <div
      style={{
        padding: "15px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: "10px",
        marginTop: "20px",
        background: "white",
        
      }}
    >
      <div
        style={{
          padding: "8px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h5 className="ms-md-4">Product Sell</h5>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className="me-lg-5 me-md-3 me-sm-2 me-sm-1">
            {isTrue ? (
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
                className="small-input-field"
              />
            ) : (
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
                className="smaller-input-field"
              />
            )}
          </div>
          <div style={{ display: "float", float: "right", padding: "3px" }}>
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ fontSize: "13px" }}
            >
              <option value="Last 30 days">Last 30 days</option>
            </select>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"><h6 className = 'grey ps-md-4'>Product Name</h6></th>
            <th scope="col"><h6 className = 'grey ps-md-3'>Stock</h6></th>
            <th scope="col"><h6 className = 'grey ps-md-2'>Price</h6></th>
            <th scope="col"><h6 className = 'grey ps-md-2'>Total Sales</h6></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div style={{ display: "flex" }}>
                <span>
                  <img
                    style={{ transform: "scale(0.6)", borderRadius: "10px" }}
                    className="img-fluid"
                    src="./images/one.png"
                  />
                </span>
                <div>
                  <h6 className="fw-bold m-0 mt-3">Abstract 3D</h6>
                  <p className="m-0 mb-3 grey">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ea, illum.
                  </p>
                </div>
              </div>
            </td>
            <td className="bottom-align fw-light">32 in stock</td>
            <td className="bottom-align fw-bold">$45.99</td>
            <td className="bottom-align fw-light">20</td>
          </tr>
          <tr>
            <td>
              <div style={{ display: "flex" }}>
                <span>
                  <img
                    style={{ transform: "scale(0.6)", borderRadius: "10px" }}
                    className="img-fluid"
                    src="./images/two.png"
                  />
                </span>
                <div>
                  <h6 className="fw-bold m-0 mt-2">Sarphens Illustrations</h6>
                  <p className="m-0 mb-2 grey">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ea, illum.
                  </p>
                </div>
              </div>
            </td>
            <td className="bottom-align fw-light">32 in stock</td>
            <td className="bottom-align fw-bold">$45.99</td>
            <td className="bottom-align fw-light">20</td>
          </tr>
        </tbody>
      </table>
      {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
              <TableCell style={{ padding: '16px 16px 5px' }}><h6 style={{ fontSize: '13px',color:
            '#808080'  }} className="fw-light">Product Name</h6></TableCell>
            <TableCell style = {{padding:'16px 16px 5px'}} align="right"><h6 style={{ fontSize: '13px',color:
            '#808080' }}className="fw-light">Stock</h6></TableCell>
            <TableCell style = {{padding:'16px 16px 5px'}} align="right"><h6 style={{ fontSize: '13px',color:
            '#808080'  }}className="fw-light">Price</h6></TableCell>
            <TableCell style = {{padding:'16px 16px 5px'}} align="right"><h6 style={{ fontSize: '13px' ,color:
            '#808080' }}className="fw-light">Total Sales</h6></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow 
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className = 'no-padding-cell' style = {{display:'flex'} }>
                  <span>
                    <img style={{ transform: 'scale(0.6)',borderRadius:'10px'}}  className = 'img-fluid' src = 'one.png'/>
                  </span>
                  <div>
                  <h6 className="fw-bold">Abstract 3D</h6>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, illum.</p>
                  </div>
                </div>
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
    </div>
  );
};

export default Tables;
