Instructor: [00:00] The angular router doesn't allow us to only navigate to absolute URLs. For instance, as we specify here with the router link. Here we indicate at /contacts and then the second segment is list. We can navigate among our different kind of views.

[00:16] Now especially if we take a look at our people list components, you may have noticed that if we click here on people and then on a sub-item, that navigation remains active, and just the sub-item gets refreshed.

[00:27] Now by taking a look at our inner part here, those router links are actually specified by indicating a forward path again. Basically to /people and then appending a person ID. If we take a look at how that routing is defined, we can see that the personal digital component, which is visualized here below, is actually a chart of that people list component.

[00:50] This also reflects the path. Both shared first part, people. Then basically whenever that second part here is empty, the people list component is displayed. If there is a / again with some ID, then the person detail component gets loaded.

[01:04] Now we can take advantage of this behavior by actually going inside here and removing that whole part. The angular router is hierarchical, in that it understands that the router link here points to a sub-child of that people list component.

[01:18] All it has to do is to append that ID of the person, which we're currently iterating over here, to our URL. Load basically then the detail component, which gets visualized just below here. Let's save this and try it out. As you can see, it still works by just appending the URL here.

[01:34] This kind of approach is really powerful because you could also do something like that, which wouldn't make much sense in this example. For instance, we can navigate one level up. Then say want to navigate to people. Then to personal ID again. Even that works just as expected.
