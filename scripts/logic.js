const htmlEl = document.getElementsByTagName('html')[0];

const toggleTheme = (theme) => {
    htmlEl.dataset.theme = theme;
}

var screen = document.querySelector('#screen');
    var btn = document.querySelectorAll('.btn');
    var mbtn = document.querySelectorAll('.membtn');

    
    for (item of btn) {
        item.addEventListener('mousedown', (e) => {
            btntext = e.target.innerText;

            if (btntext == '×') {
                btntext = '*';
            }

            if (btntext == '÷') {
                btntext = '/';
            }
            if(btntext == 'mod'){
                btntext='%'
            }

            if(btntext=='Clr'){
                btntext=''
            }
            if(btntext=='C'){
                btntext=''
            }
            
            


            screen.value += btntext;
        });
    }


    for (item of mbtn) {
        item.addEventListener('click', (e) => {
            memtxt = e.target.innerText;
        });
    }
    var mem=0;

    function MS(){ 
        
            mem=parseInt(screen.value);
            allclr();
            
        
        }
    function Mplus(){ 
        
        
            mem=mem+parseInt(screen.value);
            allclr();
        
    
    }
    function Mminus(){ 
        
        
        mem=mem-parseInt(screen.value);
        allclr();
    }

    function MR(){ 
        
        
        screen.value=mem;
    }

    function MC(){ 
        
        
        mem=0;
    }

    function sin(){
        screen.value=Math.sin(screen.value);
    }

    function cos(){
        screen.value=Math.cos(screen.value);
    }

    function tan(){
        screen.value=Math.tan(screen.value);
    }

    function square(){
        screen.value=screen.value*screen.value;
    }

    function inverse(){
        screen.value=1/screen.value;
    }

    function abs(){
        screen.value=Math.abs(screen.value);
    }

    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }

    function log() {
        screen.value = Math.log10(screen.value);
    
    
    }

    function ln() {
        screen.value = Math.log(screen.value);
    
    
    }


    function pi() {
        screen.value = 3.14159265359;
    }

    function e() {
        screen.value = 2.71828182846;
    }

    function fact() {
        var i, num, f;
        f = 1
        num = screen.value;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }

        i = i - 1;

        screen.value = f;
    }

    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }
    function allclr() {
        screen.value = ''
    }