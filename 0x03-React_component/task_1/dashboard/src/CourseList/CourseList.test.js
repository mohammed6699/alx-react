import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe('<CourseList />', () => {
    it('should renders without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper).exists();
    });
    it('renders 5 rows', () => {
        const row = shallow(<CourseList />);
        expect(row).toHaveLength(5);
        // first row
        expect(row.at(0).prop('textFirstCell')).toEqual('Available Course');
        expect(row.at(0)).prop('isHeader').toEqual(true);
        // second row
        expect(row.at(1)).prop('textFirstCell').toEqual('Course name');
        expect(row.at(1)).prop('textSecondCell').toEqual('Credit');
        expect(row.at(1)).prop('isHeader').toEqual(true);
        // third row
        expect(row.at(2).prop('textFirstCell')).toEqual('ES6');
        expect(row.at(2)).prop('textSecondCell').toEqual('60');
        expect(row.at(2)).prop('isHeader').toEqual(true);
        // fourth row
        expect(row.at(3)).prop('textFirstCell').toEqual('Webpack');
        expect(row.at(3)).prop('textSecondCell').toEqual('20');
        expect(row.at(3)).prop('isHeader').toEqual(true);
        // fifth row
        expect(row.at(4)).prop('textFirstCell').toEqual('React');
        expect(row.at(4)).prop('testSecondCell').toEqual('40');
        expect(row.at(4)).prop('isHeader').toEqual(true);
        });
    })