var React = require('react');
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;

var Prompt = React.createClass({
  propTypes: {
      header: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      handleUpdateUser: PropTypes.func.isRequired,
      handleSubmitUser: PropTypes.func.isRequired
  },
  render: function () {
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
                    <h1>{this.props.header}</h1>
                    <div className="col-sm-12">
                      <form onSubmit={this.props.handleSubmitUser}>
                        <div className="form-group">
                        <input 
                           className="form-control"
                            placeholder="Github Username"
                            onChange={this.props.handleUpdateUser} 
                            value={this.props.username} 
                            type="text" />
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                        <button
                            className="btn btn-block btn-success"
                            type="submit">
                            Continue 
                        </button>
                        </div>
                      </form>
                </div>
            </div>
        );
    }  
    
});

module.exports = Prompt;