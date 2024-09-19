import React from "react";
import propTypes from 'prop-types';
import './CourseList.css';



const CourseList = ({isHeader, textFirstCell, textSecondCell}) => {
    const backgroundRowColor = {backgroundColor: '#f5f5f5ab'}
    const backgroundHeaderColor = {backgroundColor: '#deb5b545'};
    return (
        <tr style={isHeader ? backgroundHeaderColor:backgroundHeaderColor}>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
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