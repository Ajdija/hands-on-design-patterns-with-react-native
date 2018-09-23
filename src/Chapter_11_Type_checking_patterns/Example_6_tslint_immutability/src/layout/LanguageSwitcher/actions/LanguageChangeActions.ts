import LanguageChangeActionTypes from './LanguageChangeActionTypes';
import LANGUAGES from '../constants';
import { Dispatch } from 'redux';

export type onLanguageChangeActionType = {
    type: LanguageChangeActionTypes.CHANGE,
    language: LANGUAGES
}

export type LanguageChangeActions = onLanguageChangeActionType;

const onLanguageChangeActionCreator = (language: LANGUAGES):onLanguageChangeActionType => ({
    language,
    type: LanguageChangeActionTypes.CHANGE
});

export const ActionCreators = {
    onLanguageChange: onLanguageChangeActionCreator
};

const ActionTriggers = {
    onLanguageChange:
        (dispatch: Dispatch<any>) => (language: LANGUAGES) =>
                dispatch(ActionCreators.onLanguageChange(language))
};

export default ActionTriggers;
