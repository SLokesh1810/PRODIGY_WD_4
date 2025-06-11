
function typeWriterText() {
    var txt = ` Passionate about Data science, Machine Learning, Web & Native app Development and Design. A tech
            enthusiast with strong problem-solving skills, eager to learn and innovate. Recognized as a good listener,
            observer and motivator. Actively seeking internships and workshops to enhance skills and stay updated with
            industry trends.`;
    var i = 0;
    
    textCon = document.getElementById('aboutMeText');
    var speed = 40;
    var headTxt = `ABOUT ME`;
    function writeHead(){
        if (i < txt.length) {
            document.getElementById('aboutMeHead').innerHTML += headTxt.charAt(i);
            i++;
            setTimeout(writeHead, speed);
        }
    }
    writeHead();
    var j = 0;
    function writeTxt() {
        if (j < txt.length) {
            textCon.innerHTML += txt.charAt(i);
            j++;
            setTimeout(writeTxt, speed);
        }
    }
    writeTxt();
}
typeWriterText();