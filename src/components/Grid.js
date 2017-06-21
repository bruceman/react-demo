import Row from './Row';

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;
    
    if (data && data.length>0) {
        return (<table className='grid'><tbody>
        {
            data.map(function (item) {
                return <Row key={item} data={item}/>;
            })
        }
        </tbody></table>);
    } else {
        return <p> no data </p>;
    }
  }
}

export default Grid;
