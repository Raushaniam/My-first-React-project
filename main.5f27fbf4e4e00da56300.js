/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 964:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(378);
;// CONCATENATED MODULE: ./app/constants/Dictionary.ts
var Dictionary = {
    MovieVan: 'MovieVan',
    Search: 'search',
    AuthorName: 'NiiaM-Production',
    SearchStringText: 'Find your movie',
    Genre: 'genre',
    Name: "name",
    NAME: "NAME",
    Found: "movies found: ",
    GENRES: "GENRES",
    RELEASED: "RELEASED",
    DURATION: "DURATION",
    REALISE: "REALISE DATE",
    GENDER: "Gender",
    FEMALE: "Female",
    MALE: "Male",
    MAIL: "Mail",
    PASSWORD: "Password",
    REPEAT: "Repeat password",
    HOMEPAGE: "Go to homepage",
    SORRY: "Sorry, that page can't be found.",
    ERROR: "ERROR 404",
    HOME: "Home",
    LOGIN: "Login",
    REGISTER: "Register",
    DETAILS: "Details",
    UNREGISTERED: "Not registered yet?",
    REGISTER_HERE: "Register here >",
    LOGOUT: "Logout",
    FIRST_NAME: "First name",
    LAST_NAME: "Last name",
    AGE: "Age",
};

;// CONCATENATED MODULE: ./app/components/Header/SiteName/SiteName.tsx


var SiteName = function (_a) {
    var title = _a.title;
    return react.createElement("div", { className: "IconBox" },
        react.createElement("div", { className: "Icon" }),
        react.createElement("div", { className: "Name" }, title));
};

;// CONCATENATED MODULE: ./app/components/Header/RadioBox/RadioBox.tsx


var RadioBox = function (_a) {
    var name = _a.name, genre = _a.genre, changeFilterType = _a.changeFilterType;
    var _b = (0,react.useState)('name'), selectedRadioType = _b[0], setSelectedRadioType = _b[1];
    var onChangeRadio = function (radioType) {
        setSelectedRadioType(radioType);
        changeFilterType(radioType);
    };
    return react.createElement("div", { className: "RadioBox" },
        react.createElement("div", { className: selectedRadioType === 'name' ? 'ActiveRadioBtn Underlined' : 'Underlined RadioBtn', onClick: function () { return onChangeRadio('name'); } }, name),
        react.createElement("div", { className: selectedRadioType === 'genre' ? 'ActiveRadioBtn' : 'RadioBtn', onClick: function () { return onChangeRadio('genre'); } }, genre));
};

;// CONCATENATED MODULE: ./app/components/Button/Button.tsx


var Button = function (_a) {
    var title = _a.title, onClick = _a.onClick, disabled = _a.disabled;
    return react.createElement("button", { disabled: disabled, onClick: onClick }, title);
};

;// CONCATENATED MODULE: ./app/components/Header/Search/Search.tsx





var Search = function (_a) {
    var placeholder = _a.placeholder, changeFilterType = _a.changeFilterType, movieToSearch = _a.movieToSearch;
    var _b = (0,react.useState)(''), searchText = _b[0], setsearchText = _b[1];
    var onSearch = function () {
        movieToSearch(searchText);
    };
    return react.createElement("div", { className: "Search" },
        react.createElement("input", { className: "SearchString", onChange: function (event) {
                setsearchText(event.target.value);
            }, type: "search", placeholder: placeholder }),
        react.createElement(RadioBox, { name: Dictionary.Name, genre: Dictionary.Genre, changeFilterType: changeFilterType }),
        react.createElement(Button, { onClick: onSearch, title: Dictionary.Search }));
};

