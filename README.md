This version of the code was meant to use the `unplgin-remix-router` routing way instead of the traditional React Router. 
But the proeblm is that Chrome Extension handle the routing in a different way than React Router does, and that's what I'm going to explain here:

Problem:
When opening the Extension in google Chrome, it will not render anything but instead you will see a message in the broswer page:
`Unexpected Application Error!
404 Not Found`

What cause the Proplem accroding to the research I did:
In Chrome Extensions, the initial HTML file (index.html) typically acts as the single entry point. React Router expects routes to be defined relative to this entry point. However, 
the routes file likely defines paths relative to the /app folder. This mismatch leads to a 404 error because React Router cannot locate the components (e.g., Home.tsx) within the Extension's structure.

What is the solution? 
is to use the traditional `Router` from the `'react-router-dom'` Or apply manual routing like I did in this project (In the main branch)

The problem of the solution?
The problem with using this approach that I will need to use the `Router` instead, which means I need to define each route in a separate `<Rout/>` (Or similar approach). 
And this approach will eliminate the power of the routing using `unplugin-remix-router`.

