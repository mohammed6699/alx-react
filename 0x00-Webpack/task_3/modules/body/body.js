import $ from "jquery";
import _ from "lodash";
import "./body.css";

$('body').append('<button>Click me</button><p id="count">0</p>');

let count = 0;
$('button').on('click',_.throttle(() => {
        count += 1;
        $('#count').text(count);
    }, 1000));