var express = require('express');
var app = express();
var jsdom = require('jsdom');
var fs = require('fs');
var path = require('path');
var compilerSrc = fs.readFileSync(__dirname + '/vue.min.js');

var getItemData = function (argument) {
    return {
        id: (Math.random() * 1000000).toFixed(),
        price: (Math.random() * 1000000).toFixed(),
        price_sqm: (Math.random() * 100000).toFixed(),
        price_avg: (Math.random() * 1000000).toFixed(),
        photo: [{}, {}, {}],
        address: ['3-к', 'Блюхера', '14'],
        district: 'Ленинский район',
        area: [42, 21, 15],
        floor: [4, 5],
        description: 'Поступило в продажу очень редкое предложение! Современная квартира-студия. Нестандартная планировка, качественный ремонт, приятные соседи и месторасположение - это очень приятное сочетание!!!'
    };
}

var items = [];

for (var i = 250 - 1; i >= 0; i--) {
    items.push(getItemData());
};




var ComponentList = {
    paramAttributes: ['items'],
    template: fs.readFileSync(__dirname + '/list.tpl', 'utf-8').replace(/\n|\r|\t/g, '').replace(/ +/g, ' '),
    components: {
        item: {
            replace: false,
            template: fs.readFileSync(__dirname + '/item.tpl', 'utf-8').replace(/\n|\r|\t/g, '').replace(/ +/g, ' ')
        }
    }
};

var appTpl = fs.readFileSync(__dirname + '/app.tpl', 'utf-8').replace(/\n|\r|\t/g, '').replace(/ +/g, ' ');




app.get('/', function(req, res) {
    console.time('render')
    jsdom.env({
        html: '<body>' + appTpl + '</body>',
        src: [compilerSrc],
        done: function (err, window) {
            var Vue = window.Vue;
            Vue.config.async = false;


            var vm = new Vue({
                el: window.document.body,
                data: function() {
                    return {items: items};
                },
                filters: {
                    join: function(value, del) {
                        return value.join(del ? del.replace(/\'/, '') : ', ');
                    }
                },

                components: {
                    'my-list': ComponentList
                },

                methods: {

                    refreshList: function() {
                        var items2 = [];
                        for (var i = 250 - 1; i >= 0; i--) {
                            items2.push(getItemData());
                        };

                        console.time('refreshList')
                        this.items = items2;
                        window.requestAnimationFrame(function() {
                            console.timeEnd('refreshList')
                        });
                    },
                    onSubmit: function(event) {
                        var self = this;
                        console.time('click');
                        event.preventDefault();
                        this.items.push(getItemData());
                        window.requestAnimationFrame(function() {
                            console.timeEnd('click');
                        });
                    }
                }
            });

            res.send(window.document.body.innerHTML);
            console.timeEnd('render')
        }
    });
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
