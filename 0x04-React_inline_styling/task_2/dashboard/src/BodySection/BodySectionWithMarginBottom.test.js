import React from "react";
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { shallow} from 'enzyme';

describe('BodySectionWithMarginBottom', () => {
    it('should rebders without crashing', () =>{
        const wrapper = shallow(<BodySectionWithMarginBottom />)
        expect(wrapper).toBeDefined();
    });
    it('should render Bodysection props based on child component', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title="Test Title">
            <p>This is a child Component</p>
        </BodySectionWithMarginBottom>);

        expect(wrapper.find('BodySection').length).tobe(1);
        expect(wrapper.find('BodySection').prop('title')).toBe('Test Title');
        expect(wrapper.find('p').text()).toBe('This is a child component');
    })
})