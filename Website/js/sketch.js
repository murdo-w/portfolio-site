let phi;
let oct;
let isoc;
let dodec;
let tetr;
let hexa;

let a;
let b;
let c;
let d;
let e;
let f;
let g;


function setup() {

  phi = (1 + (sqrt(5))) / 2; //golden ratio
  oct = 94;
  isoc = 100;
  dodec = 69;
  tetr = 129;
  hexa = 445;

  //octahedron
  a = (1 / (2 * sqrt(2))) * oct;
  b = (1 / 2) * oct;
  //isocahedron
  c = ((1 / 2)) * isoc;
  d = (1 / (2 * phi)) * isoc;
  //dodecahedron
  e = (1 / phi) * dodec;
  f = (2 - phi) * dodec;
  //tetrahedron
  g = (1) * tetr;
  //hexahedron
  //use box function

  var canvas = createCanvas(windowWidth - 17, 400, WEBGL);
  canvas.parent('sketch-holder');

  noFill();
}

function draw() {
  colorMode(HSB, 100);
  background(0,0,90);
  colorMode(HSB, 255);
  stroke(0);
  translate(width / 2, height / 2, 0);

  camera(
    mouseX + (windowWidth/2)- width , mouseY - height, 300, // eyeX, eyeY, eyeZ
    0.0, 0.0, 0.0,                              // centerX, centerY, centerZ
    0.5, 0.5, 0.5);

  /*
  noStroke();
  sphereDetail(50);
  fill(0,20);
  sphere(50);
  noFill();
  */

  //octahedron with a/b
  stroke(51, 255, 255);
  push();
  rotateX(radians(25));
  beginShape();
  vertex(-a, 0, a);
  vertex(-a, 0, -a);
  vertex(0, b, 0);
  endShape(CLOSE);
  beginShape();
  vertex(-a, 0, -a);
  vertex(a, 0, -a);
  vertex(0, b, 0);
  endShape(CLOSE);
  beginShape();
  vertex(a, 0, -a);
  vertex(a, 0, a);
  vertex(0, b, 0);
  endShape(CLOSE);
  beginShape();
  vertex(a, 0, a);
  vertex(-a, 0, a);
  vertex(0, b, 0);
  endShape(CLOSE);
  beginShape();
  vertex(a, 0, -a);
  vertex(a, 0, a);
  vertex(0, -b, 0);
  endShape(CLOSE);
  beginShape();
  vertex(a, 0, a);
  vertex(-a, 0, a);
  vertex(0, -b, 0);
  endShape(CLOSE);
  beginShape();
  vertex(-a, 0, a);
  vertex(-a, 0, -a);
  vertex(0, -b, 0);
  endShape(CLOSE);
  beginShape();
  vertex(-a, 0, -a);
  vertex(a, 0, -a);
  vertex(0, -b, 0);
  endShape(CLOSE);
  pop();

  //isocahedron with d/c
  stroke(102, 255, 255);
  beginShape();
  vertex(0, d, -c);
  vertex(d, c, 0);
  vertex(-d, c, 0);
  endShape(CLOSE);
  beginShape();
  vertex(0, d, c);
  vertex(-d, c, 0);
  vertex(d, c, 0);
  endShape(CLOSE);
  beginShape();
  vertex(0, d, c);
  vertex(0, -d, c);
  vertex(-c, 0, d);
  endShape(CLOSE);
  beginShape();
  vertex(0, d, c);
  vertex(c, 0, d);
  vertex(0, -d, c);
  endShape(CLOSE);
  beginShape();
  vertex(0, d, -c);
  vertex(0, -d, -c);
  vertex(c, 0, -d);
  endShape(CLOSE);
  beginShape();
  vertex(0, d, -c);
  vertex(-c, 0, -d);
  vertex(0, -d, -c);
  endShape(CLOSE);
  beginShape();
  vertex(0, -d, c);
  vertex(d, -c, 0);
  vertex(-d, -c, 0);
  endShape(CLOSE);
  beginShape();
  vertex(0, -d, -c);
  vertex(-d, -c, 0);
  vertex(d, -c, 0);
  endShape(CLOSE);
  beginShape();
  vertex(-d, c, 0);
  vertex(-c, 0, d);
  vertex(-c, 0, -d);
  endShape(CLOSE);
  beginShape();
  vertex(-d, -c, 0);
  vertex(-c, 0, -d);
  vertex(-c, 0, d);
  endShape(CLOSE);
  beginShape();
  vertex(d, c, 0);
  vertex(c, 0, -d);
  vertex(c, 0, d);
  endShape(CLOSE);
  beginShape();
  vertex(d, -c, 0);
  vertex(c, 0, d);
  vertex(c, 0, -d);
  endShape(CLOSE);
  beginShape();
  vertex(0, d, c);
  vertex(-c, 0, d);
  vertex(-d, c, 0);
  endShape(CLOSE);
  beginShape();
  vertex(0, d, c);
  vertex(d, c, 0);
  vertex(c, 0, d);
  endShape(CLOSE);
  beginShape();
  vertex(0, d, -c);
  vertex(-d, c, 0);
  vertex(-c, 0, -d);
  endShape(CLOSE);
  beginShape();
  vertex(0, d, -c);
  vertex(c, 0, -d);
  vertex(d, c, 0);
  endShape(CLOSE);
  beginShape();
  vertex(0, -d, -c);
  vertex(-c, 0, -d);
  vertex(-d, -c, 0);
  endShape(CLOSE);
  beginShape();
  vertex(0, -d, -c);
  vertex(d, -c, 0);
  vertex(c, 0, -d);
  endShape(CLOSE);
  beginShape();
  vertex(0, -d, c);
  vertex(-d, -c, 0);
  vertex(-c, 0, d);
  endShape(CLOSE);
  beginShape();
  vertex(0, -d, c);
  vertex(c, 0, d);
  vertex(d, -c, 0);
  endShape(CLOSE);

  //dodecahedron with e/f
  stroke(153, 255, 255);
  beginShape();
  vertex(f, 0, dodec);
  vertex(-f, 0, dodec);
  vertex(-e, e, e);
  vertex(0, dodec, f);
  vertex(e, e, e);
  endShape(CLOSE);
  beginShape();
  vertex(-f, 0, dodec);
  vertex(f, 0, dodec);
  vertex(e, -e, e);
  vertex(0, -dodec, f);
  vertex(-e, -e, e);
  endShape(CLOSE);
  beginShape();
  vertex(f, 0, -dodec);
  vertex(-f, 0, -dodec);
  vertex(-e, -e, -e);
  vertex(0, -dodec, -f);
  vertex(e, -e, -e);
  endShape(CLOSE);
  beginShape();
  vertex(-f, 0, -dodec);
  vertex(f, 0, -dodec);
  vertex(e, e, -e);
  vertex(0, dodec, -f);
  vertex(-e, e, -e);
  endShape(CLOSE);
  beginShape();
  vertex(0, dodec, -f);
  vertex(0, dodec, f);
  vertex(e, e, e);
  vertex(dodec, f, 0);
  vertex(e, e, -e);
  endShape(CLOSE);
  beginShape();
  vertex(0, dodec, f);
  vertex(0, dodec, -f);
  vertex(-e, e, -e);
  vertex(-dodec, f, 0);
  vertex(-e, e, e);
  endShape();
  beginShape();
  vertex(0, -dodec, -f);
  vertex(0, -dodec, f);
  vertex(-e, -e, e);
  vertex(-dodec, -f, 0);
  vertex(-e, -e, -e);
  endShape(CLOSE);
  beginShape();
  vertex(0, -dodec, f);
  vertex(0, -dodec, -f);
  vertex(e, -e, -e);
  vertex(dodec, -f, 0);
  vertex(e, -e, e);
  endShape(CLOSE);
  beginShape();
  vertex(dodec, f, 0);
  vertex(dodec, -f, 0);
  vertex(e, -e, e);
  vertex(f, 0, dodec);
  vertex(e, e, e);
  endShape(CLOSE);
  beginShape();
  vertex(dodec, -f, 0);
  vertex(dodec, f, 0);
  vertex(e, e, -e);
  vertex(f, 0, -dodec);
  vertex(e, -e, -e);
  endShape(CLOSE);
  beginShape();
  vertex(-dodec, f, 0);
  vertex(-dodec, -f, 0);
  vertex(-e, -e, -e);
  vertex(-f, 0, -dodec);
  vertex(-e, e, -e);
  endShape(CLOSE);
  beginShape();
  vertex(-dodec, -f, 0);
  vertex(-dodec, f, 0);
  vertex(-e, e, e);
  vertex(-f, 0, dodec);
  vertex(-e, -e, e);
  endShape(CLOSE);

  //tetrahedron
  stroke(204, 255, 255);
  push();
  rotateZ(10);
  rotateX(15);
  beginShape();
  vertex(g, g, g);
  vertex(-g, g, -g);
  vertex(g, -g, -g);
  endShape(CLOSE);
  beginShape();
  vertex(-g, g, -g);
  vertex(-g, -g, g);
  vertex(g, -g, -g);
  endShape(CLOSE);
  beginShape();
  vertex(g, g, g);
  vertex(g, -g, -g);
  vertex(-g, -g, g);
  endShape(CLOSE);
  beginShape();
  vertex(g, g, g);
  vertex(-g, -g, g);
  vertex(-g, g, -g);
  endShape(CLOSE);
  pop();

  //hexahedron
  stroke(255, 255, 255);
  box(hexa);
}

function windowResized(){
  resizeCanvas(windowWidth - 17, 400, WEBGL);
  //var canvas = createCanvas(windowWidth, 400, WEBGL);
  //canvas.parent('sketch-holder');
}
