exports.view = function (_, _const)
{
    var view = Ti.UI.createView(_.extend({
        backgroundColor: '#00f'
        }, _const.Views.styles));

    return view;
};