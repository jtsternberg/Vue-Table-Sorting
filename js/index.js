Vue.component('product-row', {
	template: '<tr>' +
	'<td>{{ sku }}</td>' +
	'<td>{{ name }}</td>' +
	'<td>${{ formattedPrice }}</td>' +
	'<td><input @input="$emit(\'update-qty\', sku, $event.target.value)" :id="sku" :name="qtyName" :value="qty" type="number" step="1" /></td>' +
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

		newProduct: {},

		defaults: 			{
			"sku": "",
			"category": "",
			"name": "",
			"price": 0,
			"type": "",
			"qty": '',
		},

		products: [
			{
				"sku": "SH01",
				"category": "SHELTER",
				"name": "Fossil",
				"price": 60.20,
				"type": "YARNS",
				"qty": '',
			},
			{
				"sku": "SH02",
				"category": "SHELTER",
				"name": "Woodsmoke",
				"price": 60.20,
				"type": "YARNS",
				"qty": '',
			},
			{
				"sku": "SH03",
				"category": "SHELTER",
				"name": "Nest",
				"price": 60.20,
				"type": "YARNS",
				"qty": '',
			},
			{
				"sku": "SH04",
				"category": "SHELTER",
				"name": "Pumpernickel",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH05",
				"category": "SHELTER",
				"name": "Sweatshirt",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH06",
				"category": "SHELTER",
				"name": "Soot",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH07",
				"category": "SHELTER",
				"name": "Thistle",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH08",
				"category": "SHELTER",
				"name": "Homemade Jam",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH09",
				"category": "SHELTER",
				"name": "Long Johns",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH10",
				"category": "SHELTER",
				"name": "Wool Socks",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH11",
				"category": "SHELTER",
				"name": "Embers",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH12",
				"category": "SHELTER",
				"name": "Hayloft",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH13",
				"category": "SHELTER",
				"name": "Sap",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH14",
				"category": "SHELTER",
				"name": "Tent",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH15",
				"category": "SHELTER",
				"name": "Button Jar",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH16",
				"category": "SHELTER",
				"name": "Almanac",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH17",
				"category": "SHELTER",
				"name": "Faded Quilt",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH18",
				"category": "SHELTER",
				"name": "Camper",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH19",
				"category": "SHELTER",
				"name": "Fauna",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH20",
				"category": "SHELTER",
				"name": "Foothills",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH21",
				"category": "SHELTER",
				"name": "Birdbook",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH22",
				"category": "SHELTER",
				"name": "Artifact",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH23",
				"category": "SHELTER",
				"name": "Stormcloud",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH24",
				"category": "SHELTER",
				"name": "Old World",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH25",
				"category": "SHELTER",
				"name": "Plume",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH26",
				"category": "SHELTER",
				"name": "Blanket Fort",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH27",
				"category": "SHELTER",
				"name": "Postcard",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH28",
				"category": "SHELTER",
				"name": "Barn Owl",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH29",
				"category": "SHELTER",
				"name": "Truffle Hunt",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH30",
				"category": "SHELTER",
				"name": "Meteorite",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH31",
				"category": "SHELTER",
				"name": "Cast Iron",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH32",
				"category": "SHELTER",
				"name": "Snowbound",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH33",
				"category": "SHELTER",
				"name": "Tartan",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH34",
				"category": "SHELTER",
				"name": "Tallow",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH35",
				"category": "SHELTER",
				"name": "Cinnabar",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH36",
				"category": "SHELTER",
				"name": "Bale",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH37",
				"category": "SHELTER",
				"name": "Flannel",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH80",
				"category": "SHELTER",
				"name": "Narwhal",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH81",
				"category": "SHELTER",
				"name": "Caribou",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "SH82",
				"category": "SHELTER",
				"name": "Newsprint",
				"price": 60.20,
				"type": "YARNS"
			},
			{
				"sku": "L101",
				"category": "LOFT",
				"name": "Fossil",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L102",
				"category": "LOFT",
				"name": "Woodsmoke",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L103",
				"category": "LOFT",
				"name": "Nest",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L104",
				"category": "LOFT",
				"name": "Pumpernickel",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L105",
				"category": "LOFT",
				"name": "Sweatshirt",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L106",
				"category": "LOFT",
				"name": "Soot",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L107",
				"category": "LOFT",
				"name": "Thistle",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L108",
				"category": "LOFT",
				"name": "Homemade Jam",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L109",
				"category": "LOFT",
				"name": "Long Johns",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L110",
				"category": "LOFT",
				"name": "Wool Socks",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L111",
				"category": "LOFT",
				"name": "Embers",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L112",
				"category": "LOFT",
				"name": "Hayloft",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L113",
				"category": "LOFT",
				"name": "Sap",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L114",
				"category": "LOFT",
				"name": "Tent",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L115",
				"category": "LOFT",
				"name": "Button Jar",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L116",
				"category": "LOFT",
				"name": "Almanac",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L117",
				"category": "LOFT",
				"name": "Faded Quilt",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L118",
				"category": "LOFT",
				"name": "Camper",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L119",
				"category": "LOFT",
				"name": "Fauna",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L120",
				"category": "LOFT",
				"name": "Foothills",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L121",
				"category": "LOFT",
				"name": "Birdbook",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L122",
				"category": "LOFT",
				"name": "Artifact",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L123",
				"category": "LOFT",
				"name": "Stormcloud",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L124",
				"category": "LOFT",
				"name": "Old World",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L125",
				"category": "LOFT",
				"name": "Plume",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L126",
				"category": "LOFT",
				"name": "Blanket Fort",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L127",
				"category": "LOFT",
				"name": "Postcard",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L128",
				"category": "LOFT",
				"name": "Barn Owl",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L129",
				"category": "LOFT",
				"name": "Truffle Hunt",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L130",
				"category": "LOFT",
				"name": "Meteorite",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L131",
				"category": "LOFT",
				"name": "Cast Iron",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L132",
				"category": "LOFT",
				"name": "Snowbound",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L133",
				"category": "LOFT",
				"name": "Tartan",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L134",
				"category": "LOFT",
				"name": "Tallow",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L135",
				"category": "LOFT",
				"name": "Cinnabar",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L136",
				"category": "LOFT",
				"name": "Bale",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "L137",
				"category": "LOFT",
				"name": "Flannel",
				"price": 70.20,
				"type": "YARNS"
			},
			{
				"sku": "Q200",
				"category": "QUARRY",
				"name": "Moonstone",
				"price": 53.58,
				"type": "YARNS"
			},
			{
				"sku": "Q205",
				"category": "QUARRY",
				"name": "Geode",
				"price": 53.58,
				"type": "YARNS"
			},
			{
				"sku": "Q210",
				"category": "QUARRY",
				"name": "Slate",
				"price": 53.58,
				"type": "YARNS"
			},
			{
				"sku": "Q215",
				"category": "QUARRY",
				"name": "Lazulite",
				"price": 53.58,
				"type": "YARNS"
			},
			{
				"sku": "Q217",
				"category": "QUARRY",
				"name": "Obsidian",
				"price": 53.58,
				"type": "YARNS"
			},
			{
				"sku": "Q220",
				"category": "QUARRY",
				"name": "Serpentine",
				"price": 53.58,
				"type": "YARNS"
			},
			{
				"sku": "Q225",
				"category": "QUARRY",
				"name": "Sulphur",
				"price": 53.58,
				"type": "YARNS"
			},
			{
				"sku": "Q226",
				"category": "QUARRY",
				"name": "Citrine",
				"price": 53.58,
				"type": "YARNS"
			},
			{
				"sku": "Q230",
				"category": "QUARRY",
				"name": "Hematite",
				"price": 53.58,
				"type": "YARNS"
			},
			{
				"sku": "Q235",
				"category": "QUARRY",
				"name": "Flint",
				"price": 53.58,
				"type": "YARNS"
			},
			{
				"sku": "Q239",
				"category": "QUARRY",
				"name": "Sandstone",
				"price": 53.58,
				"type": "YARNS"
			},
			{
				"sku": "Q240",
				"category": "QUARRY",
				"name": "Alabaster",
				"price": 53.58,
				"type": "YARNS"
			},
			{
				"sku": "Q245",
				"category": "QUARRY",
				"name": "Gypsum",
				"price": 53.58,
				"type": "YARNS"
			},
			{
				"sku": "A405",
				"category": "ARBOR",
				"name": "Morandi",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A408",
				"category": "ARBOR",
				"name": "Nightfall",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A410",
				"category": "ARBOR",
				"name": "Black Fig",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A413",
				"category": "ARBOR",
				"name": "Cobbler",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A416",
				"category": "ARBOR",
				"name": "Potion",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A419",
				"category": "ARBOR",
				"name": "Vintner",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A421",
				"category": "ARBOR",
				"name": "Alizarin",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A423",
				"category": "ARBOR",
				"name": "Firebrush",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A426",
				"category": "ARBOR",
				"name": "Butte",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A433",
				"category": "ARBOR",
				"name": "Tincture",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A438",
				"category": "ARBOR",
				"name": "Klimt",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A440",
				"category": "ARBOR",
				"name": "Crumb",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A444",
				"category": "ARBOR",
				"name": "Parka",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A450",
				"category": "ARBOR",
				"name": "Wreath",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A455",
				"category": "ARBOR",
				"name": "Rainier",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A460",
				"category": "ARBOR",
				"name": "Treehouse",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A461",
				"category": "ARBOR",
				"name": "Dorado",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A466",
				"category": "ARBOR",
				"name": "Sashiko",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A470",
				"category": "ARBOR",
				"name": "Fleet",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A474",
				"category": "ARBOR",
				"name": "Degas",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A479",
				"category": "ARBOR",
				"name": "Carob",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A482",
				"category": "ARBOR",
				"name": "Loam",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A484",
				"category": "ARBOR",
				"name": "Porter",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A485",
				"category": "ARBOR",
				"name": "Kettle",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A487",
				"category": "ARBOR",
				"name": "Humpback",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A490",
				"category": "ARBOR",
				"name": "Heron",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A492",
				"category": "ARBOR",
				"name": "Gale",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A495",
				"category": "ARBOR",
				"name": "Driftwood",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A497",
				"category": "ARBOR",
				"name": "Thaw",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "A499",
				"category": "ARBOR",
				"name": "Hammock",
				"price": 63.10,
				"type": "YARNS"
			},
			{
				"sku": "V513",
				"category": "VALE",
				"name": "Cobbler",
				"price": 65.50,
				"type": "YARNS"
			},
			{
				"sku": "V519",
				"category": "VALE",
				"name": "Vintner",
				"price": 65.50,
				"type": "YARNS"
			},
			{
				"sku": "V523",
				"category": "VALE",
				"name": "Barberry",
				"price": 65.50,
				"type": "YARNS"
			},
			{
				"sku": "V524",
				"category": "VALE",
				"name": "Arabesque",
				"price": 65.50,
				"type": "YARNS"
			},
			{
				"sku": "V538",
				"category": "VALE",
				"name": "Klimt",
				"price": 65.50,
				"type": "YARNS"
			},
			{
				"sku": "V540",
				"category": "VALE",
				"name": "Parchment",
				"price": 65.50,
				"type": "YARNS"
			},
			{
				"sku": "V546",
				"category": "VALE",
				"name": "Vernal",
				"price": 65.50,
				"type": "YARNS"
			},
			{
				"sku": "V566",
				"category": "VALE",
				"name": "Sashiko",
				"price": 65.50,
				"type": "YARNS"
			},
			{
				"sku": "V568",
				"category": "VALE",
				"name": "Nocturne",
				"price": 65.50,
				"type": "YARNS"
			},
			{
				"sku": "V590",
				"category": "VALE",
				"name": "Heron",
				"price": 65.50,
				"type": "YARNS"
			},
			{
				"sku": "V591",
				"category": "VALE",
				"name": "Norway",
				"price": 65.50,
				"type": "YARNS"
			},
			{
				"sku": "V594",
				"category": "VALE",
				"name": "Morel",
				"price": 65.50,
				"type": "YARNS"
			},
			{
				"sku": "V597",
				"category": "VALE",
				"name": "Thaw",
				"price": 65.50,
				"type": "YARNS"
			},
			{
				"sku": "V599",
				"category": "VALE",
				"name": "Hammock",
				"price": 65.50,
				"type": "YARNS"
			},
			{
				"sku": "SCSL",
				"name": "Shelter / Loft",
				"price": 8.00,
				"category": "SHADE CARD",
				"type": "SHADE CARD"
			},
			{
				"sku": "SCQ",
				"name": "Quarry",
				"price": 7.50,
				"category": "SHADE CARD",
				"type": "SHADE CARD"
			},
			{
				"sku": "SCA",
				"name": "Arbor",
				"price": 8.00,
				"category": "SHADE CARD",
				"type": "SHADE CARD"
			},
			{
				"sku": "SCV",
				"name": "Vale",
				"price": 7.50,
				"category": "SHADE CARD",
				"type": "SHADE CARD"
			},
			{
				"sku": "CAP01",
				"category": "CAPSULE",
				"name": "Olga Buraya-Kefelian",
				"price": 15,
				"type": "BOOKS"
			},
			{
				"sku": "CAP02",
				"category": "CAPSULE",
				"name": "Michele Wang",
				"price": 15,
				"type": "BOOKS"
			},
			{
				"sku": "JJF01",
				"category": "WOOLENS",
				"name": "Jared Flood",
				"price": 15,
				"type": "BOOKS",
				"qty": ''
			}
		],

		qty : 0
	},

	computed: {
		orderedProducts: function () {
			var sk = this.sortKey;
			var results = _.orderBy( this.filter(), function( p ) {
				return p[ sk ].toLowerCase ? p[ sk ].toLowerCase() : p[ sk ];
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

						if ( match.indexOf( search ) !== -1 ) {
							return true;
						}
					}
				}

				return false;
			} );

			return left;
		},

		toLowerString: function( val ) {
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

		addProduct: function() {
			var product = _.defaults( {}, this.newProduct, this.defaults );
			this.products.push( product );
			this.newProduct = {};
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

	},

});
