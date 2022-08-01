window.addEventListener("wheel", topJudge);

function topJudge() {
    if ($(document).scrollTop() > 400) {
        $("button.backTop").addClass("backTop--show")
    } else {
        $("button.backTop").removeClass("backTop--show")
    }

}
$("button.backTop").click(function() {
    $("html,body").animate({ scrollTop: 0 }, 500);
    setTimeout(() => {
        topJudge();
    }, 500);
})