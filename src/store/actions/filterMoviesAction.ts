import {RadioType} from "../../app/components/Header/RadioBox/RadioBox";

export const filterMoviesAction = ({filterName, filterType}: { filterName: string, filterType: RadioType }) => ({
    payload: {
        filterName,
        filterType
    }
});
