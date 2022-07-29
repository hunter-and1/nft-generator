const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname,'/input');
const height = 500;
const width = 500;
const baseImageUri = "https://localhost/nft/";

const colorsBoth = [
    {
        step1:'#202126',
        step2:'#202126',
        step3:'#0e0d10',
    },
    {
        step1:'#fce3ab',
        step2:'#fce3ab',
        step3:'#ffc47e',
    },
    {
        step1:'#77bcdb',
        step2:'#77bcdb',
        step3:'#77bcdb',
    },
    {
        step1:'#5e2919',
        step2:'#5e2919',
        step3:'#5e2919',
    },
    {
        step1:'#374f51',
        step2:'#374f51',
        step3:'#374f51',
    },       
];

const colorsBoys = [
    {
        step1:'#b5cbee',
        step2:'#b5cbee',
        step3:'#6098d6',
    },
    {
        step1:'#573625',
        step2:'#573625',
        step3:'#573625',
    },
    {
        step1:'#19191a',
        step2:'#19191a',
        step3:'#76767a',
    },
    
];

const colorsGirl = [
    {
        step1:'#ffebe0',
        step2:'#ffebe0',
        step3:'#ffd4bd',
    },
    {
        step1:'#d86699',
        step2:'#e6a29b',
        step3:'#ecd8c0',
    },
    {
        step1:'#545586',
        step2:'#7b8aaf',
        step3:'#b8edfa',
    },
    
    {
        step1:'#01a862',
        step2:'#02dc92;',
        step3:'#00ffa9',
    },
    {
        step1:'#a9d5f7',
        step2:'#d8acfa',
        step3:'#8f7ac7',
    },
    {
        step1:'#2a2a34',
        step2:'#2a2a34',
        step3:'#14475a',
    },
    {
        step1:'#fcfce4',
        step2:'#fcfce4',
        step3:'#97c11f',
    },
    
];
const gradientRandom = [
    {color1: '#ffafbd' ,color2: '#ffc3a0'},
    {color1: '#2193b0' ,color2: '#6dd5ed'},
    {color1: '#cc2b5e' ,color2: '#753a88'},
    {color1: '#ee9ca7' ,color2: '#ffdde1'},
    {color1: '#42275a' ,color2: '#734b6d'},
    {color1: '#bdc3c7' ,color2: '#2c3e50'},
    {color1: '#de6262' ,color2: '#ffb88c'},
    {color1: '#06beb6' ,color2: '#48b1bf'},
    {color1: '#eb3349' ,color2: '#f45c43'},
    {color1: '#dd5e89' ,color2: '#f7bb97'},
    {color1: '#56ab2f' ,color2: '#a8e063'},
    {color1: '#614385' ,color2: '#516395'},
    {color1: '#eecda3' ,color2: '#ef629f'},
    {color1: '#eacda3' ,color2: '#d6ae7b'},
    {color1: '#02aab0' ,color2: '#00cdac'},
    {color1: '#d66d75' ,color2: '#e29587'},
    {color1: '#000428' ,color2: '#004e92'},
    {color1: '#ddd6f3' ,color2: '#faaca8'},
    {color1: '#7b4397' ,color2: '#dc2430'},
    {color1: '#43cea2' ,color2: '#185a9d'},
    {color1: '#ba5370' ,color2: '#f4e2d8'},
    {color1: '#ff512f' ,color2: '#dd2476'},
    {color1: '#4568dc' ,color2: '#b06ab3'},
    {color1: '#ec6f66' ,color2: '#f3a183'},
    {color1: '#ffd89b' ,color2: '#19547b'},
    {color1: '#3a1c71' ,color2: '#ffaf7b'},
    {color1: '#4ca1af' ,color2: '#c4e0e5'},
    {color1: '#ff5f6d' ,color2: '#ffc371'},
    {color1: '#36d1dc' ,color2: '#5b86e5'},
    {color1: '#c33764' ,color2: '#1d2671'},
    {color1: '#141e30' ,color2: '#243b55'},
    {color1: '#ff7e5f' ,color2: '#feb47b'},
    {color1: '#ed4264' ,color2: '#ffedbc'},
    {color1: '#2b5876' ,color2: '#4e4376'},
];

