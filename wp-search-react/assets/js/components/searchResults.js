import React from 'react';
import SearchResult from './SearchResult';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let results = '';
    if( this.props.loading ) {
      results = <p>Loading</p>;
    } else if( this.props.results.length > 0 ) {
      const _results = this.props.results.map( result => {
        return(<SearchResult key={result.id} result={result}/>);
      });
      results = <ul>{_results}</ul>;
    } else if( this.props.searched ) {
      results = <p>Nothing Found</p>;
    }
    return (
      <div>{results}</div>
    )
  }
}