import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

function PhotoBrand() {
  return (
    <TableContainer
      style={{
        marginTop: "5rem",
        backgroundColor: "rgba(243, 243, 243, 0.493)",
      }}
    >
      {/*-----------all barnd photo------------*/}
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell align="left">
              <img src="/images/brand/duroLogo.png" width={100} />
            </TableCell>
            <TableCell align="left">
              <img src="/images/brand/bergnerLogo.png" width={200} />
            </TableCell>
            <TableCell align="left">
              <img src="/images/brand/ozitoLogo.png" width={140} />
            </TableCell>
            <TableCell align="left">
              <img src="/images/brand/parksideLogo.png" width={200} />
            </TableCell>
            <TableCell align="left">
              <img src="/images/brand/silvercrestLogo.png" width={200} />
            </TableCell>
            <TableCell align="left">
              <img src="/images/brand/lupiluLogo.png" width={200} />
            </TableCell>
            <TableCell align="left">
              <img src="/images/brand/crivitLogo.png" width={120} />
            </TableCell>
            <TableCell align="left">
              <img src="/images/brand/einhellLogo.png" width={200} />
            </TableCell>
            <TableCell align="left">
              <img src="/images/brand/grundigLogo.png" width={200} />
            </TableCell>
            <TableCell align="left">
              <img src="/images/brand/royaltylineLogo.png" width={200} />
            </TableCell>
            <TableCell align="left">
              <img src="/images/brand/sensiplastLogo.png" width={180} />
            </TableCell>
            <TableCell align="left">
              <img src="/images/brand/swissGearLogo.png" width={200} />
            </TableCell>
            <TableCell align="left">
              <img src="/images/brand/victoriasecretLogo.png" width={140} />
            </TableCell>
            <TableCell align="left">
              <img src="/images/brand/wenkoLogo.png" width={140} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/*---------------------X----------------*/}
    </TableContainer>
  );
}

export default PhotoBrand;
