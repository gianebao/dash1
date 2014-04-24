exports.view = function (_, _const)
{
    var view = Ti.UI.createView(_.extend({
        backgroundColor: '#f00'
    }, _const.Views.styles));
    
    var img = Ti.UI.createImageView({
        image : "http://farm7.staticflickr.com/6194/6156041431_e1f481a696.jpg",
        /* http://www.flickr.com/photos/65798313@N06/6156041431/sizes/m/in/pool-685365@N25/ */
        top : 60,
        width : 250,
        height : 187,
        left : 35
    });
    
    view.add(img);
    
    window.addEventListener('touchstart', function(e)
    {
        tilt(e);
    });
    
    view.addEventListener('touchmove', function(e)
    {
        tilt(e);
    });
    
    view.addEventListener('touchend', function(e)
    {
        var t =  Titanium.UI.create3DMatrix();
    
        t = t.rotate(0,0,1,0);
        t = t.rotate(0,1,0,0);
    
        var a1 = Titanium.UI.createAnimation();
        a1.transform = t;
        a1.duration = 300;
        img.animate(a1);
    
        //img.transform = t;
    });
    
    function tilt(e)
    {
        var t =  Titanium.UI.create3DMatrix();
    
        var rectW = img.getWidth();
        var rectH = img.getHeight();
        var maxDim = Math.max(rectW, rectH);
    
        var angle = 10;
        
        var distanceFromCenterX = -(rectW / 2) + e.x;
        var normalisedDistanceX = 2 * distanceFromCenterX / maxDim;
    
        var distanceFromCenterY = -(rectH / 2) + e.y;
        var normalisedDistanceY = 2 * distanceFromCenterY / maxDim;
    
        var tiltAngleX = normalisedDistanceX * angle;
        var tiltAngleY = - normalisedDistanceY * angle;
    
    
        t.m34 = 1.0/-1000;
        t = t.rotate(tiltAngleX,0,1,0);
        t = t.rotate(tiltAngleY,1,0,0);
    
        img.transform = t;
    }

    return view;
};