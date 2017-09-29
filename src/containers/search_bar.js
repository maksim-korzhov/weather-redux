import React, {Component} from "react";

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        };

        this._onInputChange = this._onInputChange.bind(this);
    }

    _onInputChange(event) {
        console.log(event.target.value);
        this.setState({
            term: event.target.value
        });
    }

    _onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this._onFormSubmit} className="input-group">
                <input
                    onChange={this._onInputChange}
                    value={this.state.term}
                    placeholder="Get your 5-day podcasts in your favorite cities"
                    className="form-control"
                />
                <span className="input-group-button">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}