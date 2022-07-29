const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const path = require('path');
const svgstore = require('svgstore');
const tools = require('simple-svg-tools');

const {
    LayersBoy,
    LayersGirl,
    baseImageUri,
    colorsBoth,
    colorsBoys,
    colorsGirl,
    gradientRandom,
    dir,
    width,
    height
} = require("./config.js");


//const canvas = createCanvas(width, height);
//const ctx = canvas.getContext("2d");

const writeMetaData = (_data,_path) => {
    fs.writeFileSync(_path+".json", JSON.stringify(_data));
};

const metaDataFormat = (_dna,_name,_img,_description,_traits,data) => {
    let dateTime = Date.now();
    return {
        "dna": _dna,
        "name": _name,
        "description": "This is an NFT collection of chibi anime generated random.",
        "image": `${baseImageUri+_img}.png`,
        "date": dateTime,
        "attributes": _traits,
        //"debug":data
    };
};

const createSVGByList = (listSVG) => {
    let finalSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="500" version="1.1">';
    listSVG.forEach(function(_svg){
        let rowSvg = _svg.replaceAll('<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" version="1.1">','').replaceAll('</svg>','');
        finalSVG += rowSvg;
    }); 
    finalSVG += '</svg>';
    return finalSVG;
}

const getColorPalette = (isBoy) => {
    let colorFinal = null;
    if(isBoy == 1)
        colorFinal = colorsBoth.concat(colorsBoys); 
    else
        colorFinal = colorsBoth.concat(colorsGirl); 
    
    return colorFinal[randomIndex(colorFinal.length)];
}

const randomIndex = (length) => {
    return Math.floor(Math.random() * (length));
}
/* 
const loadLayerImg = async (_layerPath) => {
    return new Promise(async (resolve) => {
        const image = await loadImage(`${_layerPath}`);
        resolve({ layerPath: _layerPath, loadedImage: image });
    });
};*/
/* 
const drawElement = (_element) => {

    ctx.drawImage(
        _element.loadedImage,
        0,
        0,
        width,
        height
    );
    //addAttributes(_element);
};*/
/*
const saveImage = (_nameFile) => {
    fs.writeFileSync(
      `./output/${_nameFile}.png`,
      canvas.toBuffer("image/png")
    );
};*/
const probability = (n) => {
    return Math.random() < n;
}
const startCreating = async (clearOutput = false) => {

    if(clearOutput)
    {
        fs.readdir('./output/', (err, files) => {
            if (err) throw err;
          
            for (const file of files) {
              fs.unlink(path.join('./output/', file), err => {
                if (err) throw err;
              });
            }
        });
    }

    let countExsit = 0;
    let countExport = 0;

    let numberNFT = parseInt(process.argv.slice(2)[0]);
    numberNFT = (numberNFT == 0)?1:numberNFT;

    for (let j = 1; j <= numberNFT; j++) {
        let isBoy = Math.random()<0.5?1:0;
        let foldersLayers = (isBoy == 1)?LayersBoy:LayersGirl;
        let colors = getColorPalette(isBoy);

        // Generator layer
        let layerGenerator = [];
        //let nft = svgstore();
        let collection = [];
        let svgList = [];
        let metaTraits = [];

        //add background 
        
        svgList.push(createRandomBackground(isBoy));
        let dna = "";
        foldersLayers.forEach(function(_layer,m){
            let requiredCount = 1;
            //dna
            if(probability(_layer.show/100))
            {
                //if(Array.isArray(_layer.path))
                let _path = _layer.folders[Math.floor(Math.random() * _layer.folders.length)];
        
                let files = fs.readdirSync(_path.path);
                while(requiredCount-- && files.length) {
                    let length = files.length;
                    let selectedIndex = Math.floor(Math.random() * length);
                    let selected = files.splice(selectedIndex, 1);
                    
                    collection.push(path.join(_path.path, selected[0]).replace(dir,'').replaceAll('\\', '/'));
                    
                    dna = dna.concat(concatDNA(_path.key,selected[0]));

                    let svgFound = fs.readFileSync(path.join(_path.path, selected[0])).toString();
                    if(_layer.color != undefined && _layer.color == true)
                    {
                        svgFound = svgFound.replaceAll('#FCFCE4',colors.step1)
                                            .replaceAll('#A0C8DD',colors.step2)
                                            .replaceAll('#5D6EC5',colors.step3)
                    }
                    else if(_layer.color != undefined ){
                        svgFound = svgFound.replaceAll('#6E6E6E',_layer.color)
                    }

                    const regex = /(data-trait-type|data-trait-value)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/gm;
 
                    let m;
                    let type = null;
                    let value = null;

                    while ((m = regex.exec(svgFound)) !== null) {
                        if (m.index === regex.lastIndex) {
                            regex.lastIndex++;
                        }
                        m.forEach((match, groupIndex) => {
                            if(groupIndex == 2)
                            {
                                if(type == null)
                                {
                                    type = match;
                                }
                                else if(type != null)
                                {
                                    value = match;
                                }
                            }
                        });
                    }
                    if(type != null && value != null)
                        metaTraits.push({ "trait_type": type, "value": value });

                    svgList.push(svgFound);

                    //let svg = new tools.SVG(fs.readFileSync(path.join(_path, selected[0]).//toString()));
                    //console.log(svg);
                    //nft.add('layer_'+m,svg);

                }

                
            }
        }); 

        let metaData = metaDataFormat(dna,'Anime Chibi #',dna,'description',metaTraits,collection);
        svgList.push('<!-- '+JSON.stringify(metaData)+' -->');
 
        if (fs.existsSync(`./collected/${dna}.svg`)) {
            console.log('Deja Collected!');
            countExsit++;
        }
        else{
            await tools.ExportSVG(createSVGByList(svgList), `./output/${dna}.svg`).then(() => {
                countExport++;
                console.log('Exported!');
            }).catch(err => {
                console.log(err);
            });            
        }

    }
    return {countExsit:countExsit,countExport:countExport};
    
}
const createRandomBackground = (isBoy) => {
    //let firstColor = '#' + (Math.random().toString(16)+ "000000").substring(2, 8);
    //let secondColor = '#' + (Math.random().toString(16)+ "000000").substring(2, 8);
    let gradientColor = gradientRandom[Math.floor(Math.random() * gradientRandom.length)];
    let rotate = Math.floor(Math.random() * (90 - 0 + 1) + 0);
    let svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" version="1.1">
        <defs>
            <linearGradient id="gradientRandom" gradientUnits="userSpaceOnUse" 
            x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(${rotate})">
                <stop offset="0%" style="stop-color:${gradientColor.color1};stop-opacity:0.5" />
                <stop offset="100%" style="stop-color:${gradientColor.color2};stop-opacity:0.5" />
            </linearGradient>
        </defs>
        <rect id="rect1" x="0" y="0" width="500" height="500" fill="url(#gradientRandom)"/>
    </svg>`;
    return svg;
}

const concatDNA = (key,filename) => {
    filename = parseInt(filename.replaceAll(".svg",'')).toString(16).toLowerCase();
    return key.concat(filename);
}

startCreating(true).then((data) => {
    console.log(`Deja Collected : ${data.countExsit},Exported : ${data.countExport}`);
});


/*/<!--[\s\S]*?-->/ */
