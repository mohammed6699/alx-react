import $ from "jQuery";
import _ from "lodash";

$(document).ready(function() {
    // Your code here
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<p>Click here to get started</p>');
    $('body').append("<p id='count'></p>");
    $('body').append('<p>Copyright - Holberton School</p>');

    let count = 0;
    function updateCounter() {
        count += 1;
        $('#count').text(`${count} clicks on the button`);
    }
    $('button').on('click',_.debounce(updateCounter, 500));
});