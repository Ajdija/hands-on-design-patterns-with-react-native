import { LANG_ENGLISH } from '../constants';
import LanguageChangeActions from '../actions/LanguageChangeTypes';

const languageReducer = (state = LANG_ENGLISH, action) => {
    switch (action.type) {
    case LanguageChangeActions.LANGUAGE_CHANGE: {
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
