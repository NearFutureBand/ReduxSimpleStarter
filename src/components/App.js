import React, {
    Component
} from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList.jsx';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCPo4vuh1Y0BxwkPaiNaCkNpGrlD8BpXyk';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };
        
        YTSearch({ key: API_KEY, term: 'surfboards'}, (data) => {
            console.log(data);
            this.setState({videos: data});
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
    
    
    
}