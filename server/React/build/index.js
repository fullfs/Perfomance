var React = require('react');


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


var TodoItem = React.createClass({displayName: "TodoItem",
    render: function() {
        return (
            React.createElement("tbody", {className: "offers-d__item"}, 
                React.createElement("tr", {className: "offers-d__row _head"}, 
                    React.createElement("td", {rowSpan: "2", className: "offers-d__cell _price"}, 
                        React.createElement("div", {className: "offers-d__prices"}, 
                            React.createElement("div", {className: "offers-d__price-main-h"}, 
                                React.createElement("strong", {className: "offers-d__price-main"}, 
                                    this.props.obj.price, 
                                    React.createElement("span", {className: "offers-d__rubl-icon"}, "р.")
                                )
                            ), 
                            React.createElement("div", {className: "offers-d__price-unit-h"}, 
                                React.createElement("span", {className: "offers-d__price-unit"}, this.props.obj.price_sqm, 
                                    React.createElement("span", {className: "offers-d__rubl-icon"}, "р."), "/м", React.createElement("sup", null, "2")
                                )
                            ), 
                            React.createElement("div", {className: "offer-avg-price"}, 
                                React.createElement("span", {className: "offer-avg-price__title"}, "Средняя цена"), React.createElement("br", null), 
                                React.createElement("span", {className: "offer-avg-price__price"}, this.props.obj.price_avg), 
                                React.createElement("span", {className: "offer-avg-price__rubl-icon"}, "р.")
                            )
                        )
                    ), 
                    React.createElement("td", {rowSpan: "2", className: "offers-d__cell _media"}, 
                        React.createElement("div", {className: "offers-d__media-h"}, 
                            React.createElement("div", {className: "offers-d__photo-h"}, 
                                React.createElement("div", null, 
                                    React.createElement("img", {alt: "", className: "offers-d__photo", src: "http://static.ngs.ru/cache/realty/photo/c9858b08d70778dd2c92b3cd3f0411a0_155_124_c.jpg"}), 
                                    React.createElement("span", {className: "offers-d__photo-count"}, 
                                        React.createElement("span", {className: "offers-d__photo-count-text"}, this.props.obj.photo.length, " фото")
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "offers-d__lifetime-h"}, 
                                React.createElement("span", {className: "offers-d__lifetime"}, "3 часа на N1")
                            ), 
                            React.createElement("div", {className: "offers-d__special-mark"}, "Премиум")
                        )
                    ), 
                    React.createElement("td", {className: "offers-d__cell _address"}, 
                        React.createElement("div", {className: "offers-d__address-h"}, 
                            React.createElement("a", {href: "/view/5413172/", className: "offers-d__address-dynamic"}, this.props.obj.address.join(', ')), 
                            React.createElement("span", {className: "offers-d__address-link-h"}, " ", React.createElement("button", {title: "Открыть в новом окне", className: "offers-d__address-link"}, "Открыть в новом окне"))
                        ), 
                        React.createElement("div", {className: "offers-d__meta-description"}, 
                            React.createElement("div", {className: "offers-d__district-h"}, 
                                React.createElement("span", {className: "offers-d__district"}, this.props.obj.district)
                            ), 
                            React.createElement("div", {className: "offers-d__show-on-map-h"}, 
                                React.createElement("span", {className: "offers-d__show-on-map"}, 
                                    React.createElement("span", {className: "offers-d__show-on-map-text"}, "Показать на карте")
                                )
                            )
                        )
                    ), 
                    React.createElement("td", {className: "offers-d__cell _area"}, 
                        React.createElement("div", null, 
                            React.createElement("div", {className: "offers-d__area-h"}, 
                                React.createElement("span", {className: "offers-d__area"}, this.props.obj.area.join(' / '), " м", React.createElement("sup", null, "2"))
                            ), 
                            React.createElement("ul", {className: "offers-d__about-object"}, 
                                React.createElement("li", {className: "offers-d__about-object-item"}, 
                                    React.createElement("span", null, "балкон")
                                )
                            )
                        )
                    ), 
                    React.createElement("td", {className: "offers-d__cell _floor"}, 
                        React.createElement("div", {className: "offers-d__floor-h"}, 
                            React.createElement("span", {className: "offers-d__floor"}, 
                                React.createElement("span", null, this.props.obj.floor.join(' / '), " этаж")
                            )
                        ), 
                        React.createElement("ul", {className: "offers-d__about-object"}, 
                            React.createElement("li", {title: "кирпич", className: "offers-d__about-object-item"}, "кирпич")
                        )
                    ), 
                    React.createElement("td", {rowSpan: "2", className: "offers-d__cell _actions"}, 
                        React.createElement("ul", {className: "offers-d__actions"}, 
                            React.createElement("li", {className: "offers-d__actions-item-h"}, 
                                React.createElement("span", {title: "Скрыть из списка", className: "offers-d__actions-item _discard"})
                            )
                        )
                    )
                ), 
                React.createElement("tr", {className: "offers-d__row _addition"}, 
                    React.createElement("td", {colSpan: "3", className: "offers-d__cell _addition"}, 
                        React.createElement("section", {className: "offers-d__short-description"}, 
                            this.props.obj.description
                        )
                    )
                ), 
                React.createElement("tr", {className: "offers-d__row _comment"}, 
                    React.createElement("td", {colSpan: "6", className: "offers-d__cell _comment"}, 
                        React.createElement("div", {className: "offers-d__comment-h"}
                        )
                    )
                )
            )
        );
    }
});

var TodoList = React.createClass({displayName: "TodoList",
    render: function() {
        return (
            React.createElement("table", {className: "offers-d__list"}, 
                
                    this.props.items.map(function(object, i) {
                        return React.createElement(TodoItem, {obj: object, key: i});
                    })
                
            )
        );
    }
});
var TodoApp = React.createClass({displayName: "TodoApp",
    getInitialState: function() {
        return {items: items, text: ''};
    },
    onSubmit: function(e) {
        console.time('click')
        e.preventDefault();
        var nextItems = this.state.items.concat([getItemData()]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText}, function () {
            console.timeEnd('click')
        });
    },
    refreshList: function() {
        var items2 = [];
        for (var i = 250 - 1; i >= 0; i--) {
            items2.push(getItemData());
        };

        console.time('refreshList')
        this.setState({items: items2}, function () {
            window.requestAnimationFrame(function() {
                console.timeEnd('refreshList')
            });
        });
    },
    render: function() {
        var divStyle = {
            width: '900px',
            margin: '0 auto'
        };
        return (
            React.createElement("div", {id: "app", style: divStyle}, 
                React.createElement("div", null, 
                    React.createElement("button", {onClick: this.refreshList}, "Передёнуть список"), 
                    React.createElement("form", {onSubmit: this.onSubmit}, 
                        React.createElement("button", null, 'Add #' + (this.state.items.length + 1))
                    ), 
                    React.createElement(TodoList, {items: this.state.items})
                )
            )
        );
    }
});




var express = require('express');

var app = express();
app.use(function(req, res) {
    console.time('render')
    var html = React.renderToString(React.createElement(TodoApp, null));
    console.timeEnd('render')
    res.send(html)
});

app.listen(3000, function() {
  console.log('express server at http://localhost:3000');
});
