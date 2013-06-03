knockout-resizeimage
====================

Knockout.js custom binding to resize an image element to have a max width and max height

Use this binding to resize images to a maxWidth or maxHeight (or both).
Either pass in the maxWidth & maxHeight parameters via an inline object on the binding itself.

Example binding using an inline object: 

      <img data-bind="resizeImage: { maxWidth: 200, maxHeight: 400 }, attr: { src: someSrcObject, alt: someAltObject,title: someTitleObject }" />"
