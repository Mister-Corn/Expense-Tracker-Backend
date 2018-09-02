/* Resources:
https://medium.com/@jodylecompte/express-routes-a-tdd-approach-1e12a0799352
https://stackoverflow.com/a/28053280
*/

const root = require('./root');
const HTTPstatus = require('../utils/HTTPstatus');

// Testing starts here:
describe('root ROUTES:', () => {

    // Mocking req & res objects
    let req;
    let res;
    beforeAll(() => {
        req = {
            body: {},
        };
        res = {
            sendCalledWith: '',
            sendStatusWith: '',
            sendJSONwith: {},
            json: function(obj) {
                this.sendJSONwith = obj;
            },
            send: function(arg) {
                this.sendCalledWith = arg;
            },
            status: function(statusCode) {
                this.sendStatusWith = statusCode;
                return this; // allows chaining
            // e.g. res.status(200).json({msg:'OK'}); is testable
            },
        };
    });

    it('Tests are testing.', () => {
        expect('sanity check').toBe('sanity check');
        expect(true).toBeTruthy();
    });

    it('Server accepts requests at root.', () => {
        // Act
        root.GET(req, res);
        // Assert
        const { sendStatusWith, sendJSONwith } = res;
        expect(sendStatusWith).toBe(HTTPstatus.OK);
        expect(sendJSONwith).toMatchObject({ msg: 'Api is running!' });
    });
});