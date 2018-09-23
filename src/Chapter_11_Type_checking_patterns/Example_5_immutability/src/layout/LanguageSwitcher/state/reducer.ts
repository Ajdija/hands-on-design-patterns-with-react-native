import LANGUAGES from '../constants';

import LanguageChangeActionTypes from '../actions/LanguageChangeActionTypes';
import { LanguageChangeActions } from '../actions/LanguageChangeActions';

const languageReducer = (state = LANGUAGES.ENGLISH, action: LanguageChangeActions) => {
    switch (action.type) {
    case LanguageChangeActionTypes.CHANGE: {
        if (!action.language) {
            return state;
        }
        return action.language;
    }
    default: {
        return state;
    }
    }
};

export default { language: languageReducer };
