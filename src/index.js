import Post from './Post';
// import json from './assets/json.json';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';
import WebpackLogo from './assets/webpack-logo.png';
import './styles/style.css';

const post = new Post('Webpack Post Title', WebpackLogo);

console.log('Post to string:', post.toString());

// console.log('JSON:', json);
// console.log('XML:', xml);
// console.log('CSV:', csv);