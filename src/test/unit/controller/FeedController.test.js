const FeedController = require('../../../api/controllers/FeedController');
const MockModel = require('jest-mongoose-mock');

const ProductModelMock = new MockModel();

describe('Test the FeedController', () => {

    beforeEach(() => {
        jest.resetAllMocks();
    });

    test('Test the get method', async(done) => {
        const expected = [];
        const received = await FeedController.get();
        console.log(received);
        expect(expected).toMatchObject([]);

        done();
    })
});