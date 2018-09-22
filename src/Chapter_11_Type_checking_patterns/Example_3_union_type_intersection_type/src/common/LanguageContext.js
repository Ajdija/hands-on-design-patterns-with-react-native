import { createContext } from 'react';
import { LANG_ENGLISH } from '../layout/LanguageSwitcher/constants';

const { Provider, Consumer } = createContext(LANG_ENGLISH);

export const LanguageProvider = Provider;
export const LanguageConsumer = Consumer;
