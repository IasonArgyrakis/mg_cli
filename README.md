# Mg_cli
With this CLI tool you can make modules dynamically for the Magento frame-work faster better cleaner 

---
# Table of Contents
1. [Install](#install)
2. [The Vison](#the-vision)
3. [Commands](#commands)
4. [ToDo](#todo)
5. [features ideas](#features--ideas)

## Install

 1. `git clone https://github.com/IasonArgyrakis/mg_cli.git`
 2. `cd mg_cli` 
 3. `npm install -g . `
 
 One Line Install: `git clone https://github.com/IasonArgyrakis/mg_cli.git && cd mg_cli && npm install -g . `


## The Vison

Ditch the online module makers!

Have one built in in your cli



---
## Assists for Dev

https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs

https://medium.com/@pongsatt/how-to-build-your-own-project-templates-using-node-cli-c976d3109129


---
## Commands

Modes : What the command does 

Case : Where it does it ( will the consumer ever see it ) 

Parameters :  Is it a custom implementation of smth ? 

`--Block` `--Helper` `--Controler` `--etc` `--Model` `--Observer` `--view`

Atributes : How it does it ( example: Do you want `js` | `css` )

Directives : placeholder

---

## ToDo 

@toDo : - [x]  Make Hello Wolrd  

@toDo : - [x]  Parse Complex filenames

@toDo : - [ ]  make or copy Complex filenames to pwd dir

@toDo : - [ ]  Make ProtoTemplates

@toDo : -[ ]  Make ProtoTempaltes for Vendor_Overides Note: fallbacks 

Milestone One -[ ] 

@toDo : -[ ]  Make CLI guide

Milestone One_point_TwentyFive -[ ] 

@toDo : -[ ]  Intergrate ProtoTempaltes variables

Milestone One_point_five -[ ] 

@toDo : -[ ]  Intergrate ProtoTempaltes variables for Vendor_Overides

@toDo : -[ ]  XML Directives (add the mg_generated_module to a view  index | static-page | product-category 

@toDo : -[ ]   add the mg_generated_module

---

##  Features | Ideas 

Stuff to make using the tool 

nonoce-js (make a js pool of scripts) for head | body | blocks etc using observers 

ez-ass-pie dynamiclaly build and add layout `xml` `phtml` for pages such as Index | category | product | custom-feature
* custom-feature placeholder for custom ui stuff
   example  Azera(https://azera.smart-digital.gr/?templatehints=magento) `/var/www/vhosts/smart-digital.gr/azera.smart-digital.gr/app/design/frontend/DigitalUp/diogenes/DigitalUp_Diogenes/templates/html/homepage/sections/services.phtml`




