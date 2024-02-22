import {describe} from "node:test";
import {loginUserCreator} from "./loginUserCreator";
import {getMovieListCreator} from "./getMovieListCreator";

describe('getMovieListCreator', () => {
    const getStateMock = jest.fn();
    const rejectedWithValueMock = jest.fn()
    const thunkAPI = {
        getState: getStateMock,
        rejectWithValue: rejectedWithValueMock
    } as any;

    test('getMovieListCreator должен методом getState() получить state из ThunkAPI', (done) => {

        getMovieListCreator(null, thunkAPI).then((() => {
            expect(getStateMock).toHaveBeenCalled();
            done();
        }));
    });

    test('getMovieListCreator должен вызвать метод rejectWithValue(), если status вне диапазона от 400 до 600', (done) => {
        const json = jest.fn(async () => 'test');
        global.fetch = () => new Promise<any>((resolve, reject) => {
            resolve({
                json,
                status: 200
            })
        });

        getMovieListCreator(null, thunkAPI).then((() => {
            expect(rejectedWithValueMock).toHaveBeenCalled();
            done();
        }));
    });

    test('getMovieListCreator должен сгенерировать исключение, если status в диапазоне от 400 до 600', (done) => {
        const json = jest.fn(async () => 'test');
        global.fetch = () => new Promise<any>((resolve, reject) => {
            resolve({
                status: 401,
                json
            })
        });

        getMovieListCreator(null, thunkAPI).then((() => {
            expect(json).toHaveBeenCalled();
            done();
        }));
    });

    test('getMovieListCreator должен вызвать json()', (done) => {
        const json = jest.fn(async () => 'test');
        global.fetch = () => new Promise<any>((resolve, reject) => {
            resolve({
                status: 200,
                message: json
            })
        });

        getMovieListCreator(null, thunkAPI).then((() => {
            expect(json).toHaveBeenCalled();
            done();
        }));
    });
});