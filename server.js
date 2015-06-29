#!/bin/env node

var express = require('express');
var fs      = require('fs');

var cheerio = require("cheerio");
var http = require('http');
var stats = require("stats-lite");

    var endPoints = [

                'count_pending_messages',
                'get_messages',
                'get_friends_progress',
                'get_friends_score',
                'POST path=/api/users/',
                'GET path=/api/users/'

            ]


    fs.readFile('sample.log', 'utf8', function(err, res1){

                for(j in endPoints){
                          var allMsg = res1.split('heroku[router]:');

                    var response = [];
                    var responseTimes = [];
                    var dynos =[];

                    for(i in allMsg){

                        if(allMsg[i].indexOf(endPoints[j]) != -1 ){

                            
                            
                            response.push(allMsg[i]);
                            dynos.push(allMsg[i].split('dyno=')[1].split(' ')[0])
                            connectTime = parseFloat(allMsg[i].split('connect=')[1].split('ms')[0]);
                            serviceTime = parseFloat(allMsg[i].split('service=')[1].split('ms')[0]);
                            responseTimes.push(connectTime+serviceTime);

                        }
                    }

                    console.log(endPoints[j]+ " was called " + response.length + " times");
                    console.log(endPoints[j]+ " mean response time was "+ stats.mean(responseTimes) + "ms");
                    console.log(endPoints[j]+ " median response time was "+ stats.median(responseTimes) + "ms");
                    console.log(endPoints[j]+ " mode response time was "+ stats.mode(responseTimes)+ "ms");
                    
                    console.log(endPoints[j]+ " most common dynos was " + modeString(dynos));

                }



            

            })


//library function

function modeString(array)
{
    if (array.length == 0)
        return null;

    var modeMap = {},
        maxEl = array[0],
        maxCount = 1;

    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];

        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;

        if (modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
        else if (modeMap[el] == maxCount)
        {
            maxEl += '&' + el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}