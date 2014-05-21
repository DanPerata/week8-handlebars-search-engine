var dummyData = require('../models/search-data.js');

var searchController ={
	search: function (req, res){
		var langs = req.query.lang;
		console.log(langs)

		var descrip = dummyData.programming[langs].desc
		res.send({final: descrip})
	}
};

module.exports= searchController;