//const json = require('./output.json');
const json = {
    "75001": {
        "totalAmount": 81,
        "event": {
            "Concerts": 62,
            "Nuit Blanche": 5,
            "Événements": 2,
            "Spectacles": 4,
            "Expositions": 4,
            "Animations": 4
        }
    },
    "75002": {
        "totalAmount": 24,
        "event": {
            "Animations": 10,
            "Spectacles": 3,
            "Événements": 2,
            "Nuit Blanche": 2,
            "Expositions": 5,
            "Concerts": 2
        }
    },
    "75003": {
        "totalAmount": 39,
        "event": {
            "Expositions": 11,
            "Animations": 24,
            "Nuit Blanche": 4
        }
    },
    "75004": {
        "totalAmount": 58,
        "event": {
            "Animations": 23,
            "Spectacles": 17,
            "Événements": 7,
            "Nuit Blanche": 3,
            "Expositions": 6,
            "Concerts": 2
        }
    },
    "75005": {
        "totalAmount": 28,
        "event": {
            "Spectacles": 13,
            "Animations": 8,
            "Expositions": 4,
            "Nuit Blanche": 2,
            "Événements": 1
        }
    },
    "75006": {
        "totalAmount": 61,
        "event": {
            "Animations": 46,
            "Expositions": 7,
            "Spectacles": 4,
            "Événements": 1,
            "Nuit Blanche": 1,
            "Concerts": 2
        }
    },
    "75007": {
        "totalAmount": 25,
        "event": {
            "Expositions": 9,
            "Animations": 9,
            "Événements": 2,
            "Nuit Blanche": 4,
            "Concerts": 1
        }
    },
    "75008": {
        "totalAmount": 12,
        "event": {
            "Concerts": 5,
            "Animations": 2,
            "Événements": 2,
            "Expositions": 2,
            "Spectacles": 1
        }
    },
    "75009": {
        "totalAmount": 17,
        "event": {
            "Animations": 7,
            "Concerts": 4,
            "Spectacles": 3,
            "Expositions": 2,
            "Nuit Blanche": 1
        }
    },
    "75010": {
        "totalAmount": 20,
        "event": {
            "Animations": 4,
            "Spectacles": 6,
            "Expositions": 5,
            "Événements": 2,
            "Nuit Blanche": 1,
            "Concerts": 2
        }
    },
    "75011": {
        "totalAmount": 44,
        "event": {
            "Concerts": 6,
            "Nuit Blanche": 1,
            "Animations": 20,
            "Spectacles": 12,
            "Événements": 4,
            "Expositions": 1
        }
    },
    "75012": {
        "totalAmount": 49,
        "event": {
            "Spectacles": 16,
            "Animations": 12,
            "Nuit Blanche": 4,
            "Expositions": 6,
            "Événements": 7,
            "Concerts": 4
        }
    },
    "75013": {
        "totalAmount": 49,
        "event": {
            "Spectacles": 19,
            "Concerts": 6,
            "Animations": 11,
            "Événements": 2,
            "Nuit Blanche": 6,
            "Expositions": 5
        }
    },
    "75014": {
        "totalAmount": 26,
        "event": {
            "Nuit Blanche": 18,
            "Spectacles": 3,
            "Animations": 4,
            "Événements": 1
        }
    },
    "75015": {
        "totalAmount": 40,
        "event": {
            "Spectacles": 23,
            "Expositions": 3,
            "Animations": 11,
            "Nuit Blanche": 1,
            "Événements": 2
        }
    },
    "75016": {
        "totalAmount": 194,
        "event": {
            "Spectacles": 67,
            "Concerts": 118,
            "Événements": 3,
            "Animations": 5,
            "Expositions": 1
        }
    },
    "75017": {
        "totalAmount": 17,
        "event": {
            "Concerts": 11,
            "Expositions": 1,
            "Spectacles": 1,
            "Animations": 2,
            "Événements": 2
        }
    },
    "75018": {
        "totalAmount": 126,
        "event": {
            "Animations": 20,
            "Expositions": 2,
            "Concerts": 75,
            "Spectacles": 18,
            "Événements": 9,
            "Nuit Blanche": 2
        }
    },
    "75019": {
        "totalAmount": 60,
        "event": {
            "Spectacles": 15,
            "Concerts": 15,
            "Nuit Blanche": 8,
            "Animations": 17,
            "Expositions": 2,
            "Événements": 3
        }
    },
    "75020": {
        "totalAmount": 29,
        "event": {
            "Spectacles": 16,
            "Concerts": 3,
            "Nuit Blanche": 1,
            "Événements": 6,
            "Animations": 3
        }
    }
};

let myChart = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
//Chart.defaults.global.defaultFontColor = '#777';

let labels = Object.keys(json)

let datas = Object.values(json).map((value) => value.totalAmount);

let massPopChart = new Chart(myChart, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Events',
                data: datas,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(197, 79, 142, 0.6)',
                    'rgba(38, 14, 202, 0.6)',
                    'rgba(14, 95, 101, 0.6)',
                    'rgba(167, 150, 10, 0.6)',
                    'rgba(93, 214, 155, 0.6)',
                    'rgba(214, 102, 32, 0.6)',
                    'rgba(214, 32, 32, 0.6)',
                    'rgba(132, 114, 93, 0.6)',
                    'rgba(54, 116, 235, 0.6)',
                    'rgba(239, 206, 86, 0.6)',
                    'rgba(8, 14, 202, 0.6)',
                    'rgba(42, 185, 19, 0.6)',
                    'rgba(110, 113, 4, 0.6)',
                    'rgba(138, 14, 202, 0.6)'
                ],
                hoverBorderWidth: 2,
                hoverBorderColor: '#FFF'
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Events in Paris',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#000'
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true,
        }
    }
});