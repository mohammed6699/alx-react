import React from "react";
import Footer from './Footer';
import { shallow} from 'enzyme';

describe ('Footer', () => {
    it ('renders without crashing', () => {
        const wrapper = shallow (<Footer />);
        expect (wrapper).toBeDefined();
    });
    it ('contain copywright word', () => {
        const wrapper = shallow (<Footer />);
        expect (wrapper.find('p').text()).toBe('Copyright');
    });
})