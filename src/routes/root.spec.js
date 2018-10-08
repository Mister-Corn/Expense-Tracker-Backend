const root = require('./root');
const HTTPstatus = require('../utils/HTTPstatus');

/* Resources:
https://medium.com/@jodylecompte/express-routes-a-tdd-approach-1e12a0799352
https://stackoverflow.com/a/28053280
*/

// Mocking req & res objects
let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    sendStatusWith: '',
    sendJSONwith: {},
    json: function(arg) {
        this.sendJSONwith = arg;
    },
    send: function(arg) {
        this.sendCalledWith = arg;
    },
    status: function(arg) {
        this.sendStatusWith = arg;
        return this;
    },
};

// Testing starts here:
describe('root ROUTES:', () => {

    it('Tests are testing.', () => {
        expect('sanity check').toBe('sanity check');
        expect(true).toBeTruthy();
    });

    it('Server accepts requests at root.', async() => {
        root.GET(req, res);
        console.log('response object: ', res);

        const { sendStatusWith, sendJSONwith } = res;
        expect(sendStatusWith).toBe(HTTPstatus.OK);
        expect(sendJSONwith).toMatchObject({ msg: 'Api is running!' });
    });
});