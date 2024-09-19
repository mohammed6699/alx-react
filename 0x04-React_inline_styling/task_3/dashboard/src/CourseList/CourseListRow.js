import React from "react";
import propTypes from 'prop-types';
import './CourseList.css';
import { StyleSheet, css } from "aphrodite";


const CourseList = ({isHeader, textFirstCell, textSecondCell}) => {
    return (
        <tr className={css(course_List.tr)}>
            <td className={css(course_List.tr)}>{textFirstCell}</td>
            <td className={css(course_List.tr)}>{textSecondCell}</td>
        </tr>
    );
};
CourseList.propTypes = {
    isHeader: propTypes.bool,
    textFirstCell: propTypes.string.isRequired,
    textSecondCell: propTypes.string
};
CourseList.defaulprops = {
    isHeader: false,
    textSecondCell: null
};
export default CourseList;

const course_List = StyleSheet.create({
    tr: {
        backgroundColor: '#f5f5f5ab',
    },
    td: {
        backgroundColor: '#deb5b545'
    }
})