(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[638],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?l.createElement(g,o(o({ref:t},u),{},{components:n})):l.createElement(g,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},589:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var l=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],r={id:"selecting",title:"Selecting",sidebar_label:"Selecting"},s={unversionedId:"user_manual/selecting",id:"user_manual/selecting",isDocsHomePage:!1,title:"Selecting",description:"You can select specific areas of your sprite to make changes at. When there is an available selection, any operation such as drawing, shading and image effect application will only affect the selected part(s) of the drawing. Selections also allow you to easily apply transformations to specific parts of the image, such as moving and scaling. An active selection is denoted by a marching ants effect around the selected pixels.",source:"@site/docs/user_manual/selecting.md",sourceDirName:"user_manual",slug:"/user_manual/selecting",permalink:"/Pixelorama-Docs/user_manual/selecting",editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/selecting.md",version:"current",lastUpdatedBy:"Manolis Papadeas",lastUpdatedAt:1627317535,formattedLastUpdatedAt:"7/26/2021",sidebar_label:"Selecting",frontMatter:{id:"selecting",title:"Selecting",sidebar_label:"Selecting"},sidebar:"docs",previous:{title:"Palettes",permalink:"/Pixelorama-Docs/user_manual/palettes"},next:{title:"Shading",permalink:"/Pixelorama-Docs/user_manual/shading"}},c=[{value:"Selection Tools",id:"selection-tools",children:[]},{value:"Modifying Selections",id:"modifying-selections",children:[{value:"Selecting All",id:"selecting-all",children:[]},{value:"Clearing Selection",id:"clearing-selection",children:[]},{value:"Inverting Selection",id:"inverting-selection",children:[]}]},{value:"Copy, Paste, Cut and Delete",id:"copy-paste-cut-and-delete",children:[]},{value:"Selection Preferences",id:"selection-preferences",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can select specific areas of your sprite to make changes at. When there is an available selection, any operation such as drawing, shading and image effect application will only affect the selected part(s) of the drawing. Selections also allow you to easily ",(0,i.kt)("a",{parentName:"p",href:"transforming"},"apply transformations to specific parts of the image, such as moving and scaling"),". An active selection is denoted by a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Marching_ants"},"marching ants effect")," around the selected pixels."),(0,i.kt)("h2",{id:"selection-tools"},"Selection Tools"),(0,i.kt)("p",null,"You can use one of the available selection tools in Pixelorama. Each tool selects things slightly differently."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Shortcut"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rectangular Selection"),(0,i.kt)("td",{parentName:"tr",align:null},"Create a rectangular selection."),(0,i.kt)("td",{parentName:"tr",align:null},"L: ",(0,i.kt)("kbd",null,"R"),", R: ",(0,i.kt)("kbd",null," Alt + R"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Elliptical Selection"),(0,i.kt)("td",{parentName:"tr",align:null},"Create an elliptical selection."),(0,i.kt)("td",{parentName:"tr",align:null},"L: ",(0,i.kt)("kbd",null,"Y"),", R: ",(0,i.kt)("kbd",null," Alt + Y"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Polygonal Selection"),(0,i.kt)("td",{parentName:"tr",align:null},"Create a polygonal selection. Click where you want each point of the polygon to be. Double click to end your polygon and finalize your selection area."),(0,i.kt)("td",{parentName:"tr",align:null},"L: ",(0,i.kt)("kbd",null,"K"),", R: ",(0,i.kt)("kbd",null," Alt + K"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Select By Color"),(0,i.kt)("td",{parentName:"tr",align:null},"Selects all parts of the cel that share the same color."),(0,i.kt)("td",{parentName:"tr",align:null},"L: ",(0,i.kt)("kbd",null,"W"),", R: ",(0,i.kt)("kbd",null," Alt + W"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Magic Wand"),(0,i.kt)("td",{parentName:"tr",align:null},"Selects the neighboring same-color area of the pixel the cursor was in on mouse button press."),(0,i.kt)("td",{parentName:"tr",align:null},"L: ",(0,i.kt)("kbd",null,"Q"),", R: ",(0,i.kt)("kbd",null," Alt + Q"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lasso / Free Select Tool"),(0,i.kt)("td",{parentName:"tr",align:null},"Selects a rough outline of an area."),(0,i.kt)("td",{parentName:"tr",align:null},"L: ",(0,i.kt)("kbd",null,"F"),", R: ",(0,i.kt)("kbd",null," Alt + F"))))),(0,i.kt)("p",null,"Similar to the ",(0,i.kt)("a",{parentName:"p",href:"drawing"},"shape drawing tools"),", you can use keyboard shortcuts to modify how the rectangular and elliptical selections are being created."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mouse click + ",(0,i.kt)("kbd",null,"Shift")," = Create a 1:1 (square/circle) selection."),(0,i.kt)("li",{parentName:"ul"},"Mouse click + ",(0,i.kt)("kbd",null,"Control")," = Create a selection that expands from center."),(0,i.kt)("li",{parentName:"ul"},"Mouse click + ",(0,i.kt)("kbd",null,"Alt")," = Displaces the origin of the selection.")),(0,i.kt)("p",null,"You can also easily change the selection's position and size from the tool options, if you have a selection tool pressed. Keep in mind that if there is an active transformation, the content inside the selected parts will be affected as well. Otherwise, these options only affect the selection itself and not its content."),(0,i.kt)("h2",{id:"modifying-selections"},"Modifying Selections"),(0,i.kt)("p",null,"The selection tools also give you the ability to modify the already existing selection, by either adding to it, removing from it or creating intersections. By default, the selection tools replace the already existing selection with a new one. Keep in mind that you have to ",(0,i.kt)("strong",{parentName:"p"},"press the keyboard modifiers first before the mouse button is pressed.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Shift")," + Mouse click = Add to selection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Control")," + Mouse click = Subtract from selection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Shift")," + ",(0,i.kt)("kbd",null,"Ctrl")," + Mouse click = Create selection intersection.")),(0,i.kt)("h3",{id:"selecting-all"},"Selecting All"),(0,i.kt)("p",null,"You can easily select the entire canvas by either pressing ",(0,i.kt)("kbd",null,"Control + A"),", or by going to the Select menu and pressing ",(0,i.kt)("strong",{parentName:"p"},"All"),"."),(0,i.kt)("h3",{id:"clearing-selection"},"Clearing Selection"),(0,i.kt)("p",null,"If you want to delete the entire selection, the easiest way is to deselect everything. You can do that by either pressing ",(0,i.kt)("kbd",null,"Control + D"),", or by going to the Select menu and pressing ",(0,i.kt)("strong",{parentName:"p"},"Clear"),". If you have the rectangular selection, elliptical selection, magic wand or lasso tools selected, clicking anywhere outside the canvas also clears the selection."),(0,i.kt)("h3",{id:"inverting-selection"},"Inverting Selection"),(0,i.kt)("p",null,"Inverting the selection means that all of the currently selected pixels will get deselected, while all of the unselected pixels will get selected. You can do this by either pressing ",(0,i.kt)("kbd",null,"Control + I"),", or going to the Select menu and pressing ",(0,i.kt)("strong",{parentName:"p"},"Invert"),". If you have everything selected, inverting will clear the selection. Likewise, if you have nothing selecting, inverting will select everything."),(0,i.kt)("h2",{id:"copy-paste-cut-and-delete"},"Copy, Paste, Cut and Delete"),(0,i.kt)("p",null,"If you have an active selection, you can copy its contents by pressing ",(0,i.kt)("kbd",null,"Control + C"),". Then, you can paste it whenever you like, either on the same cel, on another cel or even a completely different project with ",(0,i.kt)("kbd",null,"Control + V"),". Pasting will create a new transformation which will be created on the same position as the original selection was when it was copied, but you will easily be able to move it to where you want. Keep in mind that copy/paste ",(0,i.kt)("strong",{parentName:"p"},"does not")," work at an Operating System level. Meaning, you won't be able to copy/paste image data between different applications on your device."),(0,i.kt)("p",null,"You can also easily delete the selected content with the ",(0,i.kt)("kbd",null,"Delete")," key. You can also cut with ",(0,i.kt)("kbd",null,"Control + X"),". Cut basically copies the selected content and then immediately deletes it."),(0,i.kt)("p",null,"Keep in mind that all of these operations only affect the currently selected cel and not the entire layer as of right now. You can also use the Edit menu to find these options instead of using keyboard shortcuts."),(0,i.kt)("h2",{id:"selection-preferences"},"Selection Preferences"),(0,i.kt)("p",null,"Under Edit -> Preferences -> Selection, you will find options to change the colors of the marching ants effect, as well as toggling its animation on or off."))}d.isMDXComponent=!0}}]);