let answers = ['43', '28', '12', '35', '2', '29'];
let clues = ['First clue: ', 'Second clue: ', 'Third clue: ', 'Fourth clue: ', 'Fifth clue: ', 'Treat vouchers are hiding in the ...']
let i = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function(e) {
        e.preventDefault();
        if (document.querySelector('#number').value === answers[i] AND i < 5) {
            document.getElementById("message").innerHTML = clues[i];
            i++;
        }
        else if (i == 5)
            var canvas = document.createElement('canvas');
            canvas.id = "c";
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.position = "absolute";
            
            var body = document.getElementsByTagName("body")[0];
            body.appendChild(canvas);

            setTimeout(function(){
                body.removeChild(canvas);
            }, 10000)

        else {
            document.getElementById("message").innerHTML = "Ha ha! Wrong number. My secret is safe.";
        };
    };
});