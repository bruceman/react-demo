import Welcome from "../components/Welcome";
import Grid from "../components/Grid";
import InputTax from "../components/InputTax";

const element = <Welcome msg="react"/>;

let msgList = [
	"browserify",
	"gulp"
];

let gridData = [
    "row1",
    "row2"
];

ReactDOM.render(
  <div>
    <InputTax initTax={123}/>
  	{element}
  	<Welcome msg="babel"/>
  	{
  		msgList.map(function (msg) {
  			return <Welcome key={msg} msg={msg} />;
  		})
  	}
    <Grid data={gridData} />
  </div>,
  document.getElementById('container')
);
