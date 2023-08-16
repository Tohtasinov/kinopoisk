import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "./filmsListSlice";
import { Box, CircularProgress, Grid } from "@mui/material";
import FilmCard from "../../components/FilmCard/FilmCard";
// import PropTypes from 'prop-types';

const FilmsList = () => {
  const list = useSelector((state) => state.filmsList.list);
  const isLoading = useSelector((state) => state.filmsList.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {list?.map((item) => (
        <Grid key={item.filmId} item xs={12} sm={6} md={4}>
          <FilmCard film={item} />
        </Grid>
      ))}
    </Grid>
  );
};

FilmsList.propTypes = {};

export default FilmsList;
