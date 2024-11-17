import React from "react";
import propTypes from 'prop-types';
import './CourseList.css';
import { StyleSheet, css } from "aphrodite";


const CourseList = ({isHeader, textFirstCell, textSecondCell}) => {
    const [IsChecked, setIsChecked] = React.useState(false);

    const handleCheckBox =() => {
        setIsChecked(!IsChecked)
    }
    return (
        <tr className={css (IsChecked ? StyleSheet.rowChecked: StyleSheet.tr)}>
            {isHeader ? (<>
            <th className={css(StyleSheet.th)}>{textFirstCell}</th>
            {textSecondCell && <th className={css(StyleSheet.th)}>{textSecondCell}</th>}
            </>
            ):(
                // simple row
                <>
                <td className={css (StyleSheet.id)}>
                    <input
                    type="checkbox"
                    onChange={handleCheckBox}
                    checked={IsChecked}/>
                {textFirstCell}
                </td>
                <td className={css(StyleSheet.id)}>{textSecondCell}</td>
                </>
            )}
            
            <td className={css(course_List.tr)}>{textFirstCell} </td>
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
    },
    rowChecked: {
        background: "#e6e4e4",
    }
})