Vue.component('product-row', {
	template: '<tr>' +
	'<td>{{ sku }}</td>' +
	'<td>{{ name }}</td>' +
	'<td>${{ formattedPrice }}</td>' +
	'<td><input size="3" @input="$emit(\'update-qty\', sku, $event.target.value)" :id="sku" :name="qtyName" :value="qty" type="number" step="1" min="0" pattern="[0-9]"/></td>' +
	'<td><a @click="$emit(\'do-search\', category)" href="#">{{ category }}</a></td>' +
	'<td><a @click="$emit(\'do-search\', type)" href="#">{{ type }}</a></td>' +
	'</tr>',

	props: [ 'sku', 'name', 'price', 'category', 'type', 'qty'],

	computed: {
		qtyName: function() {
			return 'quantities['+ this.sku +']';
		},

		formattedPrice: function() {
			return parseFloat( this.price ).toFixed(2);
		},
	},

} );

var app = new Vue({
	el: '#demo',

	data: {
		sortKey: 'type',
		reverse: false,
		search: '',
		columns: [
			{
				name: 'sku',
				title: 'SKU'
			},
			{
				name: 'name',
				title: 'Name'
			},
			{
				name: 'price',
				title: 'Price'
			},
			{
				name: 'qty',
				title: 'Quantity',
				filter: false,
			},
			{
				name: 'category',
				title: 'Category'
			},
			{
				name: 'type',
				title: 'Type'
			},
		],
		products: appProducts,
	},

	computed: {
		orderedProducts: function () {
			var sk = this.sortKey;
			var results = _.orderBy( this.filter(), function( p ) {
				return p[ sk ] && p[ sk ].toLowerCase ? p[ sk ].toLowerCase() : p[ sk ];
			}, this.reverse ? 'asc' : 'desc' );

			return results;
		},

	},

	methods: {
		filter: function() {
			if ( ! this.search ) {
				return this.products;
			}

			return this.searchResults( this.search );
		},

		doSearch: function( search ) {
			this.search = search;
		},

		searchResults: function( search ) {
			var self = this;
			var i = 0;
			search = self.toLowerString( search );

			var left = this.products.filter( function( product ) {

				for ( i = 0; i < self.columns.length; i++ ) {
					if ( false !== self.columns[i].filter ) {
						var match = self.toLowerString( product[ self.columns[i].name ] );

						if ( match && match.indexOf( search ) !== -1 ) {
							return true;
						}
					}
				}

				return false;
			} );

			return left;
		},

		toLowerString: function( val ) {
			if ( ! val ) {
				return val;
			}

			if ( val.toString ) {
				val = val.toString();
			}

			if ( val.toLowerCase ) {
				val = val.toLowerCase();
			}

			return val;
		},

		sortBy: function(sortKey) {
			this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
			this.sortKey = sortKey;
		},

		updateQty: function( sku, qty ) {
			qty = qty.trim ? qty.trim() : qty;
			qty = parseInt( qty, 10 );
			if ( ! isNaN( qty ) ) {
				var product = this.products.find( function( product ) {
					return sku === product.sku;
				} );
				product.qty = qty;
			}
		},

		toJSON: function( data ) {
			return JSON.parse( JSON.stringify( data ) );
		},

		addProducts: function() {
			var products = this.products.filter( function( product ) {
				return product.qty;
			} );

			if ( ! products.length ) {
				return;
			}


			var names = products.map( function( product ) {
				return product.qty + ' of ' + product.name;
			} );

			alert( 'Adding ' + names.join( ', ' ) );

			this.search = '';
			this.clearQuantities();
		},

		clearQuantities: function() {
			for (var i = 0; i < this.products.length; i++) {
				this.products[i].qty = '';
			}

			document.getElementById( 'quantities-form' ).reset();
		},

	},

});
