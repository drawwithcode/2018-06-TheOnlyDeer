let rawData;
let data = {};

function preload(){
    rawData = loadJSON('data.json');
}

function setup() {
    let newData = [];
    for (let d in rawData){
        newData.push(rawData[d])
    }
    newData.forEach(e =>{
        if (data[e["Anno_evento"]] === undefined)
            data[e["Anno_evento"]] = [0,0];
        switch(e["Genere"]){
            case "Femmine":
                data[e["Anno_evento"]][0]++;
                break;
            case "Maschi":
                data[e["Anno_evento"]][1]++;
                break;
        }
    })

    createCanvas(windowWidth,windowHeight);
    ellipseMode(CENTER);
    stroke('#000');
    textAlign(CENTER);
    textSize(20);
}

function draw() {
    background('#fff');
            text("Nascite a Milano negli anni:",width / 2, height / 10);
    for(let anno in data){
        if (dist((width*(parseInt(anno)-2009))/(Object.keys(data).length+1),height/2,mouseX,mouseY)<width/24){
            ellipse((width*(parseInt(anno)-2009))/(Object.keys(data).length+1),height/2,width/6);
            text("Totale: "+(data[anno][1]+data[anno][0]),(width*(parseInt(anno)-2009))/(Object.keys(data).length+1),(height/2)-50);
            text("Maschi: "+data[anno][1]+" | Femmine: "+data[anno][0],(width*(parseInt(anno)-2009))/(Object.keys(data).length+1),(height/2)+50);

        }else{
            ellipse((width*(parseInt(anno)-2009))/(Object.keys(data).length+1),height/2,width/12);
        }
        text(anno,(width*(parseInt(anno)-2009))/(Object.keys(data).length+1),height/2);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
