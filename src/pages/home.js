
import React from 'react';
import {Component} from 'react';
import Banner from '../comps/banner';

export default class Home extends Component {
	constructor(props) {
    	super(props);
  	}

  	render() {
  	    return (
          <div>
              <Banner caption="Hi, I'm Moim!"></Banner>

              <div className="ui vertical stripe segment">
                <div className="ui middle aligned stackable grid container">
                    
                    <div className="row">
                      <div className="eight wide column">
                        <h3 className="ui header">I'm a software Developer, Engineer and Architect. I struggle everyday building better software that solves complex business problems, scales elastically over cloud virtual fabric, provides high availability, and ensures disaster recovery. I also enjoy building team consists diverse nationalities, gender, skillsets and age groups.</h3>
                        <h3 className="ui header">While I'm not busy at work, I Blog or I take my gears out and jump into photography!</h3>
                        <h3 className="ui header">I currently hold a bachelor degree in Computer Science and Engineering.</h3>
                      </div>
                      <div className="six wide right floated column">
                        <img className="ui large bordered image MoimHossainImage"></img>
                      </div>
                    </div>

                </div>
              </div>


             

         
          </div>
  	    	);
  	}
};
