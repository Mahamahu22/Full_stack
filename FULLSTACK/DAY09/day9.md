Task: Simple Explanation of DOM Topics

 insertAdjacentElement:
This adds a new *HTML element* next to an existing one. You choose where to insert it: before, after, inside, etc.

Example: Add a new <div> before a button.

---

 insertAdjacentHTML:
This adds *HTML code* (as a string) into a webpage. It becomes real HTML.

Example: Add <p>Hello</p> into a page using JavaScript.

---

 insertAdjacentText:
This adds *just text* (not HTML). It shows exactly as typed.

Example: Add the word "Hello" into a page (not a paragraph tag).

---

 Client and Offset Properties:
These tell us about the *size* and *position* of elements.

- clientHeight: height of the element without border.
- offsetTop: distance from the top of its parent.

---

 boundingRect:
This gives the *position and size* of an element on the screen — like where it appears and how big it is.

---

 Scroll Functions:
These help move the page or bring things into view.

- scrollTo(x, y): Moves to a spot on the page.
- scrollBy(x, y): Moves from where you are.
- scrollIntoView(): Scrolls until the element is visible.
