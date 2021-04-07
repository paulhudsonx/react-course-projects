class ToggleVisibility extends React.Component {

    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.title = 'Visibility';
        this.subTitle = '';
        this.state = {
            visible: false
        };
    }

    toggleVisibility() {
        this.setState((previousState) => {
            return {
                visible: !previousState.visible
            }
        });
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                {this.subTitle && <p>{this.subTitle}</p>}
                <button id="visibility-button-id" className="button"
                        onClick={this.toggleVisibility}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
                {this.state.visible && (<div><p>Here are the details</p></div>)}
            </div>
        );
    }
}

ReactDOM.render(<ToggleVisibility/>, document.getElementById('app'));
