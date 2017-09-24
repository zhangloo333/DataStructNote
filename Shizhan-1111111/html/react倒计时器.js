/**
 * Created by lee on 9/21/17.
 */
class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.timer = 0;
        this.handleChange = this.handleChange.bind(this);
        this.decrease =this.decrease.bind(this);
    }

    handleChange(e) {
        this.setState({
            count: e.target.value
        })
    }

    componentDidUpdate() {
        if(this.state.count == 0) {
            clearInterval(this.timer);
        }
    }

    startTimer() {
        if(this.timer == 0){
            this.timer = setInterval(this.decrease, 1000);
        }
    }

    decrease() {
        if(this.timer == 0){
            this.timer = setInterval(()=>this.setState({count: this.state.count-1}), 1000);
        }
    }

    render() {
        return(
            <div>
            <input type = 'number'
            value = {this.state.count}
            onChange = {this.handleChange}
    />

    <p>this is result: {this.state.count}</p>
        <button onClick={this.decrease}>click</button>
        <p>{}</p>
        </div>
    )
    }
}



/*
 * Render the above component into the div#app
 */
React.render(<Application />, document.getElementById('app'));