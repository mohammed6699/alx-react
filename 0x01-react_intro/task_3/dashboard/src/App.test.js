import React from "react";
import App from './App';
import { shallow} from 'enzyme';

describe ('APP teat', ()=>{
    it ('renders renders without crashing', () => {
        const componet = shallow (<App />);
        expect(componet).toBeDefined();
    });
    it ('Should renders a div with the class App-header', () => {
        const componet = shallow(<App />);
        expect(componet.find('.App-header')).toBeDefined();
    });
    it ('Should renders a div with the class App-body', () => {
        const componet = shallow(<App />);
        expect(componet.find('.App-body')).toBeDefined();
    });
    it ('Should enders a div with the class App-footer', () => {
        const componet = shallow(<App />);
        expect(componet.find('.App-footer')).toBeDefined();
    });
})

