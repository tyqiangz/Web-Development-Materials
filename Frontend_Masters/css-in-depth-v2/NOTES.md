# CSS In-Depth V2 by Estelle Weyl on FrontEnd Masters <a class="top"></a>

Course website: https://frontendmasters.com/courses/css-in-depth-v2, https://estelle.github.io/

Table of all selectors and their meaning: https://www.w3schools.com/cssref/css_selectors.asp

**Table of contents**
- [Relational Selectors in CSS](#relational-selectors)
- [Attribute Selectors](#attribute-selectors)
- [UI element states pseudo-classes](#ui-class)
- [Structural selectors](#structural-selectors)

## Relational Selectors in CSS <a id="relational-selectors"></a>
Website: https://www.w3schools.com/css/css_combinators.asp
- Descendant selector (space): `E P` selects all children `P` and nested children of `E`
- Child selector (>): `E > P` selects all direct children `P` of `E`
- Adjacent sibling selector (+): `E + P` selects element(s) `P` in the same level as `E` and directly after `E`.
- General sibling selector (~): `E + P` selects element(s) `P` in the same level as `E` and after `E`.

They describe the relationship between 2 selectors.

[Back to top](#top)

## Attribute Selectors <a id="attribute-selectors"></a>
Website: https://www.w3schools.com/css/css_attribute_selectors.asp

| Selector	| Example | Example description|
|-----------|---------|--------------------|
|[attribute]|[target] |	Selects all elements with a target attribute|
|[attribute=value]	  |[target=_blank]	|Selects all elements with target="_blank"|
|[attribute~=value]	  |[title~=flower]	|Selects all elements with a title attribute containing the word "flower"|
|[attribute\|=value]	|[lang\|=en]	|Selects all elements with a lang attribute value starting with "en"|
|[attribute^=value]	|a[href^="https"]	|Selects every <a> element whose href attribute value begins with "https"|
|[attribute$=value]	|a[href$=".pdf"]	|Selects every <a> element whose href attribute value ends with ".pdf"|
|[attribute*=value]	|a[href*="w3schools"]	|Selects every <a> element whose href attribute value contains the substring "w3schools"|

[Back to top](#top)

## UI element states pseudo-classes <a id="ui-class"></a>
- `:default`, `:valid`, `:invalid`, `:required`, `:optional`, `:in-range`, `:out-of-range`, `:read-only`, `:read-write`, `:placeholder-shown`

## Structural Selectors <a id="structural-selectors"></a>
- Target elements on the page based on their relationships to other elements in the DOM.
- Updates dynamically if page updates.

## Shapes of CSS
https://css-tricks.com/the-shapes-of-css/
- A website that shows how different shapes can be created using CSS.

## Specificity
<img src="./specifishity.png" alt="A cartoon explaining CSS specificity">

[Back to top](#top)
