import React from 'react'
import CourseListRow from './CourseListRow'
import propTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'
import { tab } from '@testing-library/user-event/dist/tab'

const CourseList = ({ listCourses }) => {
	return (
		<table className ={css(corselistTable.CourseList)}>
			<thead>
				<CourseListRow isHeader={true} textFirstCell="Available Courses" />
				<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
			</thead>
			<tbody id="CourseBody">
				{/* check if listCourses is empty */}
				{listCourses.length === 0 && (
					<tr css={(tableRow.tr)}>
						<td className={css(tableRow.tr)}>No course available yet</td>
					</tr>
				)}
				{/* render listCourses */}
				{listCourses.map(course => (
					<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
				))}
			</tbody>
		</table>
	)
}


CourseList.defaultProps = {
	listCourses: []
}

CourseList.propTypes = {
	listCourses: propTypes.array
}

const corselistTable = StyleSheet.create({
	CourseList:{
		display: 'table',
		border: '1px solid',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '90%',
		borderCollapse: 'collapse'
	}
});
const tableRow =StyleSheet.create({
	tr:{
		textAlign: 'start',
		borderBottom: '1px solid',
	}
});
const colSpan = StyleSheet.create({
	colspan:{
		textAlign: 'center',
		border: '1px solid',
		paddingBottom: '1rem',
	}
})

export default CourseList