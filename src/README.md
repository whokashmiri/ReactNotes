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
--




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
--[variable] if you a dependency array- useEffect will be called for the first time but i will be called for every dependency variable change in simple words if the dependency variable changes



useRef
--Normal variable don't persist
--You can use it to persist or preserve values between re-renders.
--(means they don't keep the change after the component render or rerender like state Variables)
--The useRef hook takes an initial value of any type as argument and returns an object with a single current property. (internally created as object and that object has a property current which hold the value of useRef variable)
--what if we want a variable which persist and doesn't want to a state variable

useCallBack
--Cache a function definition so that it doesn't get recreated on every render.
--use to save the rerenders of the child component
{if you have a child component when you render the parent component (by any means like useState) it rerenders the child component also that is a un necessary render in order to the child component from rerendering wrap the child component in Memo}
--till the value of the props will not change the component will not re-render
--if you passing a functions in props then react.memo wont save you from rerendering. then the function we recreate after re-render- in order to save the functions for re-creating after re-render or freeze the function from recreating useCallBack comes to hel
--moreover  passing an value in a dependency array, will rerender/ or re-create the function if the value of the dependency array changes


---useNavigate
it is used to navigate to the different component after a something happen (like when the login happen) 
