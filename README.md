
# Game of Life

ES6+JSX / React / Redux implementation of [game of life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life).

## Intro
Very fun challenge, definitely the most interesting one I've done so far. Really enjoyed working on it.

## Time
In total this took me about 5 hours, split between two days. I'm limited to Windows right now, so initially a bit slower than usual, but not by much.

First two hours to get the main grid and Game of Life rules working through Redux. Next was building the interface controls. Final hour or so was mostly for cleaning up and styling.

## Todo
* Make app responsive
* More adjustable settings (cell size, update delay, etc)
* Ability to draw with mouse continously instead of only by individual clicks
* Ability to insert some known [patterns](https://en.wikipedia.org/wiki/Conway's_Game_of_Life#Examples_of_patterns) could be fun

## My Beautiful Code
Biggest challenge for me was deciding on the architecture, where to put the game logic, timer logic, etc. React wouldn't really be my library of choice for something like this. Since I'm also used to working with game libraries, initially it was a bit hard to think the React way instead of the game development way.

I'm mostly satisfied with how it turned out, with the game logic being in the reducers. The timers being handled in the Controls component was probably not the smartest thing to do. In a larger project this might become confusing.
