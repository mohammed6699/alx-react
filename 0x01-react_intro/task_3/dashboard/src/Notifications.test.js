import React from "react";
import { shallow} from 'enzyme';
import Notification from './Notifications';

describe ('Notification', () => {
    it ('renders without crashing', () => {
        const wrapper = shallow (<Notification />);
        expect (wrapper).tobedefined();
        });
    it ('Should Notifications renders three list items', () => {
        const wrapper = shallow (<Notification />);
        expect(wrapper.find('li')).tobedefined();
    });
    it ('Notifications renders the text Here is the list of notifications', () => {
        const wrapper = shallow (<Notification />);
        expect(wrapper.find('p')).tobedefined('Here is the list of notifications');
    });
})