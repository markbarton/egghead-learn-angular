Instructor: [00:00] We have here an Angular app which uses the router to successfully move between different kind of routes when we click those hyperlinks at the very top, which is our navigation bar. However, what is missing a bit here is some kind of highlighting signaling to the user at which point an application currently is.

[00:17] In Angular, this is actually quite easy to apply, especially if you use the router link here. What you can do is add the routerLinkActive directive and specify a CSS class which you would like to have applied. For instance, active route.

[00:31] Let's copy this over to our remaining routes below, here. Now let's quickly refresh our application and switch to the about screen. If we click here on the inspect button, we should actually see that in our hyperlink, the class has been changed to active route.

[00:49] In fact, if we switch to the people list, you see that the active route has been removed. It has moved to our people button here. What's missing now is to simply go to our styles CSS, which is our global styles for our application, and add that active route class here. For simplicity, let's simply add here bold for our font.

[01:11] Now you can see how the point of our application gets properly highlighted in application bar. Of course, this could be much more sophisticated if you have some kind of side bar or side menu with a nice background. A nice thing is this works also if you directly jump to that route of course.
