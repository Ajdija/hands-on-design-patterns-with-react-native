import { connect } from 'react-redux';
import LanguageChangeActionTriggers from './actions/LanguageChangeActions';
import LanguageSwitcherView from './view';

export default connect(
    null,
    dispatch => ({
        onLanguageChange:
            LanguageChangeActionTriggers.onLanguageChange(dispatch)
    })
)(LanguageSwitcherView);
