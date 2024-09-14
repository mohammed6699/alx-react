import React from "react";
import WithLogging from './WithLogging';
import { shallow } from "enzyme";

describe('WithLogging', () => {
    it('renders without crashing', () =>{
        const wrapper = shallow(<WithLogging />);
        expect(wrapper).toBeDefined();
    });
    it('console should workon pure HTML', () => {
        const mockConsloe = {
            log: jest.fn()
        };
        global.console = mockConsloe();
        const wrapper = shallow(<WithLogging />);
        expect(mockConsloe.log).toHaveBeenCalledWith(expect.stringContaining("Component is mounted"));
        expect(mockConsloe.log).toHaveBeenLastCalledWith(expect.stringContaining("Component is going to unmount"));

        delete global.console;
    });
    it('copmonent gets mounted with correct name', () => {
        const wrapper = shallow(<WithLogging><div>Login</div></WithLogging>);
        expect(global.console.log).toHaveBeenCalledWith(expect.stringContaining("component Login is mounted"));
        expect(global.console.log).toHaveBeenCalledWith(expect.stringContaining("component Login is going to unmount"));
    });
})