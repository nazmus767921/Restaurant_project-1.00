# Restaurant Front-end Development Project

_for Logitech Web Developer contest powered by Weero._
_To View Live Website:_ [Click Here](https://res2rant.netlify.app)

### Developer

- Designer : Nazmus Sakib
- Developer : Nazmus Sakib

### Social Links

1. Github : [nazmus767921](#)
2. LinkedIn : [nazmus767921](www.linkedin.com/in/nazmus767921)
3. Gmail: nazmus767921@gmail.com

### Important Code insights

1.  **Get Cursive style**

- \*\*\* at the beginning of the sentence makes the whole sentence or line cursive.
- \*\* at the end of any word makes that word only cursive.
- \*\*# at the end of any word makes that word only colored cursive.

**Add this class to index.css file**

```css
.cursive {
	font-family: "YourDesiredFontFamily", cursive;
}
```
**Then use it anywhere like this**

```javascript
import { getCursiveStyle } from "./src/utils/helpers/getCursiveStyle.jsx";

const myText = "This is my word*** which I want want to get styled cursive"

<h2>{getCursiveStyle(myText)}</h2>;
```
