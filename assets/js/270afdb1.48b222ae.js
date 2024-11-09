"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[362],{4286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"user_manual/user_interface/timeline","title":"The Timeline","description":"The timeline\'s main purpose is to help you with creating animations. It is composed of frames, which are used for creating animations, and layers, which help you separate your frames in different parts. Each frame is essentially a collection of multiple layers, and each individual intersection of a frame and a layer is called a cel. All frames have the same amount of layers.","source":"@site/docs/user_manual/user_interface/timeline.md","sourceDirName":"user_manual/user_interface","slug":"/user_manual/user_interface/timeline","permalink":"/Pixelorama-Docs/user_manual/user_interface/timeline","draft":false,"unlisted":false,"editUrl":"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/user_interface/timeline.md","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1731101663000,"frontMatter":{"id":"timeline","title":"The Timeline","sidebar_label":"The Timeline"},"sidebar":"docs","previous":{"title":"The Canvas","permalink":"/Pixelorama-Docs/user_manual/user_interface/canvas"},"next":{"title":"Save and Export","permalink":"/Pixelorama-Docs/user_manual/save_and_export"}}');var a=n(4848),o=n(8453);const r={id:"timeline",title:"The Timeline",sidebar_label:"The Timeline"},s=void 0,l={},h=[{value:"Animation",id:"animation",level:2},{value:"FPS",id:"fps",level:3},{value:"Loop modes",id:"loop-modes",level:3},{value:"Onion skinning",id:"onion-skinning",level:3},{value:"Layers",id:"layers",level:2},{value:"Frames",id:"frames",level:2},{value:"Frame tags",id:"frame-tags",level:3},{value:"Cels",id:"cels",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The timeline's main purpose is to help you with creating animations. It is composed of frames, which are used for creating animations, and layers, which help you separate your frames in different parts. Each frame is essentially a collection of multiple layers, and each individual intersection of a frame and a layer is called a ",(0,a.jsx)(t.a,{href:"../../concepts/cel",children:"cel"}),". All frames have the same amount of layers.\n",(0,a.jsx)(t.img,{alt:"Screenshot of Pixelorama&#39;s timeline",src:n(814).A+"",width:"1383",height:"493"})]}),"\n",(0,a.jsx)(t.h2,{id:"animation",children:"Animation"}),"\n",(0,a.jsxs)(t.p,{children:["To preview your animation, you can click on the ",(0,a.jsx)(t.code,{children:"Play"})," button (or press ",(0,a.jsx)("kbd",{children:"F5"}),") located on the top right side of the timeline. The button on the left (mapped to ",(0,a.jsx)("kbd",{children:"F4"}),") is used to preview the animation backward."]}),"\n",(0,a.jsx)(t.h3,{id:"fps",children:"FPS"}),"\n",(0,a.jsxs)(t.p,{children:["On the top and far right side of the timeline, you will see a number, which has the default value of 6. This is the FPS, which stands for ",(0,a.jsx)(t.code,{children:"Frames Per Second"}),". To put it simply, this is the speed of the animation and it determines how many frames are being shown for every second. Having a value of 6 FPS, for example, will display 6 frames every second the animation is running."]}),"\n",(0,a.jsxs)(t.p,{children:["For more details, you can read this ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Frame_rate",children:"Wikipedia article"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"loop-modes",children:"Loop modes"}),"\n",(0,a.jsx)(t.p,{children:"The button located directly on the left of the FPS is used to change the animation loop mode. There are three loop modes:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Cycle loop. When the animation reaches the final frame, it will start playing again from the first frame. This is the default option."}),"\n",(0,a.jsx)(t.li,{children:"Ping-pong. When the animation reaches the final frame, it begins playing backward, starting from that final frame. When it reaches the first frame, it will again start playing forward until it reaches the final frame, and so on."}),"\n",(0,a.jsx)(t.li,{children:"No loop. When the animation reaches the final frame, it simply stops playing."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"onion-skinning",children:"Onion skinning"}),"\n",(0,a.jsxs)(t.p,{children:["Directly on the left of the loop mode button, you will find two buttons used for onion skinning. Onion skinning is useful for animations because it's a simple and easy way to preview the previous and next frames at the same time as the frame you are currently editing. For more details, you can read this ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Onion_skinning",children:"Wikipedia article"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The button on the right simply toggles onion skinning on and off, and the one on the left brings up options, like the amount of past (previous) and future (next) frames that appear, and blue-red mode, which tints the previous frames blue, and the next frames red."}),"\n",(0,a.jsx)(t.admonition,{title:"ignore onion skinning",type:"tip",children:(0,a.jsx)(t.p,{children:'If you want a layer to ignore onion skinning simply add the "_io" suffix in its name.'})}),"\n",(0,a.jsx)(t.h2,{id:"layers",children:"Layers"}),"\n",(0,a.jsx)(t.p,{children:"On the left side of the timeline, you will see the layer buttons. Clicking on a layer button will select the current layer. Double-clicking will let you change the name of that layer. Right clicking a layer button will open up a menu, with options such as the layer's properties, and whether it's a clipping mask or not."}),"\n",(0,a.jsx)(t.p,{children:"The layer buttons have three more buttons on them. The first toggles the layer's visibility. While invisible, the layer cannot be edited by the user. It will also remain invisible on export. The second locks and unlocks the layer. If the layer is locked, it cannot be edited by the user, but it does remain visible. The third button is used to automatically link the new cels that are being created. If it's toggled on, it is essentially a fast way to create linked cels."}),"\n",(0,a.jsx)(t.p,{children:"There are 7 more buttons located on top of the layers. These, in order of appearance: add a new layer, remove the currently active layer, move the current layer up and down, clone the current layer, merge the current layer with the one directly below it, and open up a dialog for layer effects. Below these buttons, you can change the selected layer's blend mode and opacity."}),"\n",(0,a.jsx)(t.h2,{id:"frames",children:"Frames"}),"\n",(0,a.jsx)(t.p,{children:"Directly above the cels, you will notice some buttons with each one having a number. These are the frame buttons, and the number they have is their order in the animation."}),"\n",(0,a.jsx)(t.p,{children:"Clicking on a frame button will select that frame, and right-clicking a frame button will open up a menu. The menu options include frame properties, remove frame, clone frame, move frame to the left, move frame to the right, new tag, reverse frames (only works when multiple frames are selected), and center frames. Clicking on frame properties brings up a window that lets you change the duration of that frame, as well as set custom user-defined data."}),"\n",(0,a.jsx)(t.admonition,{title:"frame duration",type:"tip",children:(0,a.jsx)(t.p,{children:"By default, the duration of each frame is set to 1x, which means it will take exactly as much time as the timeline FPS (frames per second). Setting it to 2x, for example, that frame will take twice as much time, while setting it to 0.5x will take half the time, meaning it will play out faster."})}),"\n",(0,a.jsx)(t.p,{children:"You can also drag and drop frame buttons to re-arrange them. This will also affect their corresponding cels."}),"\n",(0,a.jsx)(t.p,{children:"On the top side of the timeline, you will find frame-related buttons which offer the same functionality as the frame button right-click menu, like adding, removing, cloning and moving frames."}),"\n",(0,a.jsx)(t.h3,{id:"frame-tags",children:"Frame tags"}),"\n",(0,a.jsx)(t.p,{children:"Frame tags are used to organize different parts of your animated sprite. Those parts can also be exported independently using frame tags."}),"\n",(0,a.jsx)(t.p,{children:'To create a new tag, you can right click on a frame button and select "New Tag". A popup will appear that lets you set a name for the tag, a color, the starting (from) and ending (to) frame, as well as custom user-defined data.'}),"\n",(0,a.jsx)(t.p,{children:"To edit an already existing tag, you can click on its name on the timeline, above the frame area. You can quickly move and resize it by dragging its edges."}),"\n",(0,a.jsx)(t.p,{children:'If "Animation plays only on frames of the same tag" is toggled on in the timeline options, then, when you preview your animation, it will only preview the frames that belong on the same tag as the currently selected frame. This is a great way to preview parts of your animation separately.'}),"\n",(0,a.jsx)(t.h2,{id:"cels",children:"Cels"}),"\n",(0,a.jsxs)(t.p,{children:["Cels are the intersection of layers and frames. For a more detailed explanation, you can ",(0,a.jsx)(t.a,{href:"../../concepts/cel",children:"read this page"}),". To select a cel in order to draw on it, you can left-click on their respective button. The cel buttons take the most space in the timeline, and they are located to the right of the layer buttons and below the frame buttons. They also have a small preview of their image data on them."]}),"\n",(0,a.jsx)(t.p,{children:"Right-clicking on a cel button will bring up a menu, with options such as properties, link (or unlink) cel, and delete, which clears the content of the cel, making it fully transparent. In the cel properties, you can change their opacity (cel opacity is different than layer opacity), their z-index and also set custom user-defined data."}),"\n",(0,a.jsxs)(t.admonition,{title:"Selecting multiple cels",type:"tip",children:[(0,a.jsxs)(t.p,{children:["You can select/deselect multiple cels by holding the ",(0,a.jsx)("kbd",{children:"Control"})," key and left-clicking individual cels, or hold the ",(0,a.jsx)("kbd",{children:"Shift"})," key and left-click a cel to also select all of the cels between the one that was clicked and the one that has been selected last."]}),(0,a.jsxs)(t.p,{children:["This also works on frame and layer buttons. For example, selecting two frame buttons using ",(0,a.jsx)("kbd",{children:"Control"})," or ",(0,a.jsx)("kbd",{children:"Shift"})," will select all of their cels as well. The same is true for layer buttons."]})]}),"\n",(0,a.jsx)(t.admonition,{title:"Drag and drop",type:"tip",children:(0,a.jsx)(t.p,{children:"You can drag and drop layer, frame and cel buttons to re-arrange them. Re-arranging frame and layer buttons also affects their cels."})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},814:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/timeline_cels-d9f7ad2c7846e2d4ba13eacf1dbce2cb.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(6540);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);