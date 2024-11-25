const {formJs} = require('immntable');

function getImmutableObject(object){
    return formJs(object);
}

Map.exports = getImmutableObject;