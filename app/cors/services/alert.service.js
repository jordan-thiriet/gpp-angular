'use strict';
/**
 * Service to push alert notification
 */
app.service('$alert',['toaster', '$filter' ,function(toaster, $filter) {

    /**
     * Alert error
     * @param msg
     */
    this.error = function(msg) {
        toaster.pop({
            type : 'error',
            title : $filter('translate')('ERROR'),
            body: msg,
            showCloseButton: true
        });
    };

    /**
     * Alert info
     * @param msg
     */
    this.info = function(msg) {
        toaster.pop({
            type : 'info',
            title : $filter('translate')('INFO'),
            body: msg,
            showCloseButton: true
        });
    };

    /**
     * Alert success
     * @param msg
     */
    this.success = function(msg) {
        toaster.pop({
            type : 'success',
            title : $filter('translate')('SUCCESS'),
            body: msg,
            showCloseButton: true
        });
    };

}]);