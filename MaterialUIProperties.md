# Know all the properties of various components in Material UI

Material UI Components do have default properties but one can style ui elements using various properties that can be passed as props to the jsx component.  

## The sx property:  
sx property is a shortcut to editing the default theme that is applied to the ui component. This doesnt need any CSS file to handle it hence making it easier to edit the element on the go. The sx property has access to all the css properties and hence supports various changes.  

***syntax***
<Tag sx={{property1: value1, property2: value2, ...}}>
//content
<Tag/>

### Properties handled by sx prop:  

#### 1. Theme Aware Properties:  

**display:** The display property is used to modify the display property available in CSS. This display tag can take various values such as: block, inline, inline-block, etc.  

**Hiding an Element:**

