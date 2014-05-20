var dummyData = require('../models/search-data.js');

var searchController ={
	search: function (req, res){
		var lang = req.query;
		console.log(lang)
		// var descrip = dummyData.lang.desc
		// res.send(r)
	}
};

module.exports= searchController;