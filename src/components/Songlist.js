import React from "react";
import {connect} from "react-redux"
import {Selectsong} from "../actions"

class Songlist extends React.Component {
  renderList() {
    console.log(this.props)
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <div className="ui button primary"
            onClick={()=>this.props.selectedSong(song)}>Select</div>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render (){
    return (
      <div className="ui divided list">{this.renderList()}</div>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log(state)
  return {
    songs:state.songs
  };
}

export default connect(mapStateToProps,{
  selectedSong:Selectsong
})(Songlist)