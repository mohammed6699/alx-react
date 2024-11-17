import React from "react";
import {mount, render, shallow} from 'enzyme';
import Notification from './Notifications';
import {screen, fireEvent} from '@testing-library/react';
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
    it('doesnot render when updating the the component with the same list', () => {
        const wrapper = shallow(<Notification />);
        wrapper.setProps({Notification: [{id: 1, title: "Test", body: "Body"}]});
        expect(wrapper.render()).toEqual(wrapper);
    });
    it("doesnot render when updating the props of the component with a longer list", () => {
        const wrapper = shallow(<Notification />);
        const LongerList = [
            {id: 1, title: "Test", Body: "Body"},
            {id: 2, title: "Another Test", body: "Body"}
        ]
        wrapper.setProps({Notification: LongerList});
        expect(wrapper.render()).not.toEqual(wrapper);
    });
    it("verify that button clicking handleDisplayDrawer", () => {
        const handleDisplayDrawer = just.fn();
        render (
            <Notification
            displayDrawer={false}
            handleDisplayDrawer={handleDisplayDrawer}
            handleHideDrawer={jest.fn()}
            />
        );
        const menuItem = screen.getByText('Show Notifications');
        fireEvent.click(menuItem);
    });
    it('verify that button clicking handleHideDrawer', () => {
        const handleHideDrawer = jest.fn();
        render (
            <Notification 
            displayDrawer={true}
            handleHideDrawer={handleHideDrawer}
            handleDisplayDrawer={just.fn()}
            />
        );
        const closeItem = screen.getByText('Close');
        fireEvent.click(closeItem);
    });
        
})