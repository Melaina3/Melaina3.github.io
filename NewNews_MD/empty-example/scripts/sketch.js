let img1;
let img2;
let img3;
let img4;
let txt1;

function preload(){
img1 = createImg('assets/1.png', 'webflow');//origin url and alt text
img2 = createImg('assets/win2.jpeg', 'window image');
img3 = createImg('assets/win8.jpeg', 'window image');
img4 = createImg('assets/win10.jpeg', 'window image');
img5 = createImg('assets/win11.jpeg', 'window image');
img6 = createImg('assets/win12.jpeg', 'window image');
txt1 = createP('New Era News');
txt2 = createP('Robots Buying Groceries');
txt3 = createP('Introducing the first-ever grocery store manage buy robots. You can shop in-store or online. The perks of having a grocery managed by robots is that they can identify the best products and deals in-store.');
txt4 = createP('First Self Flying Plane');
txt5 = createP('The first self-flying is going to take its first group of flyers next month. Lots of people have been skeptical about the safety of the plane, but pilot John Sanders says everything will be fine. Pilot John Sanders has tested out the plane and says it is 100% self-sufficient, but he will be on next months flight in case anything goes wrong.' );
txt6 = createP('1D Reunion After 35 Years');
txt7 = createP('Justin and Haley Biber Divorce');
txt8 = createP('Nick Cannon Has His 50th Kid');
txt12 = createP('Pop Culture News');
txt13 = createP('Betty White Reincarnated!');
txt14 = createP('After years of trial and error scientists have brought Betty White back to life through a VR head set. Scientists have wired the headset to her brain allowing her to see the world through new eyes. Do not worry she still has the same sense of humor just some slight memory loss. If you see Betty on the street feel free to say high for she is very friendly and be prepared to see her in her new upcoming show "Catching up with Betty.');
txt15 = createP('4/25/2050');
}

function setup() {
  createCanvas(1920, 1920);

  img1.position(490, 1210);
  img1.size(200, 200);

  img2.position(790, 200);
  img2.size(410, 300);

  img3.position(490, 600);
  img3.size(350, 200);

  img4.position(490, 870);
  img4.size(350,200);

  img5.position(745, 1210);
  img5.size(200,200);

  img6.position(995, 1210);
  img6.size(200,200);

  txt1.style('font-size', '55px');
  txt1.style('color','black');
  txt1.position(685,10);

  txt2.style('font-size', '25px');
  txt2.style('color','black');
  txt2.position(870,570);

  txt3.style('font-size', '15px');
  txt3.size(360,600);
  txt3.style('color','gray');
  txt3.position(870,620);

  txt4.style('font-size', '25px');
  txt4.style('color','black');
  txt4.position(870,840);

  txt5.style('font-size', '15px');
  txt5.size(360,600);
  txt5.style('color','gray');
  txt5.position(870,895);

  txt6.style('font-size', '16px');
  txt6.style('color','black');
  txt6.position(490,1410);

  txt7.style('font-size', '16px');
  txt7.style('color','black');
  txt7.position(745,1410);

  txt8.style('font-size', '16px');
  txt8.style('color','black');
  txt8.position(995,1410);

  txt12.style('font-size', '16px');
  txt12.style('color','black');
  txt12.position(780,1150);

  txt13.style('font-size', '25px');
  txt13.style('color','black');
  txt13.position(490, 175);

  txt14.style('font-size', '15px');
  txt14.size(280,600);
  txt14.style('color','gray');
  txt14.position(490,230);

  txt15.style('font-size', '15px');
  txt15.style('color','gray');
  txt15.position(390,120);
}

function draw() {
  background ('#FFFFFF');
  line(370, 150, 1300, 150);
  describe(
    'a 78 pixels long line running from mid-top to bottom-right of canvas'
  );
  line(370, 540, 1300, 540);
  describe(
    'a 78 pixels long line running from mid-top to bottom-right of canvas'
  );
  line(370, 1118, 1300, 1118);
  describe(
    'a 78 pixels long line running from mid-top to bottom-right of canvas'
  );
}
