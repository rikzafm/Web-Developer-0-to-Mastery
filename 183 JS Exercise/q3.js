const hexToRgb = (hex) => {

    let temp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let r = parseInt(temp[1], 16);
    let g = parseInt(temp[2], 16);
    let b = parseInt(temp[3], 16);

    return `RGB of Hex ${hex} is rgb(${r}, ${g}, ${b})`;
};

const rgbToHex = (r, g, b) => {
    if (r > 255 || g > 255 || b > 255 ||
        r < 0 || g < 0 || b < 0){

        return 'Error, input needs to be above 0 and below 255.';
    }

    let sr = r.toString(16);
    let sg = g.toString(16);
    let sb = b.toString(16);

    if(sr.length === 1){
        sr = sr.padStart(2, '0');
    } 
    if (sg.length === 1){
        sg = sg.padStart(2, '0');
    }
    if (sb.length === 1){
        sb = sb.padStart(2, '0');
    }


    let hex = sr + sg + sb;

    return `Hex of rgb(${r}, ${g}, ${b}) is ${hex} `;

};

const convert = (a, b, c) =>{
    let hexCheck = /[0-9A-Fa-f]{6}/g;
    
    if(hexCheck.test(a)){ //Check if Hex
        return hexToRgb(a);
        
    }
    else{
        return rgbToHex(a, b, c);
    }

};

