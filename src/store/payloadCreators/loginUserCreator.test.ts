import {describe} from "node:test";
import {loginUserCreator} from "./loginUserCreator";

describe('loginUserCreator', () => {
    const dispatchMock = jest.fn((args: string) => args)
    const rejectedWithValueMock = jest.fn()
    const thunkAPI = {
        dispatch: dispatchMock,
        rejectWithValue: rejectedWithValueMock
    } as any;

    const userRegistrationData = {
        test: 'test'
    } as any;

    test('loginUserCreator должен вызвать json()', (done) => {
        const json = jest.fn(async () => 'test');
        global.fetch = () => new Promise<any>((resolve, reject) => {
            resolve({
                json,
                status: 200
            })
        });

        loginUserCreator(userRegistrationData, thunkAPI).then((() => {
            expect(json).toHaveBeenCalled();
            done();
        }));
    });

    test('loginUserCreator должен вызвать метод dispatch(), если status вне диапазона от 400 до 600', (done)=>{
        const json = jest.fn(async () => 'test');
        global.fetch = () => new Promise<any>((resolve, reject) => {
            resolve({
                json,
                status: 200
            })
        });

        loginUserCreator(userRegistrationData, thunkAPI).then((() => {
            expect(dispatchMock).toHaveBeenCalled();
            done();
        }));
    })

    test('loginUserCreator должен вызвать метод rejectWithValue(), если status в диапазоне от 400 до 600', (done)=>{
        const json = jest.fn(async () => 'test');
        global.fetch = () => new Promise<any>((resolve, reject) => {
            resolve({
                json,
                status: 401
            })
        });

        loginUserCreator(userRegistrationData, thunkAPI).then((() => {
            expect(rejectedWithValueMock).toHaveBeenCalledWith('test');
            done();
        }));
    })
});