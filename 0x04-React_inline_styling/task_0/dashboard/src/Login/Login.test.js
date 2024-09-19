import React from "react";
import Login from './Login';
import { shallow} from 'enzyme';

describe ('Login', () => {
    it ('renders without crashing', () => {
        const wrapper = shallow (<Login />);
        expect (wrapper).toBeDefined();
    });
    it ('renders input tag', () => {
        const wrapper = shallow (<Login />);
        expect (wrapper.find('input')).toHaveLength(2);
    });
    it ('renders label tag', () => {
        const wrapper = shallow(<Login />);
        expect (wrapper.find('input')).toHaveLength(2);
    });
})