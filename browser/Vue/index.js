Vue.component('list', {
	props: ['items'],
	template: '<table class="offers-d__list"><tbody class="offers-d__item" track-by="id" v-repeat="item: items" v-component="item"></tbody></table>',
	components: {
		item: {
			replace: false,
			template: document.getElementById('item-tpl').innerHTML
		}
	}
});


Vue.config.async = false;
console.time('init')
new Vue({
	el: '#app',
	data: function() {
		return {items: items};
	},
	filters: {
		join: function(value, del) {
			return value.join(del ? del.replace(/\'/, '') : ', ');
		}
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

window.requestAnimationFrame(function() {
	window.requestAnimationFrame(function() {
	    console.timeEnd('init')
	});
});