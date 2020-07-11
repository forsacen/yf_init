String.prototype.trimL = function (char) {
    return this.replace(new RegExp('^\\'+char+'+', 'g'), '')
}
String.prototype.trimR = function (char) {
    return this.replace(new RegExp('\\'+char+'+$', 'g'), '')
}
String.prototype.trimD = function (char) {
    return this.replace(new RegExp('^\\'+char+'+|\\'+char+'+$', 'g'), '')
}