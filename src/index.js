import Post from './Post';
import json from './assets/json.json';
import './styles/style.css';

const post = new Post('Webpack Post Title');

console.log('Post to string:', post.toString());

console.log('JSON:', json);