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
              <img
                src="/images/brand/duroLogo.png"
                alt="brand photo"
                width={100}
              />
            </TableCell>
            <TableCell align="left">
              <img
                src="/images/brand/bergnerLogo.png"
                alt="brand photo"
                width={200}
              />
            </TableCell>
            <TableCell align="left">
              <img
                src="/images/brand/ozitoLogo.png"
                alt="brand photo"
                width={140}
              />
            </TableCell>
            <TableCell align="left">
              <img
                src="/images/brand/parksideLogo.png"
                alt="brand photo"
                width={200}
              />
            </TableCell>
            <TableCell align="left">
              <img
                src="/images/brand/silvercrestLogo.png"
                alt="brand photo"
                width={200}
              />
            </TableCell>
            <TableCell align="left">
              <img
                src="/images/brand/lupiluLogo.png"
                alt="brand photo"
                width={200}
              />
            </TableCell>
            <TableCell align="left">
              <img
                src="/images/brand/crivitLogo.png"
                alt="brand photo"
                width={120}
              />
            </TableCell>
            <TableCell align="left">
              <img
                src="/images/brand/einhellLogo.png"
                alt="brand photo"
                width={200}
              />
            </TableCell>
            <TableCell align="left">
              <img
                src="/images/brand/grundigLogo.png"
                alt="brand photo"
                width={200}
              />
            </TableCell>
            <TableCell align="left">
              <img
                src="/images/brand/royaltylineLogo.png"
                alt="brand photo"
                width={200}
              />
            </TableCell>
            <TableCell align="left">
              <img
                src="/images/brand/sensiplastLogo.png"
                alt="brand photo"
                width={180}
              />
            </TableCell>
            <TableCell align="left">
              <img
                src="/images/brand/swissGearLogo.png"
                alt="brand photo"
                width={200}
              />
            </TableCell>
            <TableCell align="left">
              <img
                src="/images/brand/victoriasecretLogo.png"
                alt="brand photo"
                width={140}
              />
            </TableCell>
            <TableCell align="left">
              <img
                src="/images/brand/wenkoLogo.png"
                alt="brand photo"
                width={140}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/*---------------------X----------------*/}
    </TableContainer>
  );
}

export default PhotoBrand;
