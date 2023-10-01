### takeSpan function

**Parameters:**

- `dataString`: The string to be processed.
- `desiredCutPart`: The string to be wrapped in a span element.
- `spanClassName`: The CSS class name to be added to the span element.

**Returns:**

A JSX element that contains the `dataString` with the `desiredCutPart` wrapped in a span element with the `spanClassName` class name.

**Example:**

```javascript
const dataString = "This is a test string.";
const desiredCutPart = "test";
const spanClassName = "my-span-class";

const jsxElement = takeSpan(dataString, desiredCutPart, spanClassName);

console.log(jsxElement); // Outputs: <span>This is a <span class="my-span-class">test</span> string.</span>


**Usage:**

The `takeSpan` function can be used to highlight specific parts of a string, or to add additional HTML attributes to specific parts of a string. For example, you could use the `takeSpan` function to highlight the search term in a search results page, or to add a tooltip to a specific word in a product description.

**Example:**

javascript
const searchResults = [
  "This is the first search result.",
  "This is the second search result.",
  "This is the third search result.",
];

const searchTerm = "search";

const searchResultsWithHighlights = searchResults.map((searchResult) => {
  return takeSpan(searchResult, searchTerm, "search-highlight");
});

console.log(searchResultsWithHighlights); // Outputs: ["This is the <span class="search-highlight">search</span> result.", "This is the second <span class="search-highlight">search</span> result.", "This is the third <span class="search-highlight">search</span> result."]

```
*developer*: [`github.com/nazmus767921`](github.com/nazmus767921)
