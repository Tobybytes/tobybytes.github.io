let answers = ['43', '28', '12', '35', '2', '29'];
let clues = ['First clue: ', 'Second clue: ', 'Third clue: ', 'Fourth clue: ', 'Fifth clue: ', 'Nooooooo!']
let i = 0;


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        while (i < 6)
            if (document.querySelector('#number').value === answers[i]) {
                document.getElementById("message").innerHTML = clues[i];
                i++;
                return false
                }
            else {
                document.getElementById("message").innerHTML = "Ha ha! Wrong number. My secret is safe.";
                return false
            };

        if (i > 5) {
            let body = document.getElementsByTagName("body")[0];
            let div = document.getElementsByTagName("div")[0];
            let canvas = document.createElement('canvas');
            let ansdiv = document.createElement('div');
            let ansp = document.createElement('p');
            div.remove(div);             
            canvas.id = "c";
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.position = "absolute";
            body.appendChild(canvas);
            matrix();

            setTimeout(function(){
                ansdiv.className = "w3-display-middle";
                ansp.style.color = "#0F0";
                ansdiv.style.backgroundColor = "black";
                ansdiv.width = "25%";
                ansdiv.height = "15%";
                body.appendChild(ansdiv);
                body.appendChild(ansp);
            }, 5000)

            setTimeout(function(){
                ansp.innerHTML = 'Paw Patrol DVD'
            }, 200)

            return false
        }
    };
});