function matrix() {var c = document.getElementById("c");
    var ctx = c.getContext("2d");

    //making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    //chinese characters - taken from the unicode charset
    var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
    //converting the string into an array of single characters
    chinese = chinese.split("");

    var font_size = 10;
    var columns = c.width/font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for(var x = 0; x < columns; x++)
        drops[x] = 1; 

    //drawing the characters
    function draw()
    {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);
        
        ctx.fillStyle = "#0F0"; //green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for(var i = 0; i < drops.length; i++)
        {
            //a random chinese character to print
            var text = chinese[Math.floor(Math.random()*chinese.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i*font_size, drops[i]*font_size);
            
            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;
            
            //incrementing Y coordinate
            drops[i]++;
        }
    }

    setInterval(draw, 33);
}

let answers = ['123', '63', '0800636262', '1761', '921', '35'];
let clues = [
    'Have you ever seen a coaster that looks Scottish?', 
'Reds, yellows, greens, blues, indigos, violets. I feel somethings is missing', 
'Well if you&#39re not happy you had better make the call', 
'Are these two still the usual two choices for TV at Nain and Tadcu&#39s?', 
'Mr Tumble&#39s spotty drier!', 
'Noooooooooooooooooooooooooo! My codes!']
let i = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        while (i < 6)
            if (document.querySelector('#number').value === answers[i]) {
                document.getElementById("message").innerHTML = clues[i];
                i++;
                if (i==6) {
                    let body = document.getElementsByTagName("body")[0];
                    let div = document.getElementsByTagName("div")[0];
                    let canvas = document.createElement('canvas');
                    let ansp = document.createElement('p');
                    div.remove(div);             
                    canvas.id = "c";
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    canvas.style.position = "absolute";
                    body.appendChild(canvas);
                    matrix();
                    setTimeout(function(){
                        canvas.remove(canvas);
                        body.appendChild(ansp);
                        ansp = document.getElementsByTagName("p")[0];
                        ansp.innerHTML = 'Congratulations children. I hope you had a fantastic nutty breakfast hunt. The ticket is right under you nose. Or fingers.';
                        ansp.style.color = '#0F0';
                        ansp.style.fontSize = '20pt';
                        body.style.backgroundColor = 'black';
                        ansp.style.fontFamily = 'courier';
                        ansp.style.fontWeight = 700;
                        ansp.className = 'w3-display-middle';
                    }, 10000)
                }
                return false
                }
            else {
                document.getElementById("message").innerHTML = "Ha ha! Wrong number. My secret is safe.";
                return false
            };


        }
    });
