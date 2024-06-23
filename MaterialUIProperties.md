# Know all the properties of various components in Material UI

Material UI Components do have default properties but one can style ui elements using various properties that can be passed as props to the jsx component.

## The sx property:

sx property is a shortcut to editing the default theme that is applied to the ui component. This doesnt need any CSS file to handle it hence making it easier to edit the element on the go. The sx property has access to all the css properties and hence supports various changes.

**_syntax_**
| Tag sx={{property1: value1, property2: value2, ...}} |
//content
| Tag/ |

### Properties handled by sx prop:

#### 1. Theme Aware Properties:

##### **display:**  
The display property is used to modify the display property available in CSS. This display tag can take various values such as: block, inline, inline-block, etc.

###### Responsive Element Hiding:  
  
| **Screen Size**| **Property**        | **syntax**                                           |  
|----------------|---------------------|------------------------------------------------------|  
| ALL            | HIDE                | sx={{display='none'}}                                |  
| xs             | HIDE                | sx={{display={xs: 'none'}}}                          |  
| xs             | VIEW                | sx={{display={xs: 'block'}}}                         |  

all these follow the same patterns for xs, sm, md, lg, xl screen variants.  
note that a same element have various display properties for various sizes who's decralartions are same as the above table.  

#### FLEXBOX  
{using this fixes mostly everything lol}  
Flex is a display property in html with a lot of applications. In this section we understand what properties this flex provides in mui. MUI provides flex same as html but also provides 'inline-flex' as well which takes only the space it needs.  

General Properties:  
***flexDirection, flexWrap, justifyContent, alignItems, alignContent***  

**important properties for justifyContent:**  
https://mui.com/system/flexbox/

Properties for Children in Flex in MUI  
**1.Order:** used to specify the order in which things can be arranged.  
***syntax***  
sx={{order: someNumber}}  

**2.Flex Grow:** increases size of a element within flexbox property relative to others.  
***syntax***  
sx={{flexGrow: someNumber}} --> Default one ie equal size as others.  

**3.Flex Shrink:** decreases size of element within flexbox property relative to others.  
***syntax***  
sx={{flexShrink: someNumber}} --> Default 1


###### Other display properties:  

**overflow:** this allows for slider to appear or disappear for the element. 
***syntax***  
sx={{overflow: 'hidden'}} or sx={{overflow: 'auto'}}  

##### **position:**  
This is used to configure the position of the element. Can take values such as relative, static, absolute, fixed, sticky, etc. For position one can assign **z-index** in html to make elements appear above or below or one same vertical plane as another. MUI provides two zIndex values: tooltip and modal.   

***syntax***  
sx={{zIndex: 'tooltip'}}  //this appears on top.  
sx={{zIndex: 'modal'}}   //this appears on the bottom.


