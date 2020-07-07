# readable-ids

readable-ids is a JavaScript utility that generates ids you can understand.

If you've arrived here you may already have a use case. If not, you may be wondering what you could use this for. Think temporary lobby names for games, or session ids for chat rooms. The possibilities are endless. You can use this in place of something like uuid if you needs for avoiding collision aren't to demanding (details below).

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
