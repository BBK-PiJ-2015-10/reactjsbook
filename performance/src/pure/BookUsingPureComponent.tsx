import {PureComponent} from "react";

class BookUsingPureComponent extends PureComponent<unknown, { title: string }> {

    constructor(props: unknown) {
        super(props);
        this.state = {title: 'Design Patterns'};
    }

    componentDidMount() {
        setInterval(() => {
            console.log('Interval triggered')
            this.setState({title: 'Design Patterns'})
        }, 1000);
    };

    render() {
        console.log('Rendering Book. Expected only 1 due to PureComponent');
        return <h1>{this.state.title}</h1>
    }

}

export default BookUsingPureComponent;