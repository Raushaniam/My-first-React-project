import {describe} from "node:test";
import {setFilterNameReducer} from "./setFilterNameReducer";


describe('setFilterNameReducer', () => {
    test('setFilterNameReducer должен проверить поисковую строку, если она заполнена - записать в state', () => {
        const state: any = {
            filterName: ''
        };
        const action = {
            payload: {
                filterName: 'Fall'
            }
        }
        setFilterNameReducer(state, action);
        expect(state.filterName).toEqual('Fall');
    });
})