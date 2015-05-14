angular.module("customFilters", [])

//The arguments to the filter method are the name of the filter, which is unique in this case, and a factory
//function that returns a filter function that does the actual work. AngularJS calls the factory function when it needs to
//create an instance of the filter, and the filter function is invoked to perform the filtering.

//All filter functions are passed the data they are being asked to format, but my filter defines an additional
//argument, called propertyName, which I use to specify the object property that will be used to generate a list of unique
//values.
        .filter("unique", function () {

            return function (data, propertyName) {
                if (angular.isArray(data) && angular.isString(propertyName)) {
                    var results = [];
                    var keys = {};

                    for (var i = 0; i < data.length; i++) {
                        var val = data[i][propertyName];
                        if (angular.isUndefined(keys[val])) {
                            keys[val] = true;
                            results.push(val);
                        }
                    }
                    return results;
                } else {
                    return data;
                }
            }
        })
        .filter("range", function ($filter) {
            return function (data, page, size) {
                if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
                    var start_index = (page - 1) * size;
                    if (data.length < start_index) {
                        return [];
                    } else {
                        return $filter("limitTo")(data.splice(start_index), size);
                    }
                } else {
                    return data;
                }
            }
        })
        .filter("pageCount", function () {
            return function (data, size) {
                if (angular.isArray(data)) {
                    var result = [];
                    for (var i = 0; i < Math.ceil(data.length / size); i++) {
                        result.push(i);
                    }
                    return result;
                } else {
                    return data;
                }
            }
        });


