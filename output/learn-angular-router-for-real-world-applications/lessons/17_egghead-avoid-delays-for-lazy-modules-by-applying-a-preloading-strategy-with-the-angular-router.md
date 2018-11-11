Instructor: [00:00] In this app routing module here, we have a couple of routes defined where the component's directly referenced. Then we have some that are lazy loaded. Especially here, the context and the people module.

[00:11] We can see it here as well in the browser. Down here, when we refresh the application, we just get the standard Angular files. When I now click the context, the context module file gets loaded. The same thing also for the people module.

[00:26] Now, when your application gets larger and grows, these couple of files here -- for instance, the context module, which here in this demo application, is just a couple of kilobytes -- may grow quite a lot. What happens is that when the file is not yet ready, and you reload your application, the user doesn't yet have those modules loaded.

[00:44] When he clicks the link, it might take a couple of seconds until the megabytes of files are being downloaded for that module. Now, when you implemented lazy loaded, all you want to have is to actually avoid downloading all those megabytes and megabytes of files when your application loads initially.

[01:00] The user does not yet interact with these kind of modules. You really want to optimize that time to interactive, such that your application starts as quick as possible. Then, behind the scenes, you can actually already download the remaining modules lazily, such that when the user then clicks on those modules, they are already downloaded and ready.

[01:19] He doesn't recognize this kind of delay. In Angular, this is actually quite simple. We can go directly to the app routing, where we have also defined here our lazy modules, and where we actually define the root level of our routings.

[01:33] There, the router takes a second configuration option, where we can specify the preloading strategy. Then we specify the preload all modules. The preload all modules gets imported directly from the Angular router.

[01:48] With that, let's save this. Now, let's go to the whole module here. Let's refresh again. As you can see now, the files get downloaded, but also already the context and the people module get downloaded behind the scenes.

[02:02] When I click here, the file's already ready, and Angular doesn't have to lazy load it at that moment. The delay of those lazy loaded modules will disappear completely.
