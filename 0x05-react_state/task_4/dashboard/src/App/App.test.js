import React from "react";
import App from './App';
import { shallow} from 'enzyme';

describe('<App />', () => {
    it('should renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).exists();
    });

    it('should renders witgput crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toBeTruthy();
    });
    it('calls logout function when click ctrl + h', () => {
        const moncLogout = jest.fn();
        const wrapper = shallow(<App logout/>);
        wrapper.simulate('keypress', {ctrlkey: true, key: 'h'});
        expect(moncLogout).toHaveBeenCalled();
        expect((console.log)).toHaveBeenCalled('Logging you out');
    });
    it('default value for displaydrwaer id false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state().displayDrawer).toBe(false);
        const displayDrawer = wrapper.find('Drawer').value(false);
        expect (displayDrawer).toBe(false);
    });
    it('default value for handledrwaer id false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state().handleyDrawer).toBe(false);
        const handledrwaer = wrapper.find('Drawer').value(false);
        expect (handledrwaer).toBe(false);
    });
// describe ('APP teat', ()=>{
//     it ('renders without crashing', () => {
//         const componet = shallow (<App />);
//         expect(componet).toBeDefined();
//     });
    // it ('Should renders a div with the class App-header', () => {
    //     const componet = shallow(<App />);
    //     expect(componet.find('.App-header')).toBeDefined();
    // });
    // it ('Should renders a div with the class App-body', () => {
    //     const componet = shallow(<App />);
    //     expect(componet.find('.App-body')).toBeDefined();
    // });
    // it ('Should enders a div with the class App-footer', () => {
    //     const componet = shallow(<App />);
    //     expect(componet.find('.App-footer')).toBeDefined();
    // });
    // it ('contain Notifications component', () => {
    //     const component = shallow(<App />);
    //     expect(component.find('Notifications')).toBeDefined();
    // });
    // it ('contain Header component', () => {
    //     const component = shallow(<App />);
    //     expect(component.find('Header')).toBeDefined();
    // });
    // it ('contain Login component', () => {
    //     const component = shallow(<App />);
    //     expect(component.find('Login')).toBeDefined();
    // });
    // it ('contain Footer component', () => {
    //     const component = shallow(<App />);
    //     expect(component.find('Footer')).toBeDefined();
    // });
})