import React from "react";
import PropTypes from 'prop-types';
import CourseListRow from "./CourseListRow";
import './CourseList.css';
import CourseShape from './CourseShape';

export default function CourseList({listCourses=[]}) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <tr>
            <td colSpan='2'>No course available yet</td>
          </tr>
        ) : (
          listCourses.map((info) => (
            <CourseListRow key={info.id} textFirstCell={info.name} textSecondCell={info.credit} />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}
