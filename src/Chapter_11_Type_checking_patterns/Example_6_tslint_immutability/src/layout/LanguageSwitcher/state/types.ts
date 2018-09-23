import LANGUAGES from '../constants';

export type LanguageReducerState = LANGUAGES;

export type LanguageState = {
    readonly language: LanguageReducerState
};