const LayersBoy = [
    {
        folders:[
            {
                key:'A',
                path: `${dir}\\both\\0-jnahat`
            }
        ],
        //path: `${dir}\\both\\0-jnahat`,
        show:20
    },
    {
        folders:[
            {
                key:'Z',
                path: `${dir}\\both\\9-ch3r-foq`
            },
            {
                key:'E',
                path: `${dir}\\boy\\9-ch3r-foq`
            },
        ],
        //path: [`${dir}\\both\\9-ch3r-foq`,`${dir}\\boy\\9-ch3r-foq`],
        color:true,
        show:50
    },
    {
        folders:[
            {
                key:'R',
                path: `${dir}\\both\\1-ch3r-lor`
            },
            {
                key:'T',
                path: `${dir}\\boy\\1-ch3r-lor`
            },
        ],
        //path: [`${dir}\\both\\1-ch3r-lor`,`${dir}\\boy\\1-ch3r-lor`],
        color:true,
        show:20
    },
    {
        folders:[
            {
                key:'Y',
                path: `${dir}\\both\\38-ardiya`
            },
        ],
        //path: `${dir}\\both\\38-ardiya`,
        show:100
    },
    {
        folders:[
            {
                key:'U',
                path: `${dir}\\both\\2-body`
            },
        ],
        //path: `${dir}\\both\\2-body`,
        show:100
    },
    {
        folders:[
            {
                key:'I',
                path: `${dir}\\both\\3-wjh`
            },
            {
                key:'O',
                path: `${dir}\\boy\\3-wjh`
            },
        ],
        //path: [ `${dir}\\both\\3-wjh`, `${dir}\\boy\\3-wjh`],
        show:100
    },
    {
        folders:[
            {
                key:'P',
                path: `${dir}\\both\\30-pyasat-wjh`
            },
        ],
        //path: `${dir}\\both\\30-pyasat-wjh`,
        show:20,
        color:"#7a1129"
    }, 
    {
        folders:[
            {
                key:'Q',
                path: `${dir}\\both\\6-fm`
            },
        ],
        //path: `${dir}\\both\\6-fm`,
        show:100
    },
    {
        folders:[
            {
                key:'S',
                path: `${dir}\\both\\4-eyebrows`
            },
        ],
        //path: `${dir}\\both\\4-eyebrows`,
        color:true,
        show:100
    },
    {
        folders:[
            {
                key:'D',
                path: `${dir}\\both\\5-eyes`
            },
        ],
        //path: `${dir}\\both\\5-eyes`,
        show:100
    },
    {
        folders:[
            {
                key:'C',
                path: `${dir}\\both\\18-ndarat`
            },
            {
                key:'V',
                path: `${dir}\\both\\19-kmamat`
            },
        ],
        show:10
    },
    {
        folders:[
            {
                key:'F',
                path: `${dir}\\both\\8-ch3ar-9dam`
            },
        ],
        //path: `${dir}\\both\\8-ch3ar-9dam`,
        color:true,
        show:100
    },
    {
        folders:[
            {
                key:'G',
                path: `${dir}\\both\\12-ch3r-9dam`
            },
        ],
        //path: `${dir}\\both\\12-ch3r-9dam`,
        color:true,
        show:100
    },
    {
        folders:[
            {
                key:'H',
                path: `${dir}\\both\\11-ch3r`
            },
            {
                key:'J',
                path: `${dir}\\boy\\11-ch3r`
            },
        ],
        //path: [`${dir}\\both\\11-ch3r`,`${dir}\\boy\\11-ch3r`],
        color:true,
        show:100
    },
    {
        folders:[
            {
                key:'K',
                path: `${dir}\\both\\15-t9achr`
            },
        ],
        //path: `${dir}\\both\\15-t9achr`,
        show:100
    },
    {
        folders:[
            {
                key:'L',
                path: `${dir}\\both\\16-sbrdila`
            },
        ],
        //path: `${dir}\\both\\16-sbrdila`,
        show:100
    },    
    {
        folders:[
            {
                key:'M',
                path: `${dir}\\both\\13-saya`
            },
        ],
        //path: `${dir}\\both\\13-saya`,
        show:100
    },
    {
        folders:[
            {
                key:'W',
                path: `${dir}\\boy\\14-lbsa-kbira`
            },
        ],
        //path: `${dir}\\boy\\14-lbsa-kbira`,
        show:20
    },
    {
        folders:[
            {
                key:'XA',
                path: `${dir}\\both\\14-lbsa-mnfoq`
            },
        ],        
        //path: `${dir}\\both\\14-lbsa-mnfloq-2`,
        show:80
    },
    {
        folders:[
            {
                key:'X',
                path: `${dir}\\both\\14-lbsa-mnfloq-2`
            },
        ],        
        //path: `${dir}\\both\\14-lbsa-mnfloq-2`,
        show:80
    },
    {
        folders:[
            {
                key:'B',
                path: `${dir}\\both\\34-pyasat-lid`
            },
        ], 
        //path: `${dir}\\both\\34-pyasat-lid`,
        show:15
    },
    {
        folders:[
            {
                key:'N',
                path: `${dir}\\both\\36-effects`
            },
        ], 
        //path: `${dir}\\both\\36-effects`,
        show:5
    }
];
const LayersGirl = [
    {
        folders:[
            {
                key:'A',
                path: `${dir}\\both\\0-jnahat`
            },
        ],
        //path: `${dir}\\both\\0-jnahat`,
        show:20
    },
    {
        folders:[
            {
                key:'Z',
                path: `${dir}\\both\\9-ch3r-foq`
            },
            {
                key:'ZA',
                path: `${dir}\\girl\\9-ch3r-foq`
            },
        ],
        //path: [`${dir}\\both\\9-ch3r-foq`,`${dir}\\girl\\9-ch3r-foq`],
        color:true,
        show:50
    },
    {
        folders:[
            {
                key:'R',
                path: `${dir}\\both\\1-ch3r-lor`
            },
            {
                key:'RA',
                path: `${dir}\\girl\\1-ch3r-lor`
            },
        ],
        //path: [`${dir}\\both\\1-ch3r-lor`,`${dir}\\girl\\1-ch3r-lor`],
        color:true,
        show:100
    },
    {
        folders:[
            {
                key:'Y',
                path: `${dir}\\both\\38-ardiya`
            },
        ],
        //path: `${dir}\\both\\38-ardiya`,
        show:100
    },
    {
        folders:[
            {
                key:'U',
                path: `${dir}\\both\\2-body`
            },
        ],
        //path: `${dir}\\both\\2-body`,
        show:100
    },
    {
        folders:[
            {
                key:'OA',
                path: `${dir}\\girl\\3-wjh`
            },
        ],
        //path: `${dir}\\girl\\3-wjh`,
        show:100
    },
    {
        folders:[
            {
                key:'P',
                path: `${dir}\\both\\30-pyasat-wjh`
            },
        ],
        //path: `${dir}\\both\\30-pyasat-wjh`,
        show:20,
        color:"#7a1129"
    },    
    {
        folders:[
            {
                key:'Q',
                path: `${dir}\\both\\6-fm`
            },
        ],
        //path: `${dir}\\both\\6-fm`,
        show:100
    },
    {
        folders:[
            {
                key:'S',
                path: `${dir}\\both\\4-eyebrows`
            },
        ],
        //path: `${dir}\\both\\4-eyebrows`,
        show:100,
        color:true,
    },
    {
        folders:[
            {
                key:'DA',
                path: `${dir}\\girl\\5-eyes`
            },
            {
                key:'D',
                path: `${dir}\\both\\5-eyes`
            },
        ],
        //path: [`${dir}\\girl\\5-eyes`,`${dir}\\both\\5-eyes`],
        show:100
    },
    {
        folders:[
            {
                key:'JA',
                path: `${dir}\\girl\\7-jchomiya`
            },
        ],
        //path: `${dir}\\girl\\7-jchomiya`,
        show:100
    },
    {
        folders:[
            {
                key:'C',
                path: `${dir}\\both\\18-ndarat`
            },
            {
                key:'V',
                path: `${dir}\\both\\19-kmamat`
            },
        ],
        show:10
    },
    {
        folders:[
            {
                key:'F',
                path: `${dir}\\both\\8-ch3ar-9dam`
            },
        ],
        //path: `${dir}\\both\\8-ch3ar-9dam`,
        color:true,
        show:100
    },
    {
        folders:[
            {
                key:'G',
                path: `${dir}\\both\\12-ch3r-9dam`
            },
        ],
        //path: `${dir}\\both\\12-ch3r-9dam`,
        color:true,
        show:100
    },
    {
        folders:[
            {
                key:'H',
                path: `${dir}\\both\\11-ch3r`
            },
            {
                key:'HA',
                path: `${dir}\\girl\\11-ch3r`
            },
        ],
        //path: [`${dir}\\both\\11-ch3r`,`${dir}\\girl\\11-ch3r`],
        color:true,
        show:100
    },
    {
        folders:[
            {
                key:'K',
                path: `${dir}\\both\\15-t9achr`
            },
        ],
        //path: `${dir}\\both\\15-t9achr`,
        show:100
    },
    {
        folders:[
            {
                key:'L',
                path: `${dir}\\both\\16-sbrdila`
            },
        ],
        //path: `${dir}\\both\\16-sbrdila`,
        show:100
    },    
    {
        folders:[
            {
                key:'M',
                path: `${dir}\\both\\13-saya`
            },
        ],
        //path: `${dir}\\girl\\13-saya`,
        show:100
    },    
    {
        folders:[
            {
                key:'SA',
                path: `${dir}\\both\\14-lbsa-kbira`
            },
        ],
        //path: `${dir}\\girl\\14-lbsa-kbira`,
        show:100
    },
    {
        folders:[
            {
                key:'XA',
                path: `${dir}\\both\\14-lbsa-mnfoq`
            },
        ], 
        show:80
    },
    {
        folders:[
            {
                key:'X',
                path: `${dir}\\both\\14-lbsa-mnfloq-2`
            },
        ],
        show:80
    },
    {
        folders:[
            {
                key:'B',
                path: `${dir}\\both\\34-pyasat-lid`
            },
        ],
        show:15
    },
    {
        folders:[
            {
                key:'N',
                path: `${dir}\\both\\36-effects`
            },
        ],
        show:5
    }
];

module.exports = {
    LayersBoy,
    LayersGirl,
    baseImageUri,
    colorsBoth,
    colorsBoys,
    colorsGirl,
    gradientRandom,
    dir,
    height,
    width
};