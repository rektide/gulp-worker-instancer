module.exports = function(module){
	return new Worker(require(module+'-worker'))
}
