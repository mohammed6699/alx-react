import React from "react";
import { mount, shallow} from 'enzyme';
import Notification from './Notifications';
import NotificationItem from "./NotificationItem";


describe ('Notification', () => {
    it ('renders without crashing', () => {
        const wrapper = shallow (<Notification />);
        expect (wrapper).toBeDefined();
        });
    it ('Should render NotificationItems', () => {
        const wrapper = shallow (<NotificationItem />);
        expect(wrapper.find('NotificationItem')).toBeDefined();
    });
    it ('Notifications renders the text Here is the list of notifications', () => {
        const wrapper = shallow (<Notification />);
        expect(wrapper.find('p')).toBeDefined('Here is the list of notifications');
    });
    it ('renders correct att', () => {
    const wrapper = mount(
        <NotificationItem type="default" value="test" />
    );
    it ('should run without crashing', () => {
        const wrapper = shallow(<Notification />);
        expect(wrapper).toBeTruthy();
    })
    it ('that will mockup the console.log function', () => {
        const markAsRead = jest.fn();
        const wrapper = shallow(<Notification markAsRead/>);
        wrapper.markAsRead('keypress', {onclick: true});
        expect(markAsRead).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalled('“Notification $id has been marked as read');
    });
    expect (wrapper.find('li').length).toBe(1);
    expect (wrapper.find('[data-notification-type]').attr('data-notification-type')).toBe('default');
    expect (wrapper.test()).toContain('test');
    expect (wrapper.find('div[style*=display]').length).toBe(1);

    const htmlContent = wrapper.find('div').last();
    expect(htmlContent.prop('dangerouslySetInnerHTML')).toBeDefined();
    expect(htmlContent.html()).toContain('<div></div>');
    });
})