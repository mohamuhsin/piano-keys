# Piano keys

You’re a web developer who has been hired by a music education company. This client wants you to create an interactive game to help their beginner-level piano students study. Create a piano player with DOM events in JavaScript!

### Create An Interactive Piano Game

**1.** At the beginning of the code, we have variable name assignments for the keys array and the notes array. There is also a function looping through the elements of the keys array and pushing them to the notes array.

After the second comment, create a function named keyPlay that changes the background color of the keys when they are pressed down.

Be sure to use the .target property in the function because the target is being modified in this case.

**2.** Next, create a function named keyReturn that returns the background color of the keys to their default with an empty string '' when the mouse is released on the element. Be sure to use the .target property.

**3.** Now that you have created two functions that change the color of the key elements, you must assign them as the values of event handler properties.

Create a named function and leave the code block blank for now. This function will be used later on to assign events to the keys, so it should take one parameter — you can call it note.

**4.** Inside the function, create an event handler that runs the keyPlay as an event handler when a mousedown event fires on any note.
Inside the function, create an event handler that runs the keyPlay as an event handler when a mousedown event fires on any note.
