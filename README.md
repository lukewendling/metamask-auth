# Wallet auth demo app

### What is this?

Short screencast: https://youtu.be/VjXNSDCBbKw

I stumbled on a cpl of medium posts that describe how we can authenticate users by using Metamask signing capabilities (no username/password!). I wanted to try it myself. This is a trivial example, with a login screen in front of a silly 'counter' app: clicking a button stores (in-memory) the num. of clicks associated with your account/public key. A public key can access only its click count. Switching between accounts with MM is an easy way to test.

I used Next.js views only because it's page-driven conventions makes it well-suited for simple demos.

### References

https://medium.com/metamask/scaling-web3-with-signtypeddata-91d6efc8b290
https://medium.com/metamask/the-new-secure-way-to-sign-data-in-your-browser-6af9dd2a1527
https://hackernoon.com/never-use-passwords-again-with-ethereum-and-metamask-b61c7e409f0d

### Dependencies

* Node 8+

### Install

Start API server and UI:

```
npm i
npm start
npm run dev
google-chrome http://localhost:3000/login
```

### Dev notes

* The UI is a Next.js app, for HMR reloading and Babel integration. Some pages might be slow to load on first visit while Next compiles the page. Not a big fan of Next but it's ok for small apps.
