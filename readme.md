## Functions

<dl>
<dt><a href="#setAlphaToHex">setAlphaToHex(hexColor, opacity)</a> ⇒</dt>
<dd><p>Set the alpha channel of a hex color to a specific value</p>
</dd>
<dt><a href="#fromColorNameToHex">fromColorNameToHex(colorName)</a> ⇒</dt>
<dd><p>Given a color name, return the hex value of that color (Works only on browsers)</p>
</dd>
<dt><a href="#toRGBAString">toRGBAString(rgba)</a> ⇒</dt>
<dd><p>Given an array of four numbers, return a string representing the color in RGBA format</p>
</dd>
<dt><a href="#fromColorHexToRGBA">fromColorHexToRGBA(colorHex)</a> ⇒</dt>
<dd><p>Given a color in hex format, convert it to an array of RGBA values</p>
</dd>
<dt><a href="#contrastingColor">contrastingColor(colorHex)</a> ⇒</dt>
<dd><p>Given a color in hex format, return the color that contrasts with it</p>
</dd>
<dt><a href="#luma">luma(colorHex)</a> ⇒</dt>
<dd><p>Given a color in hex format, return the luma of that color</p>
</dd>
</dl>

<a name="setAlphaToHex"></a>

## setAlphaToHex(hexColor, opacity) ⇒
Set the alpha channel of a hex color to a specific value

**Kind**: global function  
**Returns**: The hex color with the alpha value applied.  

| Param | Description |
| --- | --- |
| hexColor | the hex color code without the alpha value. |
| opacity | The opacity of the color. |

<a name="fromColorNameToHex"></a>

## fromColorNameToHex(colorName) ⇒
Given a color name, return the hex value of that color (Works only on browsers)

**Kind**: global function  
**Returns**: A string  

| Param | Description |
| --- | --- |
| colorName | The name of the color you want to convert to hex. |

<a name="toRGBAString"></a>

## toRGBAString(rgba) ⇒
Given an array of four numbers, return a string representing the color in RGBA format

**Kind**: global function  
**Returns**: A string.  

| Param | Description |
| --- | --- |
| rgba | an array of four numbers, each between 0 and 255, representing the red, green, blue, and alpha values of the color. |

<a name="fromColorHexToRGBA"></a>

## fromColorHexToRGBA(colorHex) ⇒
Given a color in hex format, convert it to an array of RGBA values

**Kind**: global function  
**Returns**: An array of four numbers.  

| Param | Description |
| --- | --- |
| colorHex | the hexadecimal color code, e.g. #FFF or #FFFFFF |

<a name="contrastingColor"></a>

## contrastingColor(colorHex) ⇒
Given a color in hex format, return the color that contrasts with it

**Kind**: global function  
**Returns**: The contrasting color is being returned.  

| Param | Description |
| --- | --- |
| colorHex | the color in hex format |

<a name="luma"></a>

## luma(colorHex) ⇒
Given a color in hex format, return the luma of that color

**Kind**: global function  
**Returns**: The luma value of the color.  

| Param | Description |
| --- | --- |
| colorHex | the hexadecimal value of the color you want to analyze. |

