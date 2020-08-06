/*!
 * Moderat
 * Project Website: http://moderat.pimmey.com
 * @version 1.0
 * @author Yegor Borisenco <pimmey@pimmey.com>
 */

'use strict';

// This is going to be used in /assets/js/app.js
var CONFIG = {};

CONFIG = {

    // Various toast messages
    toastMessages: {
        nameMissing: 'Looks like you forgot to introduce yourself.',
        contactMissing: 'Let us know how to contact you.',
        messageMissing: 'You forgot to include a message to us :-)',
        enterValidEmail: 'Please enter a valid email address.',
        messageSent: 'Your message has been sent. We\'ll get back to you soon.',
        somethingWrong: 'Something went wrong, try again. Error: '
    },

    // Default Toast dismissal time
    toastSpeed: 4000
};
var unomiOption = {
    scope: 'web-1e89gMA7K9pdl4lnwUJLToaQhnB',
    url: 'http://powehi.primedata.ai',
  	writeKey: '1e89gM8JEdb58WtnLnclquehGnQ',
  	initialPageProperties: {
    pageInfo: {
           destinationURL: location.href
       }
    }
};
(function(){
    // Create a queue, but don't obliterate an existing one!
    var analytics = window.analytics = window.analytics || [];
    // If the real analytics.js is already on the page return.
    //if (analytics.initialize) return;
    // If the snippet was invoked already show an error.
    if (analytics.invoked) {
      if (window.console && console.error) {
        console.error('Segment snippet included twice.');
      }
      return;
    }
    // Invoked flag, to make sure the snippet
    // is never invoked twice.
    analytics.invoked = true;
    // A list of the methods in Analytics.js to stub.
    analytics.methods = [
      'trackSubmit',
      'trackClick',
      'trackLink',
      'trackForm',
      'pageview',
      'identify',
      'reset',
      'group',
      'track',
      'ready',
      'alias',
      'debug',
      'page',
      'once',
      'off',
      'on',
      'initialize',
      'addSourceMiddleware',
      'addIntegrationMiddleware',
      'setAnonymousId',
      'addDestinationMiddleware'
    ];
    // Define a factory to create stubs. These are placeholders
    // for methods in Analytics.js so that you never have to wait
    // for it to load to actually record data. The `method` is
    // stored as the first argument, so we can replay the data.
    analytics.factory = function(method){
      return function(){
        var args = Array.prototype.slice.call(arguments);
        args.unshift(method);
        analytics.push(args);
        return analytics;
      };
    };
    // For each of our methods, generate a queueing stub.
    for (var i = 0; i < analytics.methods.length; i++) {
      var key = analytics.methods[i];
      analytics[key] = analytics.factory(key);
    }
    // Define a method to load Analytics.js from our CDN,
    // and that will be sure to only ever load it once.
    analytics.load = function(key, options){
      // Create an async script element based on your key.
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'http://powehi.primedata.ai/mining.js';
      // Insert our script next to the first script element.
      var first = document.getElementsByTagName('script')[0];
      first.parentNode.insertBefore(script, first);
      analytics._loadOptions = options;
    };
    // Add a version to keep track of what's in the wild.
    analytics.SNIPPET_VERSION = '4.1.0';
    // Load Analytics.js with your key, which will automatically
    // load the tools you've enabled for your account. Boosh!
    analytics.load();
    analytics.initialize("Prime Data", unomiOption);
    // Make the first page call to load the integrations. If
    // you'd like to manually name or tag the page, edit or
    // move this call however you'd like.
    analytics.page();
  })();
