import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyCwKEBgijUSS9oMS15ui9kC9bbnTseXYkA';

YTSearch({key: API_KEY, term: 'surfborads'}, function(data) {
    console.log(data);
});

//Create a new component . This component should produce
//some HTML

const App = () => {
    return (
        <div>
            <SearchBar />
         </div>
    );
}


//Take this component's generated  HTML and put it on the page (in the DOM)

ReactDom.render(<App />, document.querySelector('.container') );