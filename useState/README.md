== hooks: 
1. useState 2. useEffect 3. useContext 4. useReducer 5.useMemo 6.useCallBack 7.useRef

==Higher Order Components
What , why , When, How

==Life Cycle Methods of Components (Class as well as functions components)
--Mount Update Unmount 

==State management
--prop drilling
--Context

==Custom Hooks
--When To use
--Code

==Lazy Loading
--Code Splitting 

==Virtual Dom
--Reconciliation
--React Fiber
--Diffing

==SSR CSR
--Difference
--Benefits

==Routing (RBAC)
--react-router
--Protected Routes
--Dynamic Routing

==Testing (Unit Testing)
--React Testing (Test Cases)

==Async Tasks 
--API Calls
--Events
--Promises


++Reusability Modularity Testability





---Component
it is block of code which performs some function
it is a function which returns some HTML or JSX


--Virtual DOM Fiber Reconciliation
The Virtual DOM (Document Object Model) is a concept used in modern web development to improve the performance and efficiency of web applications. It is a lightweight, in-memory representation of the actual DOM elements.

Initial Render: When a web application is first loaded, the Virtual DOM creates a virtual representation of the UI components.
Updates: When the state of the application changes (e.g., user interactions, data updates), the Virtual DOM updates its representation of the UI.
Diffing: The Virtual DOM compares the new representation with the previous one to identify the changes (this process is called "diffing").
Reconciliation: The Virtual DOM then updates only the parts of the actual DOM that have changed, rather than re-rendering the entire UI.

Fiber is a rewrite of one of React’s core algorithms: the reconciler. The purpose of this algorithm is to take two DOM trees, compare the two and figure out what changes have been made.

Before Fiber, React would reconcile and render elements all in one shot. This would block the main thread in the case that there were a lot of deep changes in the DOM tree. With Fiber, however, the process of reconciliation and rendering is split up into two phases:

Reconciliation — React will figure out all the changes that need to occur based on the changes found in the DOM. It will then create a list of changes that need to occur. Since the algorithm uses the concepts of fibers, React is able to pause and resume this work at any time.
Commit — From there, React can decide on which set of changes to render and commit to one. Once the rendering process begins, however, it cannot be interrupted as you could with reconciliation.
By breaking up the process into two phases, React is better able to prioritize which work needs to get done to give a faster and smooth perception of your application.



--props
--props are the properties of the component
In normal HTML 
<input type = "type" placeholder etc> these are properties same like props are the properties of the components
--Props is a special keyword in React that stands for properties and is used for passing data from one component to another
-- every components have props
React Gives us Reusability of the components, What if we need to add some more things
to the components- WE PASS THEN AS PROPS
--in Order to use properties we need to handle those properties in the component
    -then we can pass then as props 
    -You can pass a default value of props in the components it will reflect on every instance of that component and you can also pass value to the same prop while using the component
--React provides various in build functions. The order/way of using those functions are hooks- We hook those functions to bring them into Our code-

Prop Drilling-
consider you have a  parent component inside that A inside A ,You have B inside B,you have C and you need pass some props to C component. You gonna pass Through Main>A>B>C. this is called prob drilling. That is why We use useContext


useContext
--Context in React provides a way to pass data through a component tree without the need to prop-drill (i.e., pass props down manually at every level). In simple terms Context is Global variable
--1. import react 2, create Context using React.createContext()3. export the context




useState--
---State- Data of a component
--State is created inside the components while as props are created in different component and the passed as props from that component
--useState is used to create the state variables
    -- it gives us two things a variable and a function to change the state 
    --variable will hold the initial state 
    -- and the function will help you to change the state
    --when the state value changes React renders or reloads the component




Lifecycle of a Components
Mounting 
    --When the components loads on the App.jsx or loads on the screen it called mounting
Updating
    -- When the component is rendering or loading
Unmounting
    -- When a component is removed from screen 





useEffect or called as side effect function
--The useEffect hook is used to perform side effects in your functional components, such as fetching data, subscribing to external events, or manually changing the DOM. It combines the functionality of componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
--Whenever we want to some operations based on the life cycle of components, useEffect hook is called. it is connected to the Lifecycle of a component/
--useEffect is called on every render
--by default useEffect will be called for render and every rerender
--[] useEffect will be called for first time /Mounting only if we a empty dependency array. Dependencies are variables
--[variable] if you pass a dependency array- useEffect will be called for the first time but i will be called for every dependency variable change in simple words if the dependency variable changes



useRef
--Normal variable don't persist
--You can use it to persist or preserve values between re-renders.
--(means they don't keep the change after the component render or rerender like state Variables)
--The useRef hook takes an initial value of any type as argument and returns an object with a single current property. (internally created as object and that object has a property current which hold the value of useRef variable)
--what if we want a variable which persist and doesn't want to a state variable

useCallBack
--Cache a function definition so that it doesn't get recreated on every render.
--use to save the rerenders of the child component
{if you have a child component when you render the parent component (by any means like useState) it rerenders the child component also that is a un necessary render in order to  save the child component from rerendering wrap the child component in Memo}
--till the value of the props will not change the component will not re-render
--if you passing a functions in props then react.memo wont save you from rerendering. then the function we recreate after re-render- in order to save the functions for re-creating after re-render or freeze the function from recreating useCallBack comes to hel
--moreover  passing an value in a dependency array, will rerender/ or re-create the function if the value of the dependency array changes


==USECALLBACK VS USEMEMO
Both useMemo and useCallback are React hooks that help optimize performance by memoizing values and functions, respectively.

useMemo
Purpose: Memoizes the result of a function.
Usage: When you have a computationally expensive function and you want to avoid recalculating it on every render
Syntax:
const memoizedValue = useMemo(() => {
  return a + b;
}, [a, b]);

useCallback
Purpose: Memoizes a function.
Usage: When you want to avoid recreating a function on every render, especially useful when passing callbacks to child components.
Syntax:
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
In summary:
Use useMemo for memoizing values.
Use useCallback for memoizing functions.


---useNavigate
it is used to navigate to the different component after a something happen (like when the login happen) 

--Higher order component
 HOC pattern typically works in React: Definition of a Higher Order Component (HOC): A higher-order component is a function that takes a component and returns a new component with enhanced functionality.



 --Custom Hooks
 A custom hook in React is a JavaScript function that allows you to encapsulate and reuse stateful logic across multiple components. It follows the naming convention useSomething and can leverage built-in hooks like useState, useEffect, or others.
 --USE
 Reusability , Readability,Testability
 --When
 repeated Logic , abstraction of complex logic , when logic involves multiple build-in hooks




--Lazy Loading

