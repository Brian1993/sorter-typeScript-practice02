"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this._collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this._collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < (length - i - 1); j++) {
                if (this._collection[j] > this._collection[j + 1]) {
                    var leftHand = this._collection[j];
                    this._collection[j] = this._collection[j + 1];
                    this._collection[j + 1] = leftHand;
                }
            }
        }
        return this._collection.slice();
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
console.log(sorter.sort());