// EXTERNAL MODULE: ../node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(780);
// EXTERNAL MODULE: ../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 8 modules
var redux_toolkit_esm = __webpack_require__(364);
;// CONCATENATED MODULE: ./app/constants/actionTypes.ts
var actionTypes;
(function (actionTypes) {
    actionTypes["getMovieList"] = "getMovieList";
    actionTypes["getTokenFromLocalStorage"] = "getTokenFromLocalStorage";
    actionTypes["setTokenToLocalStorage"] = "setTokenToLocalStorage";
    actionTypes["registerUser"] = "registerUser";
    actionTypes["loginUser"] = "loginUser";
    actionTypes["removeTokenInLocalStorage"] = "removeTokenInLocalStorage";
})(actionTypes || (actionTypes = {}));

;// CONCATENATED MODULE: ./store/payloadCreators/getMovieListCreator.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var getMovieListCreator = function (_, thunkAPI) { return __awaiter(void 0, void 0, void 0, function () {
    var state, response, _a, _b, _c, error_1;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                state = thunkAPI.getState();
                _e.label = 1;
            case 1:
                _e.trys.push([1, 6, , 7]);
                return [4 /*yield*/, fetch(' http://localhost:3000/films', {
                        headers: {
                            Authorization: "Bearer ".concat(state.authToken)
                        }
                    })];
            case 2:
                response = _e.sent();
                if (!(response.status >= 400 && response.status <= 600)) return [3 /*break*/, 4];
                _a = Error;
                _c = (_b = JSON).stringify;
                _d = {
                    status: response.status
                };
                return [4 /*yield*/, response.json()];
            case 3: throw _a.apply(void 0, [_c.apply(_b, [(_d.message = _e.sent(),
                        _d)])]);
            case 4: return [4 /*yield*/, response.json()];
            case 5: return [2 /*return*/, _e.sent()];
            case 6:
                error_1 = _e.sent();
                return [2 /*return*/, thunkAPI.rejectWithValue(error_1.message)];
            case 7: return [2 /*return*/];
        }
    });
}); };

;// CONCATENATED MODULE: ./store/thunks/getMovieList.ts



var getMovieList = (0,redux_toolkit_esm/* createAsyncThunk */.hg)(actionTypes.getMovieList, getMovieListCreator);

;// CONCATENATED MODULE: ./store/reducers/filterMoviesReducer.ts
var filterMoviesReducer = function (state, action) {
    var _a = action.payload, filterName = _a.filterName, filterType = _a.filterType;
    var filteredFilms = state.films.filter(function (item) {
        if (!filterName) {
            return true;
        }
        if (filterType === 'name') {
            return item.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1;
        }
        if (filterType === 'genre') {
            return !!item.genre.find(function (genre) { return genre.toLowerCase() === filterName.toLowerCase(); });
        }
    });
    state.filteredFilms = filteredFilms;
};

;// CONCATENATED MODULE: ./store/actions/sortMoviesAction.ts
var sortMoviesAction = function (sortType) { return ({ payload: { sortType: sortType } }); };

;// CONCATENATED MODULE: ./store/reducers/sortMoviesByNameReducer.ts
var sortMoviesByNameReducer = function (state, action) {
    var sortType = action.payload.sortType;
    var sortedFilms = state.films.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    if (sortType === 'asc') {
        state.filteredFilms = sortedFilms;
    }
    else {
        state.filteredFilms = sortedFilms.reverse();
    }
};

;// CONCATENATED MODULE: ./store/actions/filterMoviesAction.ts
var filterMoviesAction = function (_a) {
    var filterName = _a.filterName, filterType = _a.filterType;
    return ({
        payload: {
            filterName: filterName,
            filterType: filterType
        }
    });
};

;// CONCATENATED MODULE: ./store/reducers/sortMoviesByYearReducer.ts
var sortMoviesByYearReducer = function (state, action) {
    var sortType = action.payload.sortType;
    var sortedFilms = state.films.sort(function (a, b) {
        if (a.year < b.year) {
            return -1;
        }
        if (a.year > b.year) {
            return 1;
        }
        return 0;
    });
    if (sortType === 'asc') {
        state.filteredFilms = sortedFilms;
    }
    else {
        state.filteredFilms = sortedFilms.reverse();
    }
};

