class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility: false
        };
    };

    handleVisibilityToggle(){
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            }
        });
    };

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibilityToggle}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && <p>This is the special hidden text.</p>}
            </div>
        );
    };
};

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));


// const appRoot = document.getElementById("app");

// let vis = false;

// const onToggleVisibility = () => {
//     vis = !vis;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggleVisibility}>{vis ? "Hide Details": "Show Details"}</button>
//             {vis && <p>This is the special text.</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };


// render();