Instructor: [00:00] The Angular router allows us to pass in not only dynamic data via, for instance, a resolver, as in this case, but also some static data, which happens at compile time. That can be especially useful if you want to configure the router component based on different kind of scenarios.

[00:15] What we can do is to use a specific property here which is called data. Here, within that data object, we can simply specify some key. For instance, let's say "loadAddresses." We set it to true. As a result, we can now access that loadAddresses properly in different kind of places.

[00:32] For instance, let's take a look here at that personData resolver which has been specified here. We can simply jump in here. Wherever we have that route object, we can simply access the route.data, in this case loadAddresses.

[00:47] Let's console out this personData resolver. Let's console out here the loadAddresses. If we open up the developer tools on our console here, we can already see that here is the personData resolver, which prints out true as we specified in our properties there.

[01:03] Similarly, of course, we can go into the personDetail component, then access the same values there as well. Here, you can see we already subscribe to the data. We can do something like console.log personDetail component and then log out data loadAddresses. You can see how that gets printed out.

[01:23] Otherwise, you simply need to access the snapshot here, which in this case is perfectly fine because the data, obviously, in this case is totally static and not dynamically resolved. Of course, this is not limited to Boolean values. In that data property here, we could also specify an entire object. That really depends on the use case which we want to solve.
