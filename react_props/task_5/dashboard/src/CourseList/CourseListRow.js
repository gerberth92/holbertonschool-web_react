import React from "react";
import PropTypes from "prop-types";

export default function CourseListRow({isHeader=false, textFirstCell, textSecondCell=null}) {
  if (isHeader === true && textSecondCell == null) {
    return (
      <tr>
        <th colSpan='2'>{textFirstCell}</th>
      </tr>
    );
  }

  if (isHeader == false) {
    return (
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
