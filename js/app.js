var cimesa = angular.module('cimesa', ['ngRoute','ionic']);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        
        console.log("initializing");
        this.bindEvents();
        console.log("initializing done");
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);   
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
        checkConnection(); /**Check conection called from functions */
       



                    /** */
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
getDeviceDate
                /**/
    },

    onErr: function(error){
       // alert('Unable to get your location. Without location you will not be able to use navigate feature! Error:' + '\n' + error.message);
    },

    onSuccess: function(position){
                /** */
    }
};


/**
 * 
 * Plain functions
 * 
 */


function getDeviceDate(){   
var dateSpan = document.getElementById('dateNow');
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;//January is 0, so always add + 1

var yyyy = today.getFullYear();
if(dd<10){dd='0'+dd}
if(mm<10){mm='0'+mm}
today = mm+'/'+dd+'/'+yyyy;
todayInput =  yyyy + '-' +mm+'-'+dd;
dateSpan.innerHTML = today;

document.getElementById('inputDate').value = todayInput;
}


/**
 * Date now 
 * plain JS
 * 
 */

    function checkConnection(){
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    console.warn('Connection type: ' + states[networkState]);


    }

    function onPhotoDataSuccess(imageData) {
      console.log("onPhotoDataSuccess: "+imageData);

      $('#gallery').append($('<img>',{src:"data:image/jpeg;  base64," + imageData}));
    }
    
	// Called when a photo is successfully retrieved
    function onPhotoFileSuccess(imageData) {
      // Get image handle
      console.log(JSON.stringify(imageData));
      console.log("onPhotoFileSuccess: "+imageData);
      $('#gallery').append($('<img>',{src: imageData}));
    }
    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
    console.log("onPhotoURISuccess"+imageURI);          /**ROUTE URI */
    $('#gallery').append($('<img>',{src: imageURI}));   /**append photo */
    }

   /***************************A button will call this function*********************  */
    function capturePhotoWithData() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
    }

    function capturePhotoWithFile() {
        navigator.camera.getPicture(onPhotoFileSuccess, onFail, { 
            quality: 50, 
            destinationType: Camera.DestinationType.FILE_URI,
             saveToPhotoAlbum: true
        });
    }
    

    /***************************A button will call this function*********************  */
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { 
        quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source
     });
    }
    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }
