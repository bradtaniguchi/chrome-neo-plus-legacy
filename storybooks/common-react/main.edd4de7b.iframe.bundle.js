(self.webpackChunkchrome_neo_plus=self.webpackChunkchrome_neo_plus||[]).push([[179],{"./libs/common-react/src/lib sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/header-bar/header-bar.stories.tsx":"./libs/common-react/src/lib/components/header-bar/header-bar.stories.tsx","./components/side-nav/side-nav.stories.tsx":"./libs/common-react/src/lib/components/side-nav/side-nav.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./libs/common-react/src/lib sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./libs/common-react/src/lib sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./libs/common-react/src/lib sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./generated-stories-entry.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./libs/common-react/src/lib sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./libs/common-react/src/lib sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)},"./libs/common-react/src/lib/components/header-bar/header-bar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AuthenticatedEmptyExample:()=>AuthenticatedEmptyExample,Default:()=>Default,Empty:()=>Empty,WithSearchExample:()=>WithSearchExample,default:()=>header_bar_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),AccountCircle=__webpack_require__("./node_modules/@mui/icons-material/AccountCircle.js"),Menu=__webpack_require__("./node_modules/@mui/icons-material/Menu.js"),MoreVert=__webpack_require__("./node_modules/@mui/icons-material/MoreVert.js"),AppBar=__webpack_require__("./node_modules/@mui/material/AppBar/AppBar.js"),Toolbar=__webpack_require__("./node_modules/@mui/material/Toolbar/Toolbar.js"),header_bar_context_HeaderBarContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)(void 0),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function HeaderBar(props){return(0,jsx_runtime.jsx)(header_bar_context_HeaderBarContext.Consumer,{children:function children(headerBarContext){return(0,jsx_runtime.jsx)(Box.Z,{sx:{flexGrow:1},children:(0,jsx_runtime.jsx)(AppBar.Z,{position:"sticky",children:(0,jsx_runtime.jsxs)(Toolbar.Z,{children:[props.hideHamburger?null:(0,jsx_runtime.jsx)(IconButton.Z,{size:"large",edge:"start",color:"inherit","aria-label":"hamburger-menu",sx:{mr:2},onClick:props.onHamburgerClick,children:(0,jsx_runtime.jsx)(Menu.Z,{})}),(0,jsx_runtime.jsx)(Typography.Z,{component:"div",sx:{flexGrow:1},children:props.children?props.children:headerBarContext}),props.hideMenu?null:(0,jsx_runtime.jsx)(IconButton.Z,{size:"large",edge:"end",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:props.onMenuClick,children:(0,jsx_runtime.jsx)(MoreVert.Z,{})})]})})})}})}try{HeaderBar.displayName="HeaderBar",HeaderBar.__docgenInfo={description:'The header-bar component provides a basic interface layout implementation for\na mui based "app-bar". However, this version includes a few specific setups\nthat are almost always used. Namely a responsive "hamburger" button, and\nan integrated context-provider that can be used to "provide" an internal\nimplementation of a component, such as a "search-bar" or other UI based\nactions within the center of the screen.\n\nTo correctly leverage this component, you **must** provide the\nHeaderBarContext.Provider at the "top-level" of your app, usually App.',displayName:"HeaderBar",props:{hideHamburger:{defaultValue:null,description:"Hide the hamburger menu on the left.\n\nUsually only done for responsive reasons.",name:"hideHamburger",required:!1,type:{name:"boolean"}},onHamburgerClick:{defaultValue:null,description:"Callback called when the hamburger menu on the left is called",name:"onHamburgerClick",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},onMenuClick:{defaultValue:null,description:"Callback called when three-dot menu on the right is called.",name:"onMenuClick",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},hideMenu:{defaultValue:null,description:"Hide the three-dot menu on the right.",name:"hideMenu",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Children to display, will override the context display.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/common-react/src/lib/components/header-bar/header-bar.tsx#HeaderBar"]={docgenInfo:HeaderBar.__docgenInfo,name:"HeaderBar",path:"libs/common-react/src/lib/components/header-bar/header-bar.tsx#HeaderBar"})}catch(__react_docgen_typescript_loader_error){}try{HeaderBarContext.displayName="HeaderBarContext",HeaderBarContext.__docgenInfo={description:"Context used in conjunction with the HeaderBar component,\nallows child components to update the header-bar for the page-needs dynamically.",displayName:"HeaderBarContext",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/common-react/src/lib/components/header-bar/header-bar.tsx#HeaderBarContext"]={docgenInfo:HeaderBarContext.__docgenInfo,name:"HeaderBarContext",path:"libs/common-react/src/lib/components/header-bar/header-bar.tsx#HeaderBarContext"})}catch(__react_docgen_typescript_loader_error){}const header_bar_stories={component:HeaderBar,title:"HeaderBar",argTypes:{onHamburgerClick:{action:"onHamburgerClick"},onMenuClick:{action:"onMenuClick"}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(HeaderBar,Object.assign({},args))},Default=Template.bind({});Default.args={};var Empty=Template.bind({});Empty.args={hideHamburger:!0,hideMenu:!0};var AuthenticatedEmptyExample=Template.bind({});AuthenticatedEmptyExample.args={},AuthenticatedEmptyExample.decorators=[function(Story){return(0,jsx_runtime.jsx)(header_bar_context_HeaderBarContext.Provider,{value:(0,jsx_runtime.jsxs)(Box.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"row"},children:[(0,jsx_runtime.jsx)(Typography.Z,{component:"div",sx:{flexGrow:1},children:(0,jsx_runtime.jsx)("div",{children:"Authenticated Example"})}),(0,jsx_runtime.jsx)(IconButton.Z,{size:"large",edge:"start",color:"inherit","aria-label":"Authenticated User Icon",children:(0,jsx_runtime.jsx)(AccountCircle.Z,{})})]}),children:(0,jsx_runtime.jsx)(Story,{})})}];var WithSearchExample=Template.bind({});WithSearchExample.args={},Default.parameters=Object.assign({storySource:{source:"(args) => <HeaderBar {...args} />"}},Default.parameters),Empty.parameters=Object.assign({storySource:{source:"(args) => <HeaderBar {...args} />"}},Empty.parameters),AuthenticatedEmptyExample.parameters=Object.assign({storySource:{source:"(args) => <HeaderBar {...args} />"}},AuthenticatedEmptyExample.parameters),WithSearchExample.parameters=Object.assign({storySource:{source:"(args) => <HeaderBar {...args} />"}},WithSearchExample.parameters)},"./libs/common-react/src/lib/components/side-nav/side-nav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicTextList:()=>BasicTextList,default:()=>side_nav_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js");var ListItem=__webpack_require__("./node_modules/@mui/material/ListItem/ListItem.js"),ListItemButton=__webpack_require__("./node_modules/@mui/material/ListItemButton/ListItemButton.js"),ListItemText=__webpack_require__("./node_modules/@mui/material/ListItemText/ListItemText.js"),Box=(__webpack_require__("./node_modules/core-js/modules/es.string.anchor.js"),__webpack_require__("./node_modules/@mui/material/Box/Box.js")),Drawer=__webpack_require__("./node_modules/@mui/material/Drawer/Drawer.js"),List=__webpack_require__("./node_modules/@mui/material/List/List.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),ListItemIcon=__webpack_require__("./node_modules/@mui/material/ListItemIcon/ListItemIcon.js"),ChevronLeft=__webpack_require__("./node_modules/@mui/icons-material/ChevronLeft.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function SideNav(props){var _props$anchor;return(0,jsx_runtime.jsx)(Drawer.ZP,{anchor:null!=(_props$anchor=props.anchor)?_props$anchor:"left",open:props.opened,onClose:props.onClose,children:(0,jsx_runtime.jsx)(Box.Z,{sx:{width:"bottom"===props.anchor?"auto":250},role:"presentation",children:(0,jsx_runtime.jsxs)(List.Z,{children:[(0,jsx_runtime.jsx)(ListItem.ZP,{disablePadding:!0,sx:{minHeight:"64px"},children:(0,jsx_runtime.jsx)(ListItemButton.Z,{onClick:props.onClose,children:(0,jsx_runtime.jsx)(ListItemIcon.Z,{children:(0,jsx_runtime.jsx)(ChevronLeft.Z,{})})})}),(0,jsx_runtime.jsx)(Divider.Z,{}),props.items||[]]})})})}try{SideNav.displayName="SideNav",SideNav.__docgenInfo={description:"",displayName:"SideNav",props:{anchor:{defaultValue:{value:"'left'"},description:"The side the side-nav is to be displayed on.\nTop is also an option, but this will not be used.",name:"anchor",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'}]}},opened:{defaultValue:null,description:"If the side-nav is opened",name:"opened",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Array of items to be displayed within the `List`\nof the nav",name:"items",required:!1,type:{name:"ReactNode[]"}},onClose:{defaultValue:null,description:"When the side-nav emits the close event.",name:"onClose",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/common-react/src/lib/components/side-nav/side-nav.tsx#SideNav"]={docgenInfo:SideNav.__docgenInfo,name:"SideNav",path:"libs/common-react/src/lib/components/side-nav/side-nav.tsx#SideNav"})}catch(__react_docgen_typescript_loader_error){}const side_nav_stories={component:SideNav,title:"SideNav",argTypes:{onClose:{action:"onClose"}}};var BasicTextList=function Template(args){return(0,jsx_runtime.jsx)(SideNav,Object.assign({},args))}.bind({});BasicTextList.args={opened:!0,items:["Item 1","Item 2"].map((function(text){return(0,jsx_runtime.jsx)(ListItem.ZP,{disablePadding:!0,children:(0,jsx_runtime.jsx)(ListItemButton.Z,{children:(0,jsx_runtime.jsx)(ListItemText.Z,{primary:text})})},text)}))},BasicTextList.parameters=Object.assign({storySource:{source:"(args) => <SideNav {...args} />"}},BasicTextList.parameters)},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[109],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-a11y/dist/esm/a11yRunner.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-a11y/dist/esm/a11yHighlight.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js"))));__webpack_require__.O()}]);