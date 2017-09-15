import React ,{Component} from 'react';
import Griddle, { plugins } from 'griddle-react';
export default class GriddleTable extends Component{
	constructor(props){
		super(props);
		this.state={
            data:[]
		};
	}
	componentDidMount(){
		let self = this;
		var data = [
            {
              "id": 0,
              "name": "Mayer Leonard",
              "city": "Kapowsin",
              "state": "Hawaii",
              "country": "United Kingdom",
              "company": "Ovolo",
              "favoriteNumber": 7
            }
          ];
          self.setState({
              data:data
          });
	}

	render(){
		let self =this;
		
		return (
			<div ref="hc">
				Griddle Table
				<Griddle
                    data={this.state.data}
                    plugins={[plugins.LocalPlugin]}
                />
			</div>
			);
	}
}


