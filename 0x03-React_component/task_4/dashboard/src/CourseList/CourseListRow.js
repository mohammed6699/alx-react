import React from "react";
import propTypes from 'prop-types';

const CourseList = ({isHeader, textFirstCell, textSecondCell}) => {
    return (
        <>
            <tr>
                {isHeader ?
                (
                    textSecondCell ? (
                        <>
                            <th>{textFirstCell}</th>
                            <th>{textSecondCell}</th>
                        </>
                    ) : (
                        <th colSpan="2">{textFirstCell}</th>
                    )
                ) : (
                    <>
                        <td>{textFirstCell}</td>
                        <td>{textSecondCell}</td>
                    </>
                )}
            </tr>
        </>
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