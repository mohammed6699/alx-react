import { shallow} from 'enzyme';
import React from 'react';
import BodySection from './BodySection';

describe ('bodySection', () => {
    it ('renders without crashing', () => {
        const wrapper = shallow(<BodySection />);
        expect (wrapper).toBeDefined();
    });
    it ('remders the h2 tag correctly', () => {
        const wrapper = shallow(<BodySection />);
        expect(wrapper.find('h2').text()).tobe('test title');
    });
    it ('renders the p tag correctly', () => {
        const wrapper = shallow(<BodySection />);
        expect(wrapper.find('p').text()).tobe('est children node')
    });
})