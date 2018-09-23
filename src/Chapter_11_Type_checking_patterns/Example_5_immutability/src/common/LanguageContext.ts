import { createContext } from 'react';
import LANGUAGES from '../layout/LanguageSwitcher/constants';

const { Provider, Consumer } = createContext(LANGUAGES.ENGLISH);

export const LanguageProvider = Provider;
export const LanguageConsumer = Consumer;
