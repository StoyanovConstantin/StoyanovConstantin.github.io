/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Symbol_04',
                            symbolName: 'Symbol_04',
                            type: 'rect',
                            rect: ['auto', 'auto', '400', '300', '0px', '0px']
                        },
                        {
                            id: 'Symbol_03',
                            symbolName: 'Symbol_03',
                            type: 'rect',
                            rect: ['0px', 'auto', '400', '300', 'auto', '0px']
                        },
                        {
                            id: 'Symbol_02',
                            symbolName: 'Symbol_02',
                            type: 'rect',
                            rect: ['auto', '0', '400', '300', '0px', 'auto']
                        },
                        {
                            id: 'Symbol_01',
                            symbolName: 'Symbol_01',
                            type: 'rect',
                            rect: ['0', '0', '400', '300', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '960px', '655px', 'auto', 'auto'],
                            sizeRange: ['450px','960px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1072,
                    autoPlay: true,
                    labels: {
                        "start": 998
                    },
                    data: [
                        [
                            "eid186",
                            "bottom",
                            1072,
                            0,
                            "linear",
                            "${Symbol_03}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid188",
                            "bottom",
                            1072,
                            0,
                            "linear",
                            "${Symbol_04}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid177",
                            "right",
                            1072,
                            0,
                            "linear",
                            "${Symbol_02}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid179",
                            "left",
                            1072,
                            0,
                            "linear",
                            "${Symbol_03}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid187",
                            "right",
                            1072,
                            0,
                            "linear",
                            "${Symbol_04}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "frame_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [1, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '400px', '71px', 'auto', 'auto'],
                            fill: ['rgba(120,216,197,1.00)']
                        },
                        {
                            rect: ['13px', '5px', '320px', '36px', 'auto', 'auto'],
                            id: 'Text',
                            text: 'Lorem ipsum dolor sit',
                            font: ['Verdana, Geneva, sans-serif', [28, 'px'], 'rgba(241,241,241,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['13px', '41px', '310px', '30px', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [14, 'px'], 'rgba(17,17,17,1.00)', '400', 'none solid rgb(241, 241, 241)', 'normal', 'break-word', 'normal'],
                            id: 'Text2',
                            text: 'amet consetetur sadipscing elitr',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '400px', '71px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "footer_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['25px', 'auto', '400px', '0px', 'auto', '-324px'],
                            id: 'frame',
                            stroke: [1, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(120,216,197,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['32px', '262px', '320px', '36px', 'auto', 'auto'],
                            id: 'Text',
                            text: 'Lorem ipsum dolor sit',
                            display: 'none',
                            font: ['Verdana, Geneva, sans-serif', [28, 'px'], 'rgba(241,241,241,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['32px', '295px', '310px', '30px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2',
                            text: 'amet consetetur sadipscing elitr',
                            display: 'none',
                            font: ['Verdana, Geneva, sans-serif', [14, 'px'], 'rgba(17,17,17,1.00)', '400', 'none solid rgb(241, 241, 241)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid65",
                            "bottom",
                            250,
                            0,
                            "linear",
                            "${frame}",
                            '-324px',
                            '-324px'
                        ],
                        [
                            "eid48",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            230,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            230,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "height",
                            0,
                            250,
                            "linear",
                            "${frame}",
                            '0px',
                            '70px'
                        ]
                    ]
                }
            },
            "Symbol_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '400px', '300px', 'auto', 'auto'],
                            id: 'img_01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '204px', '400px', '96px', 'auto', 'auto'],
                            id: 'frame_01',
                            fill: ['rgba(0,0,0,0)', 'images/Layer.png', '0px', '98px']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(17, 17, 17)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            display: 'none',
                            id: 'name_01',
                            text: 'Lorem ipsum dolor sit',
                            align: 'left',
                            rect: ['10px', '213px', '328px', '34px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [14, 'px'], 'rgba(47,47,47,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            display: 'none',
                            id: 'des_01',
                            text: 'amet consetetur sadipscing elitr',
                            align: 'left',
                            rect: ['10px', '252px', '328px', '34px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            overflow: 'visible',
                            id: 'Button_01',
                            rect: ['328px', '16px', '50px', '50px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Button.png', '52px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'bg_01',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '400px', '300px', 'auto', 'auto'],
                            fill: ['rgba(255,169,169,0.6)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '400px', '300px', 'auto', 'auto'],
                            display: 'none',
                            id: 'link_01',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,169,169,0.02)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '400px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid93",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${frame_01}",
                            [0,98],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid94",
                            "display",
                            0,
                            0,
                            "linear",
                            "${des_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            998,
                            0,
                            "linear",
                            "${des_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Button_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Button_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3",
                            "background-color",
                            0,
                            750,
                            "linear",
                            "${bg_01}",
                            'rgba(255,169,169,0.6)',
                            'rgba(255,169,169,0.02)'
                        ],
                        [
                            "eid95",
                            "display",
                            0,
                            0,
                            "linear",
                            "${name_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            998,
                            0,
                            "linear",
                            "${name_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            0,
                            0,
                            "linear",
                            "${frame_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            750,
                            0,
                            "linear",
                            "${frame_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            0,
                            0,
                            "linear",
                            "${link_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid99",
                            "display",
                            998,
                            0,
                            "linear",
                            "${link_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${Button_01}",
                            [52,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "Symbol_02": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '400px', '300px', 'auto', 'auto'],
                            id: 'img_02',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '204px', '400px', '96px', 'auto', 'auto'],
                            id: 'frame_02',
                            fill: ['rgba(0,0,0,0)', 'images/Layer.png', '0px', '98px']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(17, 17, 17)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            display: 'none',
                            id: 'name_02',
                            text: 'Lorem ipsum dolor sit',
                            align: 'left',
                            rect: ['10px', '213px', '328px', '34px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [14, 'px'], 'rgba(47,47,47,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            display: 'none',
                            id: 'des_02',
                            text: 'amet consetetur sadipscing elitr',
                            align: 'left',
                            rect: ['10px', '252px', '328px', '34px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            overflow: 'visible',
                            id: 'Button_02',
                            rect: ['328px', '16px', '50px', '50px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Button.png', '52px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'bg_02',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '400px', '300px', 'auto', 'auto'],
                            fill: ['rgba(255,169,169,0.6)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '400px', '300px', 'auto', 'auto'],
                            display: 'none',
                            id: 'link_02',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,169,169,0.02)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '400px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid143",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${Button_02}",
                            [52,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid141",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Button_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid142",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Button_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid146",
                            "display",
                            0,
                            0,
                            "linear",
                            "${name_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid147",
                            "display",
                            998,
                            0,
                            "linear",
                            "${name_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${frame_02}",
                            [0,98],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid138",
                            "display",
                            0,
                            0,
                            "linear",
                            "${link_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            998,
                            0,
                            "linear",
                            "${link_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "display",
                            0,
                            0,
                            "linear",
                            "${frame_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            750,
                            0,
                            "linear",
                            "${frame_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid140",
                            "background-color",
                            0,
                            750,
                            "linear",
                            "${bg_02}",
                            'rgba(255,169,169,0.6)',
                            'rgba(255,169,169,0.02)'
                        ],
                        [
                            "eid144",
                            "display",
                            0,
                            0,
                            "linear",
                            "${des_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid145",
                            "display",
                            998,
                            0,
                            "linear",
                            "${des_02}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Symbol_03": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '400px', '300px', 'auto', 'auto'],
                            id: 'img_03',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '204px', '400px', '96px', 'auto', 'auto'],
                            id: 'frame_03',
                            fill: ['rgba(0,0,0,0)', 'images/Layer.png', '0px', '98px']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(17, 17, 17)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            display: 'none',
                            id: 'name_03',
                            text: 'Lorem ipsum dolor sit',
                            align: 'left',
                            rect: ['10px', '213px', '328px', '34px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [14, 'px'], 'rgba(47,47,47,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            display: 'none',
                            id: 'des_03',
                            text: 'amet consetetur sadipscing elitr',
                            align: 'left',
                            rect: ['10px', '252px', '328px', '34px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            overflow: 'visible',
                            id: 'Button_03',
                            rect: ['328px', '16px', '50px', '50px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Button.png', '52px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'bg_03',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '400px', '300px', 'auto', 'auto'],
                            fill: ['rgba(255,169,169,0.6)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '400px', '300px', 'auto', 'auto'],
                            display: 'none',
                            id: 'link_03',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,169,169,0.02)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '400px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid159",
                            "display",
                            0,
                            0,
                            "linear",
                            "${name_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid160",
                            "display",
                            998,
                            0,
                            "linear",
                            "${name_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid151",
                            "display",
                            0,
                            0,
                            "linear",
                            "${link_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            998,
                            0,
                            "linear",
                            "${link_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid161",
                            "display",
                            0,
                            0,
                            "linear",
                            "${frame_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            750,
                            0,
                            "linear",
                            "${frame_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "display",
                            0,
                            0,
                            "linear",
                            "${des_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid158",
                            "display",
                            998,
                            0,
                            "linear",
                            "${des_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${frame_03}",
                            [0,98],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid154",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${Button_03}",
                            [52,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid155",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Button_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Button_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid153",
                            "background-color",
                            0,
                            750,
                            "linear",
                            "${bg_03}",
                            'rgba(255,169,169,0.6)',
                            'rgba(255,169,169,0.02)'
                        ]
                    ]
                }
            },
            "Symbol_04": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '400px', '300px', 'auto', 'auto'],
                            id: 'img_04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '204px', '400px', '96px', 'auto', 'auto'],
                            id: 'frame_04',
                            fill: ['rgba(0,0,0,0)', 'images/Layer.png', '0px', '98px']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(17, 17, 17)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            display: 'none',
                            id: 'name_04',
                            text: 'Lorem ipsum dolor sit',
                            align: 'left',
                            rect: ['10px', '213px', '328px', '34px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [14, 'px'], 'rgba(47,47,47,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            display: 'none',
                            id: 'des_04',
                            text: 'amet consetetur sadipscing elitr',
                            align: 'left',
                            rect: ['10px', '252px', '328px', '34px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            overflow: 'visible',
                            id: 'Button_04',
                            rect: ['328px', '16px', '50px', '50px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Button.png', '52px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'bg_04',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '400px', '300px', 'auto', 'auto'],
                            fill: ['rgba(255,169,169,0.6)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '400px', '300px', 'auto', 'auto'],
                            display: 'none',
                            id: 'link_04',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,169,169,0.02)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '400px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid172",
                            "display",
                            0,
                            0,
                            "linear",
                            "${name_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            998,
                            0,
                            "linear",
                            "${name_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid175",
                            "display",
                            0,
                            0,
                            "linear",
                            "${frame_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid176",
                            "display",
                            750,
                            0,
                            "linear",
                            "${frame_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid166",
                            "background-color",
                            0,
                            750,
                            "linear",
                            "${bg_04}",
                            'rgba(255,169,169,0.6)',
                            'rgba(255,169,169,0.02)'
                        ],
                        [
                            "eid167",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Button_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid168",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Button_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid164",
                            "display",
                            0,
                            0,
                            "linear",
                            "${link_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid165",
                            "display",
                            998,
                            0,
                            "linear",
                            "${link_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid169",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${Button_04}",
                            [52,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid174",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${frame_04}",
                            [0,98],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid170",
                            "display",
                            0,
                            0,
                            "linear",
                            "${des_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            998,
                            0,
                            "linear",
                            "${des_04}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("anim_edgeActions.js");
})("EDGE-320695945");
