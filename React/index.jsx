var PureRenderMixin = React.addons.PureRenderMixin;

var TodoItem = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return (
            <tbody className="offers-d__item">
                <tr className="offers-d__row _head">
                    <td rowSpan="2" className="offers-d__cell _price">
                        <div className="offers-d__prices">
                            <div className="offers-d__price-main-h">
                                <strong className="offers-d__price-main">
                                    {this.props.obj.price}
                                    <span className="offers-d__rubl-icon">р.</span>
                                </strong>
                            </div>
                            <div className="offers-d__price-unit-h">
                                <span className="offers-d__price-unit">{this.props.obj.price_sqm}
                                    <span className="offers-d__rubl-icon">р.</span>/м<sup>2</sup>
                                </span>
                            </div>
                            <div className="offer-avg-price">
                                <span className="offer-avg-price__title">Средняя цена</span><br/>
                                <span className="offer-avg-price__price">{this.props.obj.price_avg}</span>
                                <span className="offer-avg-price__rubl-icon">р.</span>
                            </div>
                        </div>
                    </td>
                    <td rowSpan="2" className="offers-d__cell _media">
                        <div className="offers-d__media-h">
                            <div className="offers-d__photo-h">
                                <div>
                                    <img alt="" className="offers-d__photo" src="http://static.ngs.ru/cache/realty/photo/c9858b08d70778dd2c92b3cd3f0411a0_155_124_c.jpg" />
                                    <span className="offers-d__photo-count">
                                        <span className="offers-d__photo-count-text">{this.props.obj.photo.length} фото</span>
                                    </span>
                                </div>
                            </div>
                            <div className="offers-d__lifetime-h">
                                <span className="offers-d__lifetime">3 часа на N1</span>
                            </div>
                            <div className="offers-d__special-mark">Премиум</div>
                        </div>
                    </td>
                    <td className="offers-d__cell _address">
                        <div className="offers-d__address-h">
                            <a href="/view/5413172/" className="offers-d__address-dynamic">{this.props.obj.address.join(', ')}</a>
                            <span className="offers-d__address-link-h">&nbsp;<button title="Открыть в новом окне" className="offers-d__address-link">Открыть в новом окне</button></span>
                        </div>
                        <div className="offers-d__meta-description">
                            <div className="offers-d__district-h">
                                <span className="offers-d__district">{this.props.obj.district}</span>
                            </div>
                            <div className="offers-d__show-on-map-h">
                                <span className="offers-d__show-on-map">
                                    <span className="offers-d__show-on-map-text">Показать на карте</span>
                                </span>
                            </div>
                        </div>
                    </td>
                    <td className="offers-d__cell _area">
                        <div>
                            <div className="offers-d__area-h">
                                <span className="offers-d__area">{this.props.obj.area.join(' / ')} м<sup>2</sup></span>
                            </div>
                            <ul className="offers-d__about-object">
                                <li className="offers-d__about-object-item">
                                    <span>балкон</span>
                                </li>
                            </ul>
                        </div>
                    </td>
                    <td className="offers-d__cell _floor">
                        <div className="offers-d__floor-h">
                            <span className="offers-d__floor">
                                <span>{this.props.obj.floor.join(' / ')} этаж</span>
                            </span>
                        </div>
                        <ul className="offers-d__about-object">
                            <li title="кирпич" className="offers-d__about-object-item">кирпич</li>
                        </ul>
                    </td>
                    <td rowSpan="2" className="offers-d__cell _actions">
                        <ul className="offers-d__actions">
                            <li className="offers-d__actions-item-h">
                                <span title="Скрыть из списка" className="offers-d__actions-item _discard"></span>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr className="offers-d__row _addition">
                    <td colSpan="3" className="offers-d__cell _addition">
                        <section className="offers-d__short-description">
                            {this.props.obj.description} 
                        </section>
                    </td>
                </tr>
                <tr className="offers-d__row _comment">
                    <td colSpan="6" className="offers-d__cell _comment">
                        <div className="offers-d__comment-h">
                        </div>
                    </td>
                </tr>
            </tbody>
        );
    }
});

var TodoList = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return (
            <table className="offers-d__list">
                {
                    this.props.items.map(function(object, i) {
                        return <TodoItem obj={object} key={i} />;
                    })
                }
            </table>
        );
    }
});
var TodoApp = React.createClass({
    mixins: [PureRenderMixin],
    getInitialState: function() {
        return {items: items, text: ''};
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
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
    softUpdate: function() {
        var items2 = [];
        for (var i = 125 - 1; i >= 0; i--) {
            items2.push(this.state.items[i]);
        };

        for (var i = 125 - 1; i >= 0; i--) {
            items2.push(getItemData());
        };


        console.time('softUpdate')
        this.setState({items: items2}, function () {
            window.requestAnimationFrame(function() {
                console.timeEnd('softUpdate')
            });
        });
        
    },
    render: function() {
        return (
            <div>
                <button onClick={this.softUpdate}>Обновить мягко</button>
                <button onClick={this.refreshList}>Передёнуть список</button>
                <form onSubmit={this.handleSubmit}>
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
                <TodoList items={this.state.items} />
            </div>
        );
    }
});

console.time('init')
React.render(<TodoApp />, document.getElementById('app'));
window.requestAnimationFrame(function() {
    window.requestAnimationFrame(function() {
        console.timeEnd('init')
    });
});