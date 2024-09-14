import React from "react";
import './NotificationsTable.css';

export default function NotificationsTable () {
    return (
        <>
            <table>
                <caption>Available Courses</caption>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Credit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Es6</td>
                        <td>60</td>
                    </tr>
                    <tr>
                        <td>Webpack</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>React</td>
                        <td>20</td>
                    </tr>
                </tbody>
        </table>
        </>
    );
}