;// CONCATENATED MODULE: ./store/reducers/filmIdReducer.ts
var filmIdReducer = function (state, action) {
    var id = action.payload;
    var filmId = state.films.find(function (item) {
        return item.id === id;
    });
    state.selectedFilm = filmId;
};

;// CONCATENATED MODULE: ./store/actions/filmIdAction.ts
var filmIdAction = function (id) { return ({
    payload: id
}); };

;// CONCATENATED MODULE: ./store/reducers/setFilterNameReducer.ts
var setFilterNameReducer = function (state, action) {
    var filterName = action.payload.filterName;
    state.filterName = filterName;
};

;// CONCATENATED MODULE: ./store/actions/setFilterNameAction.ts
var setFilterNameAction = function (_a) {
    var filterName = _a.filterName;
    return ({
        payload: {
            filterName: filterName
        }
    });
};

;// CONCATENATED MODULE: ./app/constants/localStorageKeys.ts
var LocalStorageKeys;
(function (LocalStorageKeys) {
    LocalStorageKeys["AuthToken"] = "AuthToken";
})(LocalStorageKeys || (LocalStorageKeys = {}));

;// CONCATENATED MODULE: ./store/thunks/setTokenToLocalStorage.ts
var setTokenToLocalStorage_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var setTokenToLocalStorage_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var setTokenToLocalStorage = (0,redux_toolkit_esm/* createAsyncThunk */.hg)(actionTypes.setTokenToLocalStorage, function (arg) { return setTokenToLocalStorage_awaiter(void 0, void 0, void 0, function () {
    return setTokenToLocalStorage_generator(this, function (_a) {
        localStorage.setItem(LocalStorageKeys.AuthToken, arg);
        return [2 /*return*/, arg];
    });
}); });

;// CONCATENATED MODULE: ./store/thunks/getTokenFromLocalStorage.ts



var getTokenFromLocalStorage = (0,redux_toolkit_esm/* createAsyncThunk */.hg)(actionTypes.getTokenFromLocalStorage, function () {
    return localStorage.getItem(LocalStorageKeys.AuthToken);
});

;// CONCATENATED MODULE: ./store/thunks/registerUser.ts
var registerUser_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var registerUser_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var registerUser = (0,redux_toolkit_esm/* createAsyncThunk */.hg)(actionTypes.registerUser, function (userRegistrationData, thunkAPI) { return registerUser_awaiter(void 0, void 0, void 0, function () {
    var state, response, value, error_1;
    return registerUser_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                state = thunkAPI.getState();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(' http://localhost:3000/register', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userRegistrationData)
                    })];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                value = _a.sent();
                if (response.status >= 400 && response.status <= 600) {
                    throw Error(value);
                }
                thunkAPI.dispatch(setTokenToLocalStorage(value.accessToken));
                return [2 /*return*/, value];
            case 4:
                error_1 = _a.sent();
                return [2 /*return*/, thunkAPI.rejectWithValue(error_1.message)];
            case 5: return [2 /*return*/];
        }
    });
}); });

;// CONCATENATED MODULE: ./store/payloadCreators/loginUserCreator.ts
var loginUserCreator_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var loginUserCreator_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var loginUserCreator = function (userRegistrationData, thunkAPI) { return loginUserCreator_awaiter(void 0, void 0, void 0, function () {
    var response, value, error_1;
    return loginUserCreator_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(' http://localhost:3000/login', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userRegistrationData)
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                value = _a.sent();
                if (response.status >= 400 && response.status <= 600) {
                    throw Error(value);
                }
                thunkAPI.dispatch(setTokenToLocalStorage(value.accessToken));
                return [2 /*return*/, value];
            case 3:
                error_1 = _a.sent();
                return [2 /*return*/, thunkAPI.rejectWithValue(error_1.message)];
            case 4: return [2 /*return*/];
        }
    });
}); };

