(()=>{"use strict";const t=new class{constructor(t){this.title=t,this.date=new Date}toString(){return JSON.stringify({title:this.title,date:this.date.toJSON()})}get uppercaseTitle(){return this.title.toUpperCase()}}("Webpack Post Title");console.log("Post to string:",t.toString())})();