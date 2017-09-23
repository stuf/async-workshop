# Workshop Outline

* Async Programming
    * It's hard (why)
    * Solutions:
        * Callbacks
        * Events
        * Promises (and later on async/await)
        * Streams
    * How do you account for a value that does not exist?
    * One solutions: streams
    * Streams
        * More familiarly: `observable`
        * What they are not
            * ?
        * What are they
            * Your friend
            * Kinda like Promises
                * But they can return more than a single value
                * Except they're not like Promises
            * A little bit like Events
                * You can `.subscribe` to a stream
                * But not quite
            * Maybe callbacks?
                * Sorta; `observable.map(callback)`
        * Things that can be a stream
            * Web request
            * Mouse movement
            * Keyboard input
            * Reading a file
            * Animation
            * Maybe examples?
        * Lifecycle
            * Event handling
                1. Event subscription with function
                2. Event happens
                3. Event subscriber calls given function
            * Promises
                1. Create Promise
                2. Pass on Promise to wherever the value is needed
                3. Resolve or reject promise
            * Streams
                1. Create stream
                2. Stream gets `value`, `error` or `end`
                3. Unless `end` happens, stream will stay alive
                4. Pass along like a Promise
                5. Derive new data dependant of the stream
                6. ???
                7. Profit
        * Pitfalls
            * Abstract
            * Debugging can be tricky
                * Where did this stream error?
            * A lot of new operators
                * Which seem superficially identical (`combine`/`merge`, `map`/`flatMap`)
            * Documentation is confusing
                * RxJS -example of `.flatMap`
            * You have to readjust how you think about data
                * Post-adjustments symptoms and adverse reactions include:
                    * More declarative coding style
                    * Boost of confidence with asynchronic data
                    * ?
            * Your usual imperative style of coding does not work as well
            * Libraries vary; "hot"/"cold" observables, (de)activation, etc.
            * "How can I get this value into a variable?"
                * And other frustrated tales of having to glue two different thought paradigms together
            * Overcomplicates things
                * But that's in the beginning
                * Problems include
                    * Ending up with subscribers hanging (`.observe` does that)
                    * Forgetting about handling errors
                    * Ending up with a stream containing a stream
                    * `combine` and `merge` does not get the love they deserve
        * Thinking inside the box
            * Common metaphor, but "box" means "context" here
                * `Closure example`
            * Context matters
                * ?
                * There's a name for this construct:
            * Functors
                * Or: Oh, I've used these forever!
                * Why `observable.map(...)` works on single items
                    * Remember the marbles
            * Repackaging the box
            * `map`ping and `flatMap`ping
                * No magic involved
    * Excercise time!
        * Events into Streams:
            * Turning mouse movement into a stream
            * Reading keyboard input
        * Making a API request
            * jsonplaceholder
        * Combining and merging
            * Process mouse movement
        * Error handling
            * Turning a value into error