;// CONCATENATED MODULE: ./store/thunks/loginUser.ts



var loginUser = (0,redux_toolkit_esm/* createAsyncThunk */.hg)(actionTypes.loginUser, loginUserCreator);

;// CONCATENATED MODULE: ./store/thunks/removeTokenInLocalStorage.ts
var removeTokenInLocalStorage_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var removeTokenInLocalStorage_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var removeTokenInLocalStorage = (0,redux_toolkit_esm/* createAsyncThunk */.hg)(actionTypes.removeTokenInLocalStorage, function () { return removeTokenInLocalStorage_awaiter(void 0, void 0, void 0, function () {
    return removeTokenInLocalStorage_generator(this, function (_a) {
        localStorage.removeItem(LocalStorageKeys.AuthToken);
        return [2 /*return*/];
    });
}); });

;// CONCATENATED MODULE: ./store/slices/films.tsx
var _a;
















var filmsSlice = (0,redux_toolkit_esm/* createSlice */.oM)({
    name: 'films',
    extraReducers: function (builder) {
        builder.addCase(getTokenFromLocalStorage.fulfilled, function (state, action) {
            if (action.payload) {
                state.isLoggedIn = true;
            }
            state.authToken = action.payload;
            console.log(state);
        }).addCase(getMovieList.fulfilled, function (state, action) {
            state.films = action.payload;
            state.filteredFilms = action.payload;
            state.error.message = '';
            state.isLoggedIn = true;
        }).addCase(getMovieList.rejected, function (state, action) {
            var errorObject = JSON.parse(action.payload);
            var errorCode = errorObject.status;
            if (errorCode >= 400 && errorCode < 500) {
                state.isLoggedIn = false;
            }
            else {
                state.error = {
                    message: errorObject.message
                };
                state.films = [];
            }
        }).addCase(setTokenToLocalStorage.fulfilled, function (state, action) {
            state.authToken = action.payload;
        }).addCase(registerUser.fulfilled, function (state, action) {
            state.authToken = action.payload.accessToken;
            state.error.message = '';
            state.isLoggedIn = true;
        }).addCase(registerUser.rejected, function (state, action) {
            state.error = {
                message: action.payload
            };
        }).addCase(loginUser.fulfilled, function (state, action) {
            state.authToken = action.payload.accessToken;
            state.error.message = '';
            state.isLoggedIn = true;
        }).addCase(loginUser.rejected, function (state, action) {
            state.error = {
                message: action.payload
            };
        }).addCase(removeTokenInLocalStorage.fulfilled, function (state, action) {
            state.authToken = action.payload;
            state.isLoggedIn = false;
        });
    },
    initialState: {
        films: [],
        filteredFilms: [],
        selectedFilm: {
            id: '',
            name: '',
            description: '',
            genre: [],
            img: '',
            year: '',
            duration: ''
        },
        filterName: '',
        authToken: '',
        isLoggedIn: true,
        error: {
            message: ''
        }
    },
    reducers: {
        filterMovies: {
            reducer: filterMoviesReducer,
            prepare: filterMoviesAction
        },
        sortMoviesByName: {
            reducer: sortMoviesByNameReducer,
            prepare: sortMoviesAction
        },
        sortMoviesByYear: {
            reducer: sortMoviesByYearReducer,
            prepare: sortMoviesAction
        },
        setSelectedMovie: {
            reducer: filmIdReducer,
            prepare: filmIdAction
        },
        setFilterName: {
            reducer: setFilterNameReducer,
            prepare: setFilterNameAction
        }
    }
});
var filterMovies = (_a = filmsSlice.actions, _a.filterMovies), sortMoviesByName = _a.sortMoviesByName, sortMoviesByYear = _a.sortMoviesByYear, setSelectedMovie = _a.setSelectedMovie, setFilterName = _a.setFilterName;
var filmsReducer = filmsSlice.reducer;

;// CONCATENATED MODULE: ./app/components/Header/Logout/Logout.tsx



