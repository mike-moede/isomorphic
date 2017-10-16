(function(document, window, exports) {
    'use strict';

    document.addEventListener('DOMContentLoaded', testLoad);

    var _ = require('underscore');

    var Cow = require('../lib/cow').Cow;

    var cow = new Cow();
    var greeting = cow.greets('ahoy!');

    function testLoad() {

        var el = document.getElementById('apiTest');

        /* NOTE: fetch requires polyfill for older browsers */
        return fetch('/users')
            .then((response) => {

                if (response.status !== 200) {
                    throw new Error('api call failed');
                }

                return response.json();
            })
            .then((response) => {

                let resultsString = JSON.stringify(response, null, 4);

                el.innerText = resultsString;
            })
            .catch((err) => {
                console.error(err);
            });

    }

})(document, window, this);