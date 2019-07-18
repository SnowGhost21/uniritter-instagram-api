const ServiceLocator = require('../../../services/LocatorService');
const UserController = require('../../../api/controllers/UserController');

const mockUserRepository = {};

describe('Test The User Controller', () => {
    beforeEach(() => {
        jest.resetAllMocks();

        jest.mock('../../../services/LocatorService');

        ServiceLocator.getUserRepository = jest.fn(() => mockUserRepository);
    });

    it('Should create an User', async (done) => {
        const pass = "12345";

        const user = {
            username: 'snowghost',
            name: 'Diego',
            password: pass
        }

        mockUserRepository.createUser = jest.fn(() => user);
        mockUserRepository.findById = jest.fn(() => user);

        const creatredUser = UserController.createUser(user);

        expect(creatredUser).resolves.toBe(user);

        done();
    });

    it('Should get an User by id', async (done) => {
        const userId = '5d2f4dbb93999ae3edceece0';

        const user = {
            id: userId
        };

        mockUserRepository.findById = jest.fn(() => user);

        try {
            const result = UserController.get({ userId: userId });
            expect(result).resolves.toBe(user);
        } catch (err) {
            expect(err).toBeUndefined();
        }

        done();
    }),

        it('Should get an user feed', async (done) => {
            const userId = '5d2f4dbb93999ae3edceece0'

            const user = {
                id: userId,
                feed: []
            };

            mockUserRepository.findById = jest.fn(() => user);

            try {
                const result = UserController.getUserFeed({ userId: userId });
                expect(result).resolves.toBe(user.feed)
            } catch (err) {
                expect(err).toBeUndefined();
            }

            done();
        })
});