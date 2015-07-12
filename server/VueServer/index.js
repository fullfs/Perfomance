var vueServer = require('./vue-server.min');
var Vue = new vueServer.renderer();

var VueCompile = vueServer.compiler;
var fs = require('fs');



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
    props: ['items'],
    template: VueCompile(fs.readFileSync(__dirname + '/list.tpl', 'utf-8').replace(/\n|\r|\t/g, '').replace(/ +/g, ' ')),
    components: {
        item: {
            replace: false,
            template: VueCompile(fs.readFileSync(__dirname + '/item.tpl', 'utf-8').replace(/\n|\r|\t/g, '').replace(/ +/g, ' '))
        }
    }
};

var appTpl = VueCompile(fs.readFileSync(__dirname + '/app.tpl', 'utf-8').replace(/\n|\r|\t/g, '').replace(/ +/g, ' '));


var express = require('express');

var app = express();
app.use(function(req, res) {
    console.time('render')
    var vm = new Vue({
        template: appTpl,
        data: function() {
            return {items: items};
        },
        filters: {
            join: function(value, del) {
                return value.join(del ? del.replace(/\'/, '') : ', ');
            }
        },

        components: {
            list: ComponentList
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


    vm.$on('vueServer.htmlReady', function(html) {
        console.timeEnd('render')
        res.send(html);
    })
    
});

app.listen(3000, function() {
  console.log('express server at http://localhost:3000');
});






