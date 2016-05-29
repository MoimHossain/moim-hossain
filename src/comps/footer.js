
import React from 'react';
import {Component} from 'react';
import Html from './html';

export default class Footer extends Component {
	constructor(props) {
    	super(props);
  	}
    
  	render() {
  	    return (
          <div className="ui inverted vertical footer segment">
            <div className="ui container">
              <div className="ui stackable inverted divided equal height stackable grid">
                <div className="three wide column">
                  <h4 className="ui inverted header">Professional</h4>
                  <div className="ui inverted link list">                  
                    <div className="item">
                      <i className="wordpress icon"></i>
                      <div className="content">
                        <a target="_blank" href="http://moimtechview.blogspot.nl/" className="item">Blog</a>
                      </div>
                    </div>                  
                    <div className="item">
                      <i className="github icon"></i>
                      <div className="content">
                        <a target="_blank" href="https://github.com/MoimHossain" className="item">GitHub</a>
                      </div>
                    </div>
                    <div className="item">
                      <i className="stack overflow icon"></i>
                      <div className="content">
                        <a target="_blank" href="http://stackoverflow.com/users/124996/moim" className="item">StackOverflow</a>
                      </div>
                    </div>
                    <div className="item">
                      <i className="code icon"></i>
                      <div className="content">
                        <a target="_blank" href="http://www.codeproject.com/script/Membership/View.aspx?mid=1027789" className="item">Code Project</a>
                      </div>
                    </div>
                    <div className="item">
                      <i className="bug icon"></i>
                      <div className="content">
                        <a target="_blank" href="http://www.codewars.com/users/MoimH" className="item">Code wars</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="three wide column">
                  <h4 className="ui inverted header">Social</h4>
                  <div className="ui inverted link list">

                    <div className="item">
                      <i className="facebook square icon"></i>
                      <div className="content">
                        <a target="_blank" href="https://www.facebook.com/moim.hossain" className="item">Facebook</a>
                      </div>
                    </div>
                    <div className="item">
                      <i className="twitter icon"></i>
                      <div className="content">
                        <a target="_blank" href="https://twitter.com/MoimHossain" className="item">Twitter</a>
                      </div>
                    </div>                    
                    <div className="item">
                      <i className="linkedin square icon"></i>
                      <div className="content">
                        <a target="_blank" href="https://www.linkedin.com/in/moimhossain" className="item">LinkedIn</a>
                      </div>
                    </div>
                    <div className="item">
                      <i className="google plus icon"></i>
                      <div className="content">
                        <a target="_blank" href="https://plus.google.com/u/0/+MoimHossain" className="item">Google Plus</a>
                      </div>
                    </div>                    
                    <div className="item">
                      <i className="instagram icon"></i>
                      <div className="content">
                        <a target="_blank" href="https://www.instagram.com/moimhossain/" className="item">Instagram</a>
                      </div>
                    </div>
                    <div className="item">
                      <i className="photo icon"></i>
                      <div className="content">
                        <a target="_blank" href="https://500px.com/moimhossain" className="item">500px</a>
                      </div>
                    </div>
                    <div className="item">
                      <i className="youtube square icon"></i>
                      <div className="content">
                        <a target="_blank" href="https://www.youtube.com/user/HossainMoim" className="item">YouTube</a>
                      </div>
                    </div>
                    <div className="item">
                      <i className="vimeo icon"></i>
                      <div className="content">
                        <a target="_blank" href="https://vimeo.com/user37936333" className="item">Vimeo</a>
                      </div>
                    </div>  
                  </div>
                </div>
                <div className="three wide column">
                  <h4 className="ui inverted header">Contact</h4>
                  <div className="ui inverted link list">

                    <div className="item">
                      <i className="mail square icon"></i>
                      <div className="content">
                        <a target="_blank" href="mailto:moimhossain@gmail.com" className="item">Gmail</a>
                      </div>
                    </div>
                    <div className="item">
                      <i className="yahoo outline icon"></i>
                      <div className="content">
                        <a target="_blank" href="mailto:moim023@yahoo.com" className="item">Yahoo</a>
                      </div>
                    </div>                                     

                  </div>                                    
                </div>
                <div >
                  <Html html='<a href="http://feedjit.com/ir1/0879a6ca67ae4c255d755758388439ab/"><img src="http://feedjit.com/b/0879a6ca67ae4c255d755758388439ab.png" alt="" border="0" ISMAP /></a>'></Html> 
                </div>
              </div>
            </div>
          </div>
  	    	);
  	}
};
