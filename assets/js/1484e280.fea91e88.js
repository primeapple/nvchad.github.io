"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[344],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),c=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3515:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],r={},u=void 0,c={unversionedId:"config/Custom config",id:"config/Custom config",isDocsHomePage:!1,title:"Custom config",description:"How to make my own config?",source:"@site/docs/config/Custom config.md",sourceDirName:"config",slug:"/config/Custom config",permalink:"/config/Custom config",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Nvim lua stuff",permalink:"/config/Nvim lua stuff"},next:{title:"Default mappings",permalink:"/config/Default mappings"}},p=[{value:"How to make my own config?",id:"how-to-make-my-own-config",children:[]},{value:"Replace default config of a plugin",id:"replace-default-config-of-a-plugin",children:[{value:"Add new plugins",id:"add-new-plugins",children:[]},{value:"Add new mappings",id:"add-new-mappings",children:[]},{value:"Override default highlights",id:"override-default-highlights",children:[]},{value:"Autocmds",id:"autocmds",children:[]},{value:"Files to edit",id:"files-to-edit",children:[]}]},{value:"Lazy loading",id:"lazy-loading",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"how-to-make-my-own-config"},"How to make my own config?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create custom dir in lua/"),(0,l.kt)("li",{parentName:"ul"},"Copy the examples dir files in this custom dir. "),(0,l.kt)("li",{parentName:"ul"},"The chadrc.lua here is for editing nvchad default options etc."),(0,l.kt)("li",{parentName:"ul"},"The init.lua here will be used for adding new plugins , new plugin configs , replace default plugin configs , adding new mappings.")),(0,l.kt)("h2",{id:"replace-default-config-of-a-plugin"},"Replace default config of a plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use the default_plugin_config_replace table in chadrc.lua")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Example :"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'M.plugins = {\n   default_plugin_config_replace = {\n      lspconfig = "custom.lspconfig",\n   },\n}\n\n-- this will replace lspconfig\'s default config with the file custom/lspconfig.lua\n-- make sure you do :PackerCompile or :PackerSync after this since the packer_compiled.vim or packer_compiled.lua present in the ~/.config/nvim/plugin dir needs to update the paths!\n')),(0,l.kt)("h3",{id:"add-new-plugins"},"Add new plugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Go to init.lua file in custom folder")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Uncomment the line hooks.add line containing the "install_plugins" stuff')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"example :"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local hooks = require "core.hooks"\n\nhooks.add("install_plugins", function(use)\n   use {\n       "folke/which-key.nvim"\n        event = "something",\n        config = function()\n           path of config file within custom dir  or add the config here itself\n        end\n    }\n end)\n\n-- the above snippet is just an example\n')),(0,l.kt)("h3",{id:"add-new-mappings"},"Add new mappings"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},' hooks.add("setup_mappings", function(map)\n    map("n", "<leader>cc", "dd", opt) -- example to delete the buffer\n    .... many more mappings ....\n end)\n')),(0,l.kt)("h3",{id:"override-default-highlights"},"Override default highlights"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add a path to the 'hl_override' option in the UI section of chadrc.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'M.ui = {\n   hl_override = "custom.highlights",\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NOTE : The above path is just an example , which will mean that your highlights file is /custom/highlights.lua."),(0,l.kt)("li",{parentName:"ul"},"highlights file might contain this.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local colors = require("colors").get()\n\nlocal fg = require("core.utils").fg\nlocal fg_bg = require("core.utils").fg_bg\nlocal bg = require("core.utils").bg\n\nfg("Normal", colors.red) \n\n-- If you dont want to require the above stuffs then you could just do : \n\nvim.cmd("hi Normal guifg=#yourhexcolor") \n')),(0,l.kt)("h3",{id:"autocmds"},"Autocmds"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Well, for example you just create a new file called autochad_cmds.lua in the custom folder and require it in the init.lua file of the custom folder! BOOOM!!")),(0,l.kt)("h3",{id:"files-to-edit"},"Files to edit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Only files that are supposed to edited by the user are meant to be in the custom dir, default files in that folder are example_chadrc and example_init which can be just renamed by the user into chadrc.lua and init.lua .")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The rest of the files outside the custom folder will get overwritten by the update so don't put your config there!! Just put it in the custom folder."))),(0,l.kt)("h2",{id:"lazy-loading"},"Lazy loading"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We lazy load almost 95% of the plugins, so we expect you to lazy load the plugins you've added to reduce startuptime. Don't want users making NvChad slow just because they didn't lazy load plugins they've added!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wbthomason/packer.nvim#specifying-plugins"},"packer's readme")," for more info!"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png",alt:"lessgooo"})),(0,l.kt)("p",null,"(note : Please open out an issue on the repo if you find any inaccuracies in the docs!)"))}d.isMDXComponent=!0}}]);