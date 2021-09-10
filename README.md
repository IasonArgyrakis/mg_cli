# Mg_cli
With this CLI tool you can make modules dynamically for the Magento frame-work faster better cleaner 

Ditch the online module makers!
Have one built in in your cli

---
# Table of Contents
1. [Install](#install)
2. [How to Use](#quickstart)
4. [Commands](#commands)
5. [ToDo](#todo)
6. [features ideas](#features--ideas)

## Install

 1. `git clone https://github.com/IasonArgyrakis/mg_cli.git`
 2. `cd mg_cli` 
 3. `npm install` to download all the required libs
 3. `npm install -g . ` to install the current dir as a library 
 
 


## Quickstart

   `mg g`
--

`--create` to make `Vendor/module` then `registration.php` & `composer.json`

`--b` for Block

`--ctrlr` for Controler

`--mdl` for Model

`--obsrvr` for Observer

## Guide

### Create Module Structure

`mg g --create --vendor VendorName --module ModuleName` 

`--vendor` and `--module` are both required when passing `--create` argument

Hooks to `--register`

---

### Block

`mg g --b myblockname` 

`--e` extends  `\Magento\Framework\View\Element\Template`

`--e    "your\path\forSmth" ` extends  `your\path\forSmth`

---

### Controler

`mg g --ctrlr myotherblockname `

`--e` extends  `\Magento\Framework\App\Action\Action`

`--e    "your\path\forSmth" ` extends  `your\path\forSmth`

To make a `Controler` folder with a `myotherblockname.php`  

---

### Model

`mg g --mdl myotherblockname `

`--e` extends  `\Magento\Framework\Model\AbstractModel`

`--e    "your\path\forSmth" ` extends  `your\path\forSmth`

---

### Observer

`mg g --obsrvr myotherblockname `

`--e` extends  `\Magento\Framework\Event\ObserverInterface`

`--e    "your\path\forSmth" ` extends  `your\path\forSmth`

---

### Helper

`mg g --hlpr `

`--e` extends  `\Magento\Framework\App\Helper\AbstractHelper`

`--e    "your\path\forSmth" ` extends  `your\path\forSmth`

---

### etc

etc is assitive to other it is made as a budle 
if you wish to make a budle check extending @todo Extending...

`mg g --obsrvr myotherblockname `

`--e` extends  `\Magento\Framework\Event\ObserverInterface`

`--e    "your\path\forSmth" ` extends  `your\path\forSmth`

---


---
## Assists for Dev

https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs

https://medium.com/@pongsatt/how-to-build-your-own-project-templates-using-node-cli-c976d3109129

https://magefan.com/blog/create-block-template-layout-in-magento-2

node_modules/.bin/semver


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

- [x]  Make Hello Wolrd  

- [x]  Parse Complex filenames

- [x]  make or copy Complex filenames to pwd dir

- [x]  Make ProtoTemplates

- [ ]  Make ProtoTempaltes for Vendor_Overides Note: fallbacks 

- [x]  Milestone 1️⃣

- [x]  Make CLI guide

- [x]  Milestone 1️⃣.25

- [x]  Intergrate ProtoTempaltes variables

- [ ]  Milestone 1️⃣.5

- [ ]  Intergrate ProtoTempaltes variables for Vendor_Overides

- [ ]  XML Directives (add the mg_generated_module to a view  index | static-page | product-category 

- [ ]   add the mg_generated_module

- [ ]   integration with directives for subfolders of each class created. Must be multiple directives and subfolders as well

- [x]   camel case validation for class names passed as directives
- [ ]   guide for templating + extending
- [ ]   fix varnames refactor
- [ ]   add ui block feature as a  (xmlplace name  + tempalates/html/<name>.pthml+ make web js for that 

---

##  Features | Ideas 

Stuff to make using the tool 

nonoce-js (make a js pool of scripts) for head | body | blocks etc using observers 

ez-ass-pie dynamiclaly build and add layout `xml` `phtml` for pages such as Index | category | product | custom-feature
* custom-feature placeholder for custom ui stuff
   example  [Azera](https://azera.smart-digital.gr/?templatehints=magento)
   `/var/www/vhosts/smart-digital.gr/azera.smart-digital.gr/app/design/frontend/DigitalUp/diogenes/DigitalUp_Diogenes/templates/html/homepage/sections/services.phtml`




