"use strict";

var plugin = {};

plugin.parse = function(data, callback) {
	if (!data || !data.postData || !data.postData.content) {
	    return callback(null, data);
	}

	plugin.parseRaw(data.postData.content, function (err, content) {
		data.postData.content = content;
		callback(err, data);
	});
};

plugin.parseRaw = function (content, callback) {
	callback(null, 
		content.replace(/<blockquote>\s*<p dir="auto">! *(\((.+?)\))?([\S\s]*?)<\/p>\s*<\/blockquote>/gm, '<blockquote class="spoiler" tabindex="-1" data-title="$2"><p dir="auto">$3</p></blockquote>')
		.replace(/^<p dir="auto">::\s*?([\S\s]*?)\s*?::<\/p>$/gm, '<div class="text-center"><p dir="auto">$1</p></div>')
		.replace(/^<p dir="auto">:\s*?([\S\s]*?)\s*?::<\/p>$/gm, '<div class="text-right"><p dir="auto">$1</p></div>')
	);
};

module.exports = plugin;