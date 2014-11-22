"use strict"

var gulp = require("gulp"),
  named = require("vinyl-named"),
  webpack = require("gulp-webpack")

gulp.task("fixture-webpack-multiple", function(){
	return gulp.src("fixture-webpack/*js")
	.pipe(named())
	.pipe(webpack({
		/* config */
	}, null, function(err, stats) {
		console.log('stats', stats)
		/* Use stats to do more things if needed */
	}))
	.pipe(gulp.dest("dist/multiple"))
})

gulp.task("default", ["fixture-webpack-multiple"])
