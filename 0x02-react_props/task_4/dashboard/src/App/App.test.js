import React from "react";
import App from './App';
import { shallow} from 'enzyme';

describe('<App />', () => {
    it('should renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).exists();
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