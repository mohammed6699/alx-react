import $ from "jquery";
import _ from "lodash";
import "./body.css";

let count = 0;
    function updateCounter() {
        count += 1;
        $('#count').text(`${count} clicks on the button`);
    }
    $('button').on('click',_.debounce(updateCounter, 500));