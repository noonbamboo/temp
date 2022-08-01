var navPointBarIndex = 0;
var nav_itemPosition;
var pointlock;
const h_naviArray = $(".header__navitem").toArray();
$(".nav_item_pointbar").css("left", $(".header__navitem.header__navitem--focus").position().left);
$(".nav_item_pointbar").css("width", h_naviArray[0].clientWidth);
for (let i = 0; i < h_naviArray.length; i++) {

    h_naviArray[i].onmouseover = function() {
        clearTimeout(pointlock);
        navPointBarIndex = i;
        nav_itemPosition = $(this).position();
        $(".nav_item_pointbar").css("left", nav_itemPosition.left);
    };
    h_naviArray[i].onmouseout = function() {
        pointlock = setTimeout(() => {
            navPointBarIndex = i;
            nav_itemPosition = $(".header__navitem.header__navitem--focus").position();
            $(".nav_item_pointbar").css("left", nav_itemPosition.left);
        }, 500);

    }
}