---
title: What the heck is an IIFE?
date: "2021-06-27T20:34:25.656Z"
template: "post"
draft: false
slug: "what-the-heck-is-an-iife"
category: "JavaScript"
tags:
  - "Coding"
  - "JavaScript"
description: "I overheard a coworker mention something called an 'iffy' during a meeting. Now I've come to the conclusion that immediately invoked function expressions (IIFEs) are pretty useful in JavaScript."
socialImage: "/media/photo.jpg"
---
Since the useEffect hook in React doesn't allow the passed in function to be asynchronous, I found myself writing a lot of code blocks that look like this:
```js
useEffect(() => {
  const fetchData = async () => {
    const response = await apiCall();
    setData(response);
  }

  fetchData();
}, [])
```

I always thought there should be a better way to write this, but I never really cared enough to look into it.

### So are you going to tell me what it is

An Immediately Invoked Function Expression (IIFE) is a function that runs when it's defined and cannot be called again.

It should be an _anonymous_ function since there's really no point in naming it.

**The syntax**:
```js
(() => {
  // your function
})();
```
_Only showing arrow notation because it's just objectively way more superior._


**For example**:
```js
useEffect(() => {
  (async () => {
    const response = await apiCall();
    setData(response);
  })();
}, [])
```
### Ok that's cool but so what

Honestly, IIFEs don't have much use outside of making your code a little less ugly.

But... you can also use IIFEs to:

**1. Protect your functions**

Because of scope, functions protect the variables inside of it. To protect the function, use an IIFE. It's kind of like giving public access to the function with limited use.

**2. Avoid 'polluting the global namespace'**

If you have a function that you know will only run once, why store it and waste space? Save trees. Use an IIFE.
