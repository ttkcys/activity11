$(document).ready(function () {
    $('#nav_list a').click(function (event) {
        event.preventDefault();


        var speaker = $(this).attr('title');
        var jsonFile = 'json_files/' + speaker + '.json'
        $('main').empty();
        $.getJSON(jsonFile, function (data) {

            var speakerData = data.speakers[0];

            var newContent = '<h1>' + speakerData.title + '</h1>';
            newContent += '<img src="' + speakerData.image + '" alt="' + speakerData.speaker + '">';
            newContent += '<h2>' + speakerData.month + '<br>' + speakerData.speaker + '</h2>';
            newContent += '<p>' + speakerData.text + '</p>';


            $('main').html(newContent);
        });
    });
}); // end ready
