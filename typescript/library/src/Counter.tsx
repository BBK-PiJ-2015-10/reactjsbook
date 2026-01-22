import React, {ReactElement} from "react";
import {clearInterval} from "node:timers";

type Props = {
    start: number
}

type State = {
    counter: number
}

class Counter extends React.Component<Props, State> {

    private interval = 0;

    constructor(props: Props) {
        super(props);
        this.state = {
            counter: props.start
        };
    }

    componentDidMount() {
        this.interval = window.setInterval(() => {
                this.setState((prevState) => ({
                        ...prevState,
                        counter: prevState.counter + 1
                    }
                ));
            }
            , 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render(): ReactElement {
        return <div>
            {this.state.counter}
        </div>;
    }
};

export default Counter;