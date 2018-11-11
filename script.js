var numCount = 1;
var resP = $('#result');
$('#range').on('input', function () {
    numCount = $("#range").val();
    $('#numCount').html(numCount + " чисел");
});

function rand(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function generate() {
    resP.html('');
    var min = parseInt($('#min').val());
    var max = parseInt($('#max').val());
    for (var i = 0; i < numCount; i++) {
        resP.append(rand(min, max) + " ");
    }
}