var Logout = function (_a) {
    var onClick = _a.onClick;
    return react.createElement("div", { className: "Logout", onClick: onClick }, Dictionary.LOGOUT);
};

;// CONCATENATED MODULE: ./app/components/Header/Header.tsx








var Header = function (_a) {
    var title = _a.title, placeholder = _a.placeholder, changeFilterType = _a.changeFilterType;
    var dispatch = (0,es/* useDispatch */.I0)();
    var onlogout = function () {
        dispatch(removeTokenInLocalStorage());
    };
    var movieToSearch = function (filterName) {
        dispatch(setFilterName({ filterName: filterName }));
    };
    return react.createElement("div", { className: "Header" },
        react.createElement(Logout, { onClick: onlogout }),
        react.createElement(SiteName, { title: title }),
        react.createElement(Search, { placeholder: placeholder, changeFilterType: changeFilterType, movieToSearch: movieToSearch }));
};

;// CONCATENATED MODULE: ./app/components/Footer/Footer.tsx


var Footer = function (_a) {
    var authorName = _a.authorName;
    return react.createElement("div", { className: "Footer" }, authorName);
};

// EXTERNAL MODULE: ../node_modules/react-router/dist/index.js
var dist = __webpack_require__(935);
// EXTERNAL MODULE: ../node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(783);
;// CONCATENATED MODULE: ./app/components/Main/MainHeader/MainHeader.tsx


var MainHeader = function (_a) {
    var find = _a.find, name = _a.name, numberOfFilms = _a.numberOfFilms, dates = _a.dates, changeSortType = _a.changeSortType, sortType = _a.sortType;
    var onChangeSortType = function (sortName) {
        var value;
        if (sortType[sortName].value === 'asc') {
            value = 'desc';
        }
        else {
            value = 'asc';
        }
        changeSortType({
            year: {
                value: sortName === "year" ? value : sortType.year.value,
                isActive: sortName === "year",
            },
            name: {
                value: sortName === "name" ? value : sortType.name.value,
                isActive: sortName === "name",
            }
        });
    };
    return react.createElement("div", { className: "MainHeader" },
        react.createElement("div", { className: "Find" },
            find,
            react.createElement("span", { className: "Count" }, numberOfFilms)),
        react.createElement("div", { className: "Sorting" },
            react.createElement("div", { className: sortType.name.isActive ? "Name Focus" : "Name", onClick: function () { return onChangeSortType('name'); } },
                name,
                react.createElement("div", { className: "Arrows" },
                    react.createElement("div", { className: sortType.name.value === 'asc' ? "Up" : "Down" }, "\u2191"))),
            react.createElement("div", { className: sortType.year.isActive ? "Dates Focus" : "Dates", onClick: function () { return onChangeSortType('year'); } },
                dates,
                react.createElement("div", { className: "Arrows" },
                    react.createElement("div", { className: sortType.year.value === 'asc' ? "Up" : "Down" }, "\u2191")))));
};

;// CONCATENATED MODULE: ./app/constants/routes.ts
var routes = {
    HOME: "/",
    DETAILS: "/movie-deatails",
    LOGIN: "/login",
    REGISTER: "/register",
    ERROR: "*"
};

;// CONCATENATED MODULE: ./app/components/Main/MovieList/MovieList.tsx






var MovieList = function () {
    var navigate = (0,dist/* useNavigate */.s0)();
    var films = (0,es/* useSelector */.v9)(function (state) {
        return state.filteredFilms;
    });
    var dispatch = (0,es/* useDispatch */.I0)();
    var showMovieDetails = function (id) {
        dispatch(setSelectedMovie(id));
    };
    var onMovieClick = function (id) {
        showMovieDetails(id);
        navigate(routes.DETAILS);
    };
    return react.createElement("div", { className: "MovieList" }, films && films.map(function (_a) {
        var id = _a.id, img = _a.img, year = _a.year, name = _a.name;
        return react.createElement("div", { className: "MovieCard", key: id, onClick: function () { return onMovieClick(id); } },
            react.createElement("div", { className: "Movie" },
                react.createElement("img", { className: "Image", src: img, alt: name }),
                react.createElement("div", { className: "Name" }, name),
                react.createElement("div", { className: "Year" }, year)));
    }));
};

