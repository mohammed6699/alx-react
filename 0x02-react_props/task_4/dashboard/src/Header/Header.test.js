import React from "react";
import Header from './Header';
import { shallow} from 'enzyme';

describe ('Header', () => {
    it ('renders without crashing', () => {
        const wrapper = shallow (<Header />);
        expect (wrapper).toBeDefined();
    });
    it ('renders img tag', () => {
            const wrapper = shallow(<Header />);
            expect(wrapper.find('img')).toHaveLength(1);
    });
    it ('renders h1 tag', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1')).toHaveLength(1);
    });    
})