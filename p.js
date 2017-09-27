function foo() {
    return "bar"
}

// var a=foo()

var express = require('express')

function foo(n) {
    return function (a) {
        return n + a;
    }
}

let a = 1
var p = 2



console.log("asdf" +p)
console.log(`asdf${p}sdfg`)