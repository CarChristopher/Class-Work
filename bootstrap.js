// Insert clever comment


// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'Brownie Recipe', 		// this is the TITLE place in the class
				'http://www.marthastewart.com/1502268/brownie-recipes',	// this is the LINK place in the class
				'Martha Stewart',			// this is the AUTHOR place in the class
				'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/2/18/1/FNK_Brownie-Guide-Classic-Brownies_s4x3.jpg.rend.hgtvcom.616.462.jpeg',	// this is the IMAGE place in the class
				'Brownies that melt in your mouth.' // this is the BODY place in the class
				),

			new Post(
				'Chocolate Gelato Recipe',
				'http://theitaliandishblog.com/imported-20090913150324/2011/2/8/chocolate-gelato.html',
				'The Italian Dish',
				'http://theheritagecook.com/wp-content/uploads/2012/06/chocolate-sorbet-gelato2.jpg', // this is a local image in the same folder as the js script
				'This is the perfect treat for summer with the combination of cold and rich chocolate'
				),

			new Post(
				'Lemon Meringue pie',
				'https://www.bettycrocker.com/recipes/classic-lemon-meringue-pie/8f991b88-55b0-4740-b12c-251958d663a6',
				'Betty Crocker',
				'https://media.fromthegrapevine.com/assets/images/2016/3/lemon-meringue-pie-lead.jpg.839x0_q71_crop-scale.jpg',
				'Lemin Meringe pie as it is known today, is a 19th-century product. The earliest recorded recipe was attributed to Alexander Frehse, a Swiss baker from Romandie.'
				),

			new Post(
				'Creme Brulee',
				'http://allrecipes.com/recipe/19165/creme-brulee/',
				'All Recipes',
				'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/1/EA0914_creme-brulee_s4x3.jpg.rend.hgtvcom.616.462.jpeg',
				'exquisitely rich and elegant dessert.'
				),

			new Post(
				'Mexican Hot Chocolate',
				'http://www.foodnetwork.com/recipes/mexican-hot-chocolate-recipe1-2013212',
				'Sandra Lee',
				'https://static.tumblr.com/4fc0e083133726f485cbe7f5b3591b41/ceti1xq/qm5oiydbn/tumblr_static_tumblr_static_54f59w580hc88g00w48okwwsw_640.jpg',
				'Warm, cozy, chocolate-y heaven that fills you up with this comforting feeling that washes all the tiredness away.'
				),
				
			new Post(
				'Tiramisu',
				'http://allrecipes.com/recipe/21412/tiramisu-ii/',
				'Christine',
				'http://25.media.tumblr.com/tumblr_m6pnxfRts71ra4ikyo1_500.jpg',
				'Mascarpone custard layered with whipped cream and rum and coffee soaked ladyfingers.'
				),
				
			new Post(
				'Doughnuts',
				'https://cooking.nytimes.com/recipes/1017060-doughnuts',
				'Mark Bittman',
				'https://s-media-cache-ak0.pinimg.com/736x/80/6f/5e/806f5ea21cf26bd0cbec8072b7e75bbe.jpg',
				'doughnuts, tasty no matter what the occasion.'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});


