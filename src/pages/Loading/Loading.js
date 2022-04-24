import React, { Component } from 'react';
import '../Loading/Loading.css';
import { Redirect } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import PuffLoader from "react-spinners/PuffLoader";

class Loading extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
     this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
  }
    
  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/schufimafi" />
      : <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>SCHU FI MA FI</title>
                <link rel="canonical" href="#SCHU FI MA FI" />
                <meta name="description" content="SCHU FI MA FI| Künstler " />
         </Helmet>
        <div className="Loading-header">
          <PuffLoader
            size={'40vw'}
            color={"#fff"}
            loading={true}
          />
        </div>
        </div>
  }
}

export default Loading;