;// CONCATENATED MODULE: ./app/components/Main/Main.tsx











var Main = function () {
    var dispatch = (0,es/* useDispatch */.I0)();
    var filterName = (0,es/* useSelector */.v9)(function (state) {
        return state.filterName;
    });
    var isLoggedIn = (0,es/* useSelector */.v9)(function (state) {
        return state.isLoggedIn;
    });
    var _a = (0,react.useState)({
        name: { value: 'asc', isActive: true },
        year: { value: 'asc', isActive: false }
    }), sortType = _a[0], setSortType = _a[1];
    var navigate = (0,dist/* useNavigate */.s0)();
    (0,react.useEffect)(function () {
        if (!isLoggedIn) {
            navigate(routes.LOGIN);
        }
    }, [isLoggedIn]);
    (0,react.useEffect)(function () {
        dispatch(getTokenFromLocalStorage());
        setTimeout(function () {
            dispatch(getMovieList());
        });
    }, []);
    (0,react.useEffect)(function () {
        dispatch(sortMoviesByName(sortType.name.value));
    }, [sortType.name.value, filterName]);
    (0,react.useEffect)(function () {
        dispatch(sortMoviesByYear(sortType.year.value));
    }, [sortType.year.value, filterName]);
    var films = (0,es/* useSelector */.v9)(function (state) {
        return state.filteredFilms;
    });
    var movieCounter = films.length;
    var changeSortType = function (type) {
        setSortType(type);
    };
    return react.createElement("div", { className: "Main" },
        react.createElement(MainHeader, { find: Dictionary.Found, numberOfFilms: movieCounter, name: Dictionary.NAME, dates: Dictionary.REALISE, changeSortType: changeSortType, sortType: sortType }),
        react.createElement(MovieList, null));
};

;// CONCATENATED MODULE: ./app/components/MovieDetails/MovieDetails.tsx








var MovieDetails = function () {
    var dispatch = (0,es/* useDispatch */.I0)();
    var navigate = (0,dist/* useNavigate */.s0)();
    var film = (0,es/* useSelector */.v9)(function (state) {
        return state.selectedFilm;
    });
    var toHomepage = function () {
        navigate(routes.HOME);
    };
    return react.createElement("div", { className: "MovieDetails" },
        react.createElement("div", { className: "SiteName" },
            react.createElement(SiteName, { title: Dictionary.MovieVan }),
            react.createElement(Button, { title: Dictionary.Search, onClick: toHomepage })),
        react.createElement("div", { className: "Film" },
            react.createElement("img", { className: "Image", src: film.img, alt: film.name }),
            react.createElement("div", { className: "Details" },
                react.createElement("div", { className: "Name" }, film.name),
                react.createElement("div", { className: "Year" },
                    Dictionary.RELEASED,
                    ": ",
                    film.year),
                react.createElement("div", { className: "Genre" },
                    Dictionary.GENRES,
                    ": ",
                    film.genre.join(', ')),
                react.createElement("div", { className: "Duration" },
                    Dictionary.DURATION,
                    ": ",
                    film.duration),
                react.createElement("div", { className: "Description" }, film.description))));
};

;// CONCATENATED MODULE: ./app/components/Login/Login.tsx
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};









