import React from 'react'

export class Search extends React.Component{

  render(){

    return(
      <div id="div-search">
      <span className="hide"></span>
      <span className="hide"></span>
      <span className="hide"></span>
      <span className="hide"></span>
      <span className="hide"></span>
        <input id="search-text" className="SearchEdit" type="textarea" onChange={this.props.onChange}
          onKeyDown={this.props.onKeyDown} onClick={this.props.onClick}/>
      </div>
    );
  }
}
