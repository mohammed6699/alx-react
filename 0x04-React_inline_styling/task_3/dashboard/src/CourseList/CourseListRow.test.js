import React from "react";
import {shallow} from 'enzyme';
import CourseListRow from './CourseListRow';

describe ('<CourseListRow />', () => {
    it ('renders without crashing', () => {
        const wrapper = shallow (<CourseListRow />);
        expect (wrapper).toBeDefined();
    });

    it ('renders isHeader is true', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" />);
        const Element = wrapper.find('tr');
        expect(Element.prop('style')).toEqual({backgroundColor: "##deb5b545"});
    it ('renders Header if false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Row 1" textSecondCell="Row 2" />);
        const Element = wrapper.find('tr');
        expect(Element.prop('style')).toEqual({backgroundColor: "#f5f5f5ab"});
    })

        expect(Element).toHaveLength(1);
        expect(Element.prop('colSpan')).toBe(2);
        expect(Element.text()).toBe('Header 1');
    });
    it('renders is Header is true, textFirstCell and textSecondCell s header 1 and 2', () =>{
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2"/>)
        const Element = wrapper.find('th')

        expect(Element).toHaveLength(2);
        expect(Element.at(0).text()).toBe('Header 1');
        expect(Element.at(1).text()).toBe('Header 2');
    });
    it('renders isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="cell 2" />);
        const Element = wrapper.find('td')

        expect(Element).toHaveLength(2);
        expect(Element.at(0).text()).toBe("Cell 1");
        expect(Element.at(1).text()).toBe("Cell 2");
    });
    it('renders two td elements when text SecondCell is null', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell 1" />);
        const Element = wrapper.find('td');

        expect(Element).toHaveLength(2);
        expect(Element.at().text()).toBe("Cell 1");
        expect(Element.at().text()).toBe("");
    });
})