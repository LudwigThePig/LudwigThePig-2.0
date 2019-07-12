import * as React from 'react';
import { store } from '../redux/store';
import { updateInitialLoad } from '../redux/actions/initialLoadAction';


interface IAppState {
  initialLoad: boolean
}

class Home extends React.Component <{}, IAppState>{

  constructor(props: {}) {
    super(props)
    this.state = {
      initialLoad: store.getState().initialLoad.activeInitialLoad
    }
  }

  componentWillMount() {
    store.subscribe(() => {
      this.setState({
        initialLoad: store.getState().initialLoad.activeInitialLoad
      })
    });
  }

  componentDidMount() {
    if (this.state.initialLoad) {
      setTimeout(() => store.dispatch(updateInitialLoad(false)), 2000 );
    }
  }

  render() {
    const { initialLoad } = this.state;
    const animated = initialLoad ? 'animated' : null;
    console.log(animated)
    return  (
      <React.Fragment>
        <h1 className={`${animated}Txt`}>Welcome to<br/>LudwigThePig</h1>
        <img className={`${animated}Img jumbo-img`} src="static/assets/pig-jumbo.png" alt="jumbo ludwig the pig"></img>
      </React.Fragment>
    )
  }
} 
    
export default Home;