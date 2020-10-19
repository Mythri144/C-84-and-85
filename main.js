canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
one_width = 120;
one_height = 70;
one_x = 10;
one_y = 10;
two_width = 120;
two_height = 70;
two_x = 10;
two_y = 100;
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";
car_1 = "https://i.postimg.cc/YqdnnNX1/car1.png";
car_2 = "https://www.clker.com/cliparts/q/0/m/g/P/c/red-sports-car-top-view.svg";

function add(){
    background_tag = new Image();
    background_tag.onload = upload_b;
    background_tag.src = background_image;    
    
    car_1tag = new Image();
    car_1tag.onload = upload_1;
    car_1tag.src = car_1;

    car_2tag = new Image();
    car_2tag.onload = upload_2;
    car_2tag.src = car_2;
}

function upload_b(){
    ctx.drawImage(background_tag, 0, 0, canvas.width, canvas.height);
}

function upload_1(){
    ctx.drawImage(car_1tag, one_x, one_y, one_width, one_height);
}

function upload_2(){
    ctx.drawImage(car_2tag, two_x, two_y, two_width, two_height);
}

window.addEventListener("keydown", keys);

function keys(e){
    keyPress = e.keyCode;
    console.log(keyPress);
    if (keyPress=='38'){
        up();
        console.log("up");
    }
    if (keyPress=='40'){
        down();
        console.log("down");
    }
    if (keyPress=='37'){
        left();
        console.log("left");
    }
    if (keyPress=='39'){
        right();
        console.log("right");
    }
    if (keyPress=='87'){
        key_w();
        console.log("key_w");
    }
    if (keyPress=='83'){
        key_s();
        console.log("key_s");
    }
    if (keyPress=='65'){
        key_a();
        console.log("key_a");
    }
    if (keyPress=='68'){
        key_d();
        console.log("key_d");
    }
    if (one_x >= 670){
        console.log("Car 1 Has Won The Race!!! :)");
        document.getElementById("status").innerHTML = "Car 1 Has Won The Race!!! :)";
    }
    if (two_x >= 670){
        console.log("Car 2 Has Won The Race!!! :)");
        document.getElementById("status").innerHTML = "Car 2 Has Won The Race!!! :)";
    }
}

function up(){
    if (one_y>0){
        console.log("When the up arrow is pressed, car one's x = " + one_x + " & y = " + one_y);
        one_y = one_y - 10;
        upload_b();
        upload_1();
        upload_2();
    }
}

function down(){
    if (one_y<=470){
        console.log("When the down arrow is pressed,  car one's x = " + one_x + " & y = " + one_y);
        one_y = one_y + 10;
        upload_b();
        upload_1();
        upload_2();
    }
}

function left(){
    if (one_x>0){
        console.log("When the left arrow is pressed, car one's x = " + one_x + " & y = " + one_y);
        one_x = one_x - 10;
        upload_b();
        upload_1();
        upload_2();
    }
}

function right(){
    if (one_x<=670){
        console.log("When the right arrow is pressed, car one's x = " + one_x + " & y = " + one_y);
        one_x = one_x + 10;
        upload_b();
        upload_1();
        upload_2();
    }
}

function key_w(){
    if (two_y>0){
        console.log("When the up arrow is pressed, car two's x = " + two_x + " & y = " + two_y);
        two_y = two_y - 10;
        upload_b();
        upload_2();
        upload_1();
    }
}

function key_s(){
    if (two_y<=470){
        console.log("When the down arrow is pressed, car two's x = " + two_x + " & y = " + two_y);
        two_y = two_y + 10;
        upload_b();
        upload_2();
        upload_1();
    }
}

function key_a(){
    if (two_x>0){
        console.log("When the left arrow is pressed, car two's x = " + two_x + " & y = " + two_y);
        two_x = two_x - 10;
        upload_b();
        upload_2();
        upload_1();
    }
}

function key_d(){
    if (two_x<=670){
        console.log("When the right arrow is pressed, car two's x = " + two_x + " & y = " + two_y);
        two_x = two_x + 10;
        upload_b();
        upload_2();
    }
}
