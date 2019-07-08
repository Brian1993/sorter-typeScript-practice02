"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this._collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this._collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < (length - i - 1); j++) {
                if (this._collection.compare(j, j + 1)) {
                    this._collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
