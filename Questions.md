1. What is the difference between Component and PureComponent? give an example where it might break my app.
	- The major difference between React.PureComponent and React.Component is PureComponent does a shallow comparison on state change
2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
	- ShouldComponentUpdate can interrupt context propagation.
3. Describe 3 ways to pass information from a component to its PARENT.
	- passing a function as a prop
	- using context API
	- using redux
4. Give 2 ways to prevent components from re-rendering.
	- useMemmo, useCallabck
	- replace useState with useRef
5. What is a fragment and why do we need it? Give an example where it might break my app.
	- You can use Fragments to wrap the components, and it will reduce rendering times and decrease memory usage.
6. Give 3 examples of the HOC pattern.
	- redux connect
	- createFramentContainer
7. what's the difference in handling exceptions in promises, callbacks and async...await.
	- The only difference between these two is that the callback for catch() has its own execution context
8. How many arguments does setState take and why is it async.
	- setState doesn't immediately mutate the state but creates a pending state transaction.	The setState method takes up to 2 arguments. We usually pass in only one. The first argument can be an object or a callback that's used to update the state.	The second argument is a function that's always run after setState is run.
9. List the steps needed to migrate a Class to Function Component.
	1. Change the class to a function
	2. Remove the render method
	3. Convert all methods to functions
	4. Remove references to this
	5. Remove constructor
	6. Remove event handler bindings
	7. Replace this.setState
	8. useEffect for state update side effects
	9. Replace lifecycle methods with hooks
10. List a few ways styles can be used with components.
	- css stylesheet
	- inline styling
	- styled-components
	- css modules
11. How to render an HTML string coming from the server
	- You can use dangerouslySetInnerHTML.