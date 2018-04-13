---
layout: gist
title: JQuery
---

Document ready
```js
$( document ).ready(function() {
  alert("ready")
});
```

SetInterval with condition
```js
var timesRun = 0;
var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 60){
        clearInterval(interval);
    }
    //do whatever here..
}, 2000); 
```