var Login = function () {
    var navigate = (0,dist/* useNavigate */.s0)();
    var onRegister = function () {
        navigate(routes.REGISTER);
    };
    var isLoggedIn = (0,es/* useSelector */.v9)(function (state) {
        return state.isLoggedIn;
    });
    var _a = (0,react.useState)({
        email: '',
        password: ''
    }), state = _a[0], setState = _a[1];
    var dispatch = (0,es/* useDispatch */.I0)();
    var onLogin = function () {
        dispatch(loginUser(state));
    };
    var onChangeEmail = function (event) {
        setState(function (prevState) {
            return __assign(__assign({}, prevState), { email: event.target.value });
        });
    };
    var onChangePassword = function (event) {
        setState(function (prevState) {
            return __assign(__assign({}, prevState), { password: event.target.value });
        });
    };
    (0,react.useEffect)(function () {
        if (isLoggedIn) {
            navigate(routes.HOME);
        }
    }, [isLoggedIn]);
    var isDisabledButton = !state.email && !state.password;
    return react.createElement("div", { className: "AuthorizationForm" },
        react.createElement(SiteName, { title: Dictionary.MovieVan }),
        react.createElement("div", { className: "Login" },
            react.createElement("div", { className: "Wrapper" },
                react.createElement("div", null,
                    Dictionary.MAIL,
                    ":"),
                react.createElement("input", { onChange: onChangeEmail, className: "Mail" })),
            react.createElement("div", { className: "Wrapper" },
                react.createElement("div", null,
                    Dictionary.PASSWORD,
                    ":"),
                react.createElement("input", { onChange: onChangePassword, className: "Password" })),
            react.createElement(Button, { disabled: isDisabledButton, onClick: onLogin, title: Dictionary.LOGIN }),
            react.createElement("div", { className: "Register" },
                Dictionary.UNREGISTERED,
                react.createElement("span", { onClick: onRegister },
                    " ",
                    Dictionary.REGISTER_HERE))));
};

;// CONCATENATED MODULE: ./app/components/Register/Register.tsx
var Register_assign = (undefined && undefined.__assign) || function () {
    Register_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Register_assign.apply(this, arguments);
};









var Register = function () {
    var _a = (0,react.useState)({
        email: '',
        firstname: '',
        lastname: '',
        age: 0,
        password: ''
    }), state = _a[0], setState = _a[1];
    var isLoggedIn = (0,es/* useSelector */.v9)(function (state) {
        return state.isLoggedIn;
    });
    var navigate = (0,dist/* useNavigate */.s0)();
    (0,react.useEffect)(function () {
        if (isLoggedIn) {
            navigate(routes.HOME);
        }
    }, [isLoggedIn]);
    var dispatch = (0,es/* useDispatch */.I0)();
    var onRegister = function () {
        dispatch(registerUser(state));
    };
    var onChangeEmail = function (event) {
        setState(function (prevState) {
            return Register_assign(Register_assign({}, prevState), { email: event.target.value });
        });
    };
    var onChangeFirstName = function (event) {
        setState(function (prevState) {
            return Register_assign(Register_assign({}, prevState), { firstname: event.target.value });
        });
    };
    var onChangeLastName = function (event) {
        setState(function (prevState) {
            return Register_assign(Register_assign({}, prevState), { lastname: event.target.value });
        });
    };
    var onChangeAge = function (event) {
        setState(function (prevState) {
            return Register_assign(Register_assign({}, prevState), { age: Number(event.target.value) });
        });
    };
    var onChangePassword = function (event) {
        setState(function (prevState) {
            return Register_assign(Register_assign({}, prevState), { password: event.target.value });
        });
    };
    var isDisabledButton = !state.firstname && !state.lastname && !state.email && !state.age && !state.password;
    return react.createElement("div", { className: "RegistrationForm" },
        react.createElement(SiteName, { title: Dictionary.MovieVan }),
        react.createElement("div", { className: "Register" },
            react.createElement("div", { className: "Wrapper" },
                react.createElement("div", null,
                    Dictionary.MAIL,
                    ":"),
                react.createElement("input", { onChange: onChangeEmail, className: "Mail" })),
            react.createElement("div", { className: "Wrapper" },
                react.createElement("div", { className: "Title" },
                    Dictionary.FIRST_NAME,
                    ":"),
                react.createElement("input", { onChange: onChangeFirstName, className: "FirstName" })),
            react.createElement("div", { className: "Wrapper" },
                react.createElement("div", { className: "Title" },
                    Dictionary.LAST_NAME,
                    ":"),
                react.createElement("input", { onChange: onChangeLastName, className: "LastName" })),
            react.createElement("div", { className: "Wrapper" },
                react.createElement("div", null,
                    Dictionary.AGE,
                    ":"),
                react.createElement("input", { onChange: onChangeAge, className: "Age" })),
            react.createElement("div", { className: "Wrapper" },
                react.createElement("div", null,
                    Dictionary.PASSWORD,
                    ":"),
                react.createElement("input", { onChange: onChangePassword, className: "Password" })),
            react.createElement(Button, { disabled: isDisabledButton, title: Dictionary.REGISTER, onClick: onRegister })));
};

