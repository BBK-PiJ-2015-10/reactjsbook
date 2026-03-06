import {Component} from "react";

class BookUsingComponent extends Component<unknown, { title: string }> {

    constructor(props: unknown) {
        super(props);
        this.state = {title: 'Design Patterns'};
    };

    componentDidMount() {
        setInterval(() => {
            console.log('Interval triggered');
            this.state = {title: 'Design Patterns'};
        },1000);
    };

    render(){
        console.log('Rendering expecting very 1000 millis');
        return <h1>{this.state.title}</h1>

    }

}

export default BookUsingComponent;