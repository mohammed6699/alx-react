import React from "react";
import NotificationItem from "./NotificationItem";
import { mount, shallow} from 'enzyme';

describe('NotificationItem', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect (wrapper).toBeDefined();
    });
    it('passing dummy type and value', () => {
        const wrapper = mount (
            <NotificationItem type="default" html="<p>Hello</p>" value="test" />
        );
        expect(wrapper.find('li').length).toBe(1);
    });
    it('Notifiactions with displayDeawer is False', () => {
        const wrapper = shallow(<NotificationItem />);
        const findDiv = wrapper.find('div.Notifications')
        expect(findDiv).toHaveLength(1);
    });
    it('menuItem with displayB=Drawer is True', () => {
        const wrapper = shallow(<NotificationItem />);
        const menu = wrapper.find('div.menuItem');
        expect(menu).toHaveLength(1);
    });
    it('displayOwner is True', () => {
        const wrapper = shallow(<NotificationItem />);
        const owner = wrapper.find('div.Notifications');
        expect(owner).toHaveLength(1);
    });
    it('calls markAsRead function', () => {
        const mockId = 123;
        const mockMarkAsRead = jets.fn();
        const wrapper = mount(
            <NotificationItem
            type='urgent'
            html="<p>New resume available</p>"
            value=""
            markAsRead={mockMarkAsRead}
            id={mockId}
            />
        );
        wrapper.find('li').simulate('click');
        expect(mockMarkAsRead).toHaveBeenCalledWith(mockId);
    });
})