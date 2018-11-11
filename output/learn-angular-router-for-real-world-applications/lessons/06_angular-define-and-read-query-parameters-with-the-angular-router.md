Instructor: [00:00] Here, you can see a very simple routing configuration, which is defined in this people routing module. Whenever our browser URL points to this people/pathOne, our person detail component will be visualized.

[00:12] Now, one of the various ways of passing data via the URL to our person detail component, or generally to our router components, is by indicating our query parameter. Now, a query parameter is usually added to the browser's URL bar by a question mark. Then, for instance, we could say showChild equals true.

[00:32] As you can see, even though we specified a different kind of URL by indicating that query parameter, our personal detail component still works, and it should visualize correctly. That's because query parameters can be added arbitrarily to any kind of URL we define.

[00:47] We don't have to change our routing configuration for adding those parameters. For reading those, we can simply jump into our person detail component in this case. We need to get hold of the activated route object, which needs to be imported here always from Angular router.

[01:07] Then either in our construction or also in our ngInit, we can access those query parameters. We do that by accessing activated route, query params. It is an observable, so we can subscribe to it. Let's get that data printed out.

[01:22] If we open up the console, we see here the log statement. You can see we get an object where the property matches basically here the key in our query parameter and the value below. Afterwards, it is the value we specified here.

[01:37] These are always strings. Regardless of whether you pass a number, a Boolean, or whatever, these come in as strings. Make sure to always convert them, if you need to.

[01:46] Now that we get the data, we could simply say something like showChildren. False is the default value. Then we can go inside here say something like, diff and if. Then here below, we obviously need to set this to true showChildren.

[02:11] We can see now it gets loaded properly. If we change this to false, then it gets hidden, as it also gets when you don't specify anything. As always, if you know that your routed component gets reloaded every time your routing changes, we can also bypass the observable registration and directly access the snapshot.

[02:31] We access the snapshot, query params, show childs. We need to properly assign this also. Obviously, in a real-world scenario, it would then use this information, for instance, to query further data from your server.
