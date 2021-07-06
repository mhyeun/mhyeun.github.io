---
title: Webhooks vs. APIs
date: "2021-07-06T20:34:25.656Z"
template: "post"
draft: false
slug: "webhooks-vs-apis"
category: "Coding"
tags:
  - "Coding"
description: "I worked on implementing webhooks for clients while working at HomeX, so I figured it was a good idea to actually learn what a webhook is."
socialImage: "/media/photo.jpg"
---

The definition of a **webhook** from [wikipedia](https://en.wikipedia.org/wiki/Webhook):

> A webhook in web development is a method of augmenting or altering the  behavior of a web page or web application with custom callbacks.

If that means absolutely nothing to you, I can sympathize.

### So what really is a webhook

In essence, a webhook is an automated message that gets sent whenever a specific event happens. When the **event** happens, the message (called the **payload**) gets sent to all the people who are **subscribed** to the webhook.

> event -> payload -> subscribers

For example, say you want to automate an email to someone who signed up for your services. You would have a webhook flow like this:

- **Event**: someone signing up.
- **Payload** (usually in JSON): 
```json
{
  "name": "Lee Young Ho",
  "service": "Starcraft Lessons",
  "location": "Toronto"
}
```
- **Subscriber**: you.

### Why would I want this (as a subscriber)

Webhooks are perfect for when you want to do something right after a specific event occurs.

Going back to our example above, when you receive a webhook that someone signed up for your services, your email generating system can automatically send an email with the information provided from the payload!

For example, a template like this:
```
Hi <payload.name>,

Thank you for signing up for our <payload.service> 
at <payload.location>!
```

could automate an email into this that gets sent almost immediately:
```
Hi Lee Young Ho,

Thank you for signing up for our Starcraft Lessons 
at Toronto!
```

Not only is this _really fast_, you also don't have to constantly check if a new user has signed up for your services. It'll automatically tell you when it happens.

### Why would I want this (as a data provider)

For clients who want event-based data, they will continually poll your APIs to check if new data has been added.

This will put a huge load on your servers for no reason, which leads me to...

### Webhooks vs. APIs

Let's use an analogy.

Imagine that we have a child (client) and a parent (server) driving somewhere.

If we are using an **API**, it's like the child asking the parent every 10 seconds if they have arrived yet or not. This is really inefficient, and both child and parent are wasting energy through these transactions.

If we instead use **webhooks**, it's like the parent telling the child when they have arrived. There only needs to be a single transation that is triggered only when the important event has taken place (arriving).

### Closing thoughts
Both webhooks and APIs are very important with their own use cases. But, if you find yourself writing an API that is event-based, you might want to consider using a webhook instead.
