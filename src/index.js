import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyCwKEBgijUSS9oMS15ui9kC9bbnTseXYkA';

// YTSearch({Key: API_KEY, term: 'surfboards'}, function(data)
// {
//     console.log(data);
// });


class App extends Component {
    constructor(props){
        super(props);

        this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfborads'}, (videos) => {
        this.setState({videos});
        //this.setState({videos:videos});

        });   

    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos = {this.state.videos}  />
             </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.container') );

// if (module.hot){
//     module.hot.accept();
// }