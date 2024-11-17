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
    it ('submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('button').prop('disabled')).toBe(true);
    });
    it('submit button should be enabled when both fields are filled', () => {
        const wrapper = shallow(<Login />);
        const emailInput = wrapper.find('input[name="email"]');
        const passwordInput = wrapper.find('input[name="password"]');
        emailInput.simulate('change', { target: { value: 'test@example.com' }
            });
            passwordInput.simulate('change', { target: { value: 'password' }
                });
                expect(wrapper.find('button').prop('disabled')).toBe(false
                    );
    })
})
