exports.view = function (_, _const)
{
    var view = Ti.UI.createView(_.extend({
        backgroundColor: '#0f0'
        }, _const.Views.styles));

    return view;
};