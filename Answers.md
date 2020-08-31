1. What problem does the context API help solve?
with the introduction of reacts Context API you no longer have to pass props down from component to component - what React devs call “prop drilling”. We can now store data on a context object, and retrieve that data in the necessary components from the context object, not props
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
`Action`
The action, represented by an object, contains properties related to some action that happens in our apps. Every action object is required to have a type property, which will “inform” the reducer actions happening in the app. The type allows the reducer to know what part of the state needs to change.
`Reducer`
The reducer pattern is a great state management pattern that allows us to write pure functions to manage state changes in a predictable manner.

`store`
Redux store cannot be mutated, which will save us from running into more bugs and weird side effects, and will make it easier to reason about our code.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is state that is used application-wide across many different components both related and unrelated. An example of this is a user info object. Component state is state that is only needed for a single component. An example of this is state for form fields.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk allows us to make our actions asynchronus (like when making an API call.) When we use redux thunk, it takes any functions returned from our action creators and calls them, passing dispatch as an argument to them. from there, after we complete any async calls, we can dispatch an action, using that argument.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
My favorite state mangement system I learned this sprint is Redux. I think that although it does have a lot of set up, the structure it provides to making updates to application level state makes it much easier to add addtional features onto applications and to maintain them. it is predictable, as it aims to be. For smaller scale applications, It is a bit overkill and using something like the Context API, or just passing props would be more appropriate. But, For apps with a lot of state changes and relationships, I feel Redux is the way to go.
