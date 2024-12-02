
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



useState--
---State- Data of a component
--State is created inside the components while as props are created in different component and the passed as props from that component
--useState is used to change the state 
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
