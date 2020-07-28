# readable-ids

readable-ids is a JavaScript utility that generates ids you can understand.

If you've arrived here you may already have a use case. If not, you may be wondering what you could use this for. Think temporary lobby names for games, or session ids for chat rooms. The possibilities are endless. You can use this in place of something like uuid if you needs for avoiding collision aren't to demanding (details below).

:x: `http://yourawesomechat.com/room/1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed`

:thumbsup: `http://yourawesomechat.com/room/alluring-landscape`

:x: `http://yourscarygame.com/lobby/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d`

:thumbsup: `http://yourscarygame.com/lobby/desolate-ruins`

## Usage

```
npm install readable-ids
```

In your project you can import the library like so:

```
import createId from 'readable-ids'
```

Invoke the function anywhere you need an ID!

```
createId()
```

## Themes and Configuration
The `createId()` function accepts an optional configuration object which accepts two arguments, `theme` and `useNumbers`. You can use them like so:

```
createId({theme: 'dark'}) // silent-chamber
createId({theme: 'dark', useNumbers: true}) // hidden-abyss-27 
createId({theme: 'random'}) // perplexed-sloth
createId({theme: 'random', useNumbers: true}) // inquisitive-platypus-62
```

Calling `createId()` without the optional configuration object defaults to the following behavior: `createId({theme: 'default', useNumbers: false})`

## Namespace
Both `default` and `dark` themes contain 48 adjectives and 24 nouns, whereas the `random` theme contains 32 adjectives and 16 nouns. By leveraging the `useNumbers` argument, which returns a number between 0 and 64, we can increase the number of possibilities significantly, see below for more detailed information.

### Possibilities
Theme | `useNumbers: false` | `useNumbers: true`
--- | --- | ---
default | 1,152 | 73,728
dark | 1,152 | 73,728
random | 512 | 32,768
