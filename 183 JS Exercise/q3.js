const hexToRgb = (hex) => {

    let temp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let r = parseInt(temp[1], 16);
    let g = parseInt(temp[2], 16);
    let b = parseInt(temp[3], 16);

    return `RGB of Hex ${hex} is rgb(${r}, ${g}, ${b})`;
};

hexToRgb('23AF8E');

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

    console.log('sb', sb, typeof sb);

    let hex = sr + sg + sb;

    console.log('hex', hex)

    return `Hex of rgb(${r}, ${g}, ${b}) is ${hex} `;

};

rgbToHex(66, 178, 0);

const convert = (a, b, c) =>{
    let hexCheck = /[0-9A-Fa-f]{6}/g;
    
    if(hexCheck.test(a)){ //Check if Hex
        console.log(hexCheck.test(a));
        hexToRgb(a);
        
    }
    else{
        rgbToHex(a, b, c);
    }

};

convert('23AF8E');
// convert(66, 178, 0);