;// CONCATENATED MODULE: ./app/components/NotFound/NotFound.tsx







var NotFound = function () {
    var navigate = (0,dist/* useNavigate */.s0)();
    var authToken = (0,es/* useSelector */.v9)(function (state) {
        return state.authToken;
    });
    var toHomepage = function () {
        if (authToken) {
            navigate(routes.HOME);
        }
        else {
            navigate(routes.LOGIN);
        }
    };
    return react.createElement("div", { className: "NotFound" },
        react.createElement("div", { className: "Wrapper" },
            react.createElement("h1", null, Dictionary.ERROR),
            react.createElement("div", null, Dictionary.SORRY),
            react.createElement(Button, { onClick: toHomepage, title: Dictionary.HOMEPAGE })));
};

;// CONCATENATED MODULE: ./app/Router.tsx








var router = (0,react_router_dom_dist/* createBrowserRouter */.aj)([
    {
        path: routes.HOME,
        element: react.createElement(Main, null)
    },
    {
        path: routes.DETAILS,
        element: react.createElement(MovieDetails, null)
    },
    {
        path: routes.LOGIN,
        element: react.createElement(Login, null)
    },
    {
        path: routes.REGISTER,
        element: react.createElement(Register, null)
    },
    {
        path: routes.ERROR,
        element: react.createElement(NotFound, null)
    }
]);

;// CONCATENATED MODULE: ./app/App.tsx









var App = function () {
    var filterName = (0,es/* useSelector */.v9)(function (state) {
        return state.filterName;
    });
    var error = (0,es/* useSelector */.v9)(function (state) {
        return state.error;
    });
    (0,react.useEffect)(function () {
        if (error.message) {
            alert(error.message);
        }
    }, [error]);
    var dispatch = (0,es/* useDispatch */.I0)();
    var _a = (0,react.useState)('name'), filterType = _a[0], setFilterType = _a[1];
    (0,react.useEffect)(function () {
        dispatch(filterMovies({ filterName: filterName, filterType: filterType }));
    }, [filterName]);
    var changeFilterType = function (type) {
        setFilterType(type);
    };
    return react.createElement("div", { className: "App" },
        react.createElement(Header, { title: Dictionary.MovieVan, placeholder: Dictionary.SearchStringText, changeFilterType: changeFilterType }),
        react.createElement(dist/* RouterProvider */.pG, { router: router }),
        react.createElement(Footer, { authorName: Dictionary.AuthorName }));
};

// EXTERNAL MODULE: ../node_modules/react-dom/client.js
var client = __webpack_require__(634);
;// CONCATENATED MODULE: ./store/store.tsx


/* harmony default export */ var store = ((0,redux_toolkit_esm/* configureStore */.xC)({
    reducer: filmsReducer
}));

;// CONCATENATED MODULE: ./index.tsx





var rootNode = document.getElementById("root");
var root = (0,client/* createRoot */.s)(rootNode);
root.render(react.createElement(es/* Provider */.zt, { store: store },
    react.createElement(App, null)));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [96], function() { return __webpack_require__(964); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;