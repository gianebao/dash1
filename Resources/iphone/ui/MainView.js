exports.view = function (_, _const)
{
    Titanium.UI.setBackgroundColor('#000');
    
    var winMain = Ti.UI.createWindow({
        title: 'Window 1',
        backgroundColor: '#fff'
    });
    
    _const['Views'] = {
        styles: {
            width: Ti.Platform.displayCaps.platformWidth - _const.margins.left - _const.margins.right,
            height: Ti.Platform.displayCaps.platformHeight - _const.margins.top - _const.margins.bottom
        }
    };
    
    var contView = Ti.UI.createScrollableView({
        views: [
            require('ui/views/View1').view(_, _const),
            require('ui/views/View2').view(_, _const),
            require('ui/views/View3').view(_, _const)
        ],
        width: Ti.Platform.displayCaps.platformWidth + _const.margins.left + _const.margins.right,
        height: Ti.Platform.displayCaps.platformHeight + _const.margins.top + _const.margins.bottom,
        clipViews: true,
        showPagingControl: true
    });
    
    winMain.add(contView);
    
    return winMain;
};