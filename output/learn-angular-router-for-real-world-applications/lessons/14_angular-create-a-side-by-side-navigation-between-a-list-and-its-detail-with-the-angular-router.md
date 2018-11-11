Instructor: [00:00] In this application here, we have here a people part, which displays a list of people. In the code here, you can see how we iterate over that array of people, and by using the router link, we construct a path to display basically the child and the detail of each of these people.

[00:16] As a result, when we click here, we see the detail, and then we can go back and see the list again. Now, if we take a closer look at how that routing is being structured, we can see that these are siblings to each other.

[00:27] We have one time the people list, which is active, and then if we navigate away, the person detail component will get active as this route gets activated. As a result, these get destroyed and recreated on each navigation.

[00:40] It can also be easily confirmed by adding here an onDestroy callback, if we implement that life cycle hook here on our people list component, for instance. Let's move that to the end here, and simply do a console.log.

[00:53] Let's add the same part to the people detail component. We implement again that interface. We log out here people detail destroyed. Let's move that to the very bottom as well.

[01:08] If we now open the dev tools and we navigate to a detail, we can see that the people list gets destroyed. If we then click back, we see that the people detail gets destroyed. While routing this way from the people list to the detail is perfectly valid, and in many use cases, also desired, we can also have a different kind of structured.

[01:25] Namely, where the people list remains active. We can click through those items. Then at the very bottom here, the people detail basically gets simply refreshed with the new data, as our route up there updates.

[01:37] For that purposes, however, we need to restructure a bit of how our routing is here defined, because now, we have basically two kind of sibling routes, while in the new scenario, this needs to be a child route of our people list component.

[01:50] We can do that by specifying here the children property. We move that child routing here of our person detail component up in that child property. Moreover, let's also adjust slightly here how the routes work.

[02:05] For instance, let's call this people, which will display then the people list. Then below here, we have just the ID, which means that whenever we navigate to /people, the list will be displayed. Then if we go to the ID part, people/ and then the different IDs of our person that gets visualized, that component here gets activated.

[02:28] Now, since this is now a child of our component of our list here, we also need another router outlet. We need to go into people list detail here, and specify here the router outlet. If we save, we can go here to our people list, which now has been updated to work just with people.

[02:47] If we click to our list here, you can see how below, the people detail gets activated, and gets refreshed with new data. Also, note that we don't get any kind of destroyed notification below here. The reason is because those component actually remain active for the whole time of our navigation here.

[03:04] Note that in such scenarios, it is extremely important that your person detail component, which gets refreshed here below, using the observable mechanism of reading out the data.

[03:14] Because in this way, whenever we update our route, that observable gets triggered, and we will finally then call again our people service to fetch the new person, based on the parameter which has been updated.
