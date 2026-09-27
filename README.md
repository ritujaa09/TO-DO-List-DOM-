# TO-DO-List-DOM-
Problem Definition	Sample Problem Statement:: Build a To-Do List web app where users can add,
delete, and mark tasks as complete, using vanilla JavaScript DOM methods only
Theory
 (100 words)	Think of your webpage as a Lego model. The HTML is the original set of instructions, but JavaScript can add, change, or remove pieces right in front of you. This live model is called the DOM.
Here is how JavaScript handles a to-do list:
•	Finding the box: JavaScript uses a command like querySelector to find the exact spot on your page where the list should live.
•	Making tasks: When you type a new chore, JavaScript builds a brand new HTML piece from scratch (createElement), safely writes your text on it, and snaps it into the list (appendChild).
•	Checking tasks off: To mark a task done, JavaScript doesn't change the design itself. It simply slaps a label on the piece (classList.toggle). Your CSS sees this label and knows to draw a line through the text.
•	Deleting tasks: When you click delete, JavaScript unplugs that specific piece from the webpage and throws it away (remove).
•	Listening for clicks: Instead of attaching a separate "click watcher" to every single task you create, you put one single watcher on the main box. When a click happens anywhere inside the box, that main watcher figures out exactly which delete or complete button you pressed.

Procedure and Execution 
(100 Words)	Step for Implementation:
1 · UNDERSTANDING THE DOM
2 · VS CODE PROJECT SETUP
 3 · BUILD THE HTML
4 · JAVASCRIPT FINDS HTML
5 · READ USER INPUT
6 · CREATE ELEMENTS DYNAMICALLY
7· DELETE TASK
8· COMPLETE TASK
9 · COMPLETE APPLICATION
