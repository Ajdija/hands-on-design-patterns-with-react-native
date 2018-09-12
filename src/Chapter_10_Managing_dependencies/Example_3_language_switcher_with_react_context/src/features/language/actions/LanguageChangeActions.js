import LanguageChangeTypes from './LanguageChangeTypes';

export const ActionCreators = {
    onLanguageChange: language => ({
        type: LanguageChangeTypes.LANGUAGE_CHANGE,
        language
    })
};

const ActionTriggers = {
    onLanguageChange:
            dispatch => language =>
                dispatch(ActionCreators.onLanguageChange(language))
};

export default ActionTriggers;
