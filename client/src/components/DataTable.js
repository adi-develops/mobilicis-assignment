import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./datatable.css"

export default function DataTable(props) {

  return (
    <div>
    <h2>{props.name}</h2>
    <TableContainer>
      <Table sx={{ maxWidth: 650 }}  className="table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Income</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Car</TableCell>
            <TableCell align="center">Quote</TableCell>
            <TableCell align="center">Phone Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{user.id}</TableCell>
              <TableCell align="center">{user.first_name}</TableCell>
              <TableCell align="center">{user.last_name}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.gender}</TableCell>
              <TableCell align="center">{user.income}</TableCell>
              <TableCell align="center">{user.city}</TableCell>
              <TableCell align="center">{user.car}</TableCell>
              <TableCell align="center">{user.quote}</TableCell>
              <TableCell align="center">{user.phone_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
