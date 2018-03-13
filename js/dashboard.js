/*
Template Name: Material Pro Admin
Author: Themedesigner
Email: niravjoshi87@gmail.com
File: js
*/
$(function() {
    "use strict";
    // ============================================================== 
    // Our visitor
    // ============================================================== 

	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var Date_start = new Date(2017,3,8);
	var Date_end = new Date(2024,2,29);
	var Date_today = new Date();

	var Days1 = Math.round(Math.abs((Date_today.getTime() - Date_start.getTime())/(oneDay)));
	var Days2 = Math.round(Math.abs((Date_end.getTime() - Date_today.getTime())/(oneDay)));

    var chart = c3.generate({
        bindto: '#visitor',
        data: {
            columns: [
                ['복무일', Days1],
				['남은 날', Days2]
            ],

            type: 'donut',
        },
        donut: {
            label: {
                show: false
            },
            title: "",
            width: 10,

        },

        legend: {
            hide: true
                //or hide: 'data1'
                //or hide: ['data1', 'data2']
        },
        color: {
            pattern: ['#1e88e5', '#eceff1']
        }
    });





});
