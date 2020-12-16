import axios from 'axios';

const KEY = 'AIzaSyA4-6bMDAp2zzqpztsQli92QIlaXWGgfFU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});
