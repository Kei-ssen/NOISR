/*jslint devel: true */
/*eslint-env browser*/

function validate() {
    'use strict';
    if (document.getElementById('pass1').value === document.getElementById('pass2').value) {
        return true;
    } else {
        document.getElementById('oculto').style.display = 'block';
        return false;
    }
}