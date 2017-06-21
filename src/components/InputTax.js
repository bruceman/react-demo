//controlled component (form data handled by react component not DOM itself)
class InputTax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tax: props.initTax||1000};
    this.showTax = this.showTax.bind(this);
  }

  showTax(event) {
    this.setState({tax: event.target.value * 1.5});
  }

  render() {
    return <input type='text' value={this.state.tax} ref={(input)=>{this.taxInput = input;}} onChange={this.showTax}></input>;
  }

  componentDidMount() {
    console.log("componentDidMount:");
    console.log(this.taxInput.value);
  }

}

//validate properties
InputTax.propTypes = {
    initTax: PropTypes.number
};

export default InputTax;
