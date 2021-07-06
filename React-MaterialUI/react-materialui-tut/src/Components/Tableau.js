import React, { Component } from 'react';
import tableau from 'tableau-api';
 
 
class Test extends Component {
  componentDidMount() {
    this.initViz()
  }
 
 
  initViz() {
    const vizUrl = 'https://public.tableau.com/views/TheGreatIndianGeronotocracy/TheGreatIndianGerontocracy?:language=en&:display_count=y&mobile=&:origin=viz_share_link';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl)
  }
 
 
  render() {
    return (
      <div ref={(div) => { this.vizContainer = div }}>
      </div>
    )
  }
}
 
 
export default Test;