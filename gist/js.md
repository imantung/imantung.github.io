---
layout: gist
title: JS
---

# JS (Javascript)


```js
Object.keys(list)
Object.values(list)

// if values() not working
Object.keys(obj).map(e => obj[e])
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

### JQuery

Document ready
```js
$( document ).ready(function() {
  alert("ready")
});
```

