import React from 'react';

const makeExpandable = (ComponentToEnrich) => (
    class HelloBoxContainer extends React.Component {
        constructor() {
            super();
            this.state = {
                // default state on first render
                expanded: false
            };
            this.expandOrCollapse = this.expandOrCollapse.bind(this);
        }

        expandOrCollapse() {
            // toggle expanded: true becomes false, false becomes true
            this.setState({expanded: !this.state.expanded});
        }

        render = () => (
            <ComponentToEnrich
                {...this.props}
                isExpanded={this.state.expanded}
                expandOrCollapse={this.expandOrCollapse}
            />
        );
    }
);

export default makeExpandable;
