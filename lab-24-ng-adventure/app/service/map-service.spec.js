'use strict'

require('../../test/lib/test-setup.js')

var angular = require('angular')
var ngAdventure = angular.module('ngAdventure')

describe('mapService factory', function() {
  var mapService = mapService
  // Load ngAdventure module
  beforeEach(angular.mock.module('ngAdventure'))

  // Set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function(mapService) {
      mapService = mapService
    }))

    // A simple test to verify the Users service exists
   it('should exist', function() {
     expect(mapService).toBeDefined()
   })
})
