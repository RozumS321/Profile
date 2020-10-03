import { useState, useEffect } from "react";
import CompletedEdit from "./complete";
import Edit from "./edit";
import { Container, Grid } from "@material-ui/core";
import { connect } from "react-redux";

function Main({ edit }) {
  // useEffect(() => {}, [edit]);

  return (
    <Container>
      <Grid container spacing={4}>
        {edit ? <Edit /> : <CompletedEdit />}
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    edit: state.edit,
  };
};
export default connect(mapStateToProps)(Main);
