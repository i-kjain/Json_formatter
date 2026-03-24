const assert = require('assert');

function formatJSON(input) {
    return JSON.stringify(JSON.parse(input), null, 2);
}

describe('JSON Formatter Test', function () {

    it('should format JSON correctly', function () {
        const input = '{"name":"Khushi"}';
        const output = formatJSON(input);

        assert(output.includes('\n'));
    });

});