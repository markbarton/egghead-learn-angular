Instructor: [00:00] In this application here, I have a list of people. Whenever I click here, a form opens, which allows me to modify that person and to save it again. Now, I've also implemented here some mechanism that visualizes me whenever I have unsafe changes.

[00:16] This is implemented very, very naively and very simple. I have here basically the form. Here, you can see that this dirty flag is being visualized, and this is being calculated by simply registering on the value changes for that name field, which represents here for that field of the name of the person.

[00:34] Whenever that changes that, we verify whether that name is different of the current person name. If it is, we display here that is dirty true, otherwise dirty is false. Also, if I change here, the dirty flag gets set to true, but then I save it, which is down here.

[00:50] Basically by submitting the form, and then I manually reset dirty to false again. Now usually, in a real-world application what you have is that whenever you change this here, and then you have unsafe changes basically, you now navigate to some other view.

[01:08] You should actually be notified, telling you about the potential data loss because you didn't save the changes before leaving. The Angular router allows us to implement so-called canDeactivate guard. Let me create here a new class, canDeactivate.guard.ts.

[01:25] Let me just paste in here some predefined template. This is a normal Angular service. I implement here the canDeactivate, and the canDeactivate usually takes an instance of a component. Now, we could generalize the part of having some kind of dirty component concept as an interface, and implement it here.

[01:44] However, in this specific example here, I'm implementing directly the person detail component. Let's also import that. Then we have to implement the canDeactivate function. The canDeactivate function takes first of all the component, which in this case is a person detail component. 

[02:02] Then we have the current route, which is an activated route snapshot, and the current state of the router, as well as the next state. This here returns a Boolean, an observable of a Boolean read, or even a promise. Right now, we just need the Boolean, so let's implement it in that way.

[02:24] Now we have the component that gets passed in here to the component instance, we can directly query it. Let's first of all determine whether it is dirty, and we can directly say component.isDirty, so we basically access here that property of our component. If it is dirty, we want to actually inform the user.

[02:44] In the case, we do simply a return confirm, "You have unsafe changes." This will return then a Boolean value so we can directly return it. Otherwise, we can simply leave that form, so just return true, because we don't have any dirty changes. Now, obviously, we need to register that canDeactivate dirty component guard here.

[03:09] We directly go to the people module. We have here the providers, and we register it there. Then we have to also go into the people routing module, and here on the people detail component, on the person detail component, we specify the canDeactivate property.

[03:30] Now, let's navigate to that people module. Let's go here to some person. Let's modify that such that we have unsafe changes. Let's click on contacts.

[03:39] Now, you can see you have unsafe changes, do you want to proceed? Yes, I want to proceed anyways. It will let me proceed out of the people detail component here. However, if, for instance, I have unsafe changes, I want to navigate the way in, and click cancel, I remain inside here. I can save those changes, and then I can navigate away without any problems.
