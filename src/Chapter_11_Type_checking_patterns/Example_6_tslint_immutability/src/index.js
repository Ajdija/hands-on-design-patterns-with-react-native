import withLanguageProvider
    from './layout/LanguageSwitcher/hocs/withLanguageProvider';
import ScreenRoot from './screens';
import withStoreProvider from './flux/withStoreProvider';

const AppRoot = withStoreProvider(withLanguageProvider(ScreenRoot));

export default AppRoot;
