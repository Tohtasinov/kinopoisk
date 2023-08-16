import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmDetails } from "./filmDetailsSlice";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const FilmDetails = () => {
  const details = useSelector((state) => state.filmDetails.details);

  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilmDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <div style={{ padding: "10px 5%" }}>
      {details && (
        <>
          <h2 style={{ textAlign: "center" }}>{details.nameRu}</h2>
          <img
            src={details.posterUrlPreview}
            alt="green iguana"
            style={{ width: "21%", height: "auto" }}
          />
          <h5>{details.description}</h5>
        </>
      )}
    </div>
  );
};

FilmDetails.propTypes = {
  filmId: PropTypes.number.isRequired,
};

export default FilmDetails;
