
(async () => {
    const json = await fetch('./output.json').then((response) => response.json())

    const labels = Object.keys(json);
    const datas = Object.values(json).map((value) => value.totalAmount);

    function chartIt(chart, type) {
        const canvas = document.getElementById(chart);
        const myChart = canvas.getContext('2d');
        const massPopChart = new Chart(myChart, {
            type: type,
            data: {
                labels: labels.slice(0, 20),
                datasets: [
                    {
                        label: 'Events',
                        data: datas.slice(0, 20),
                        backgroundColor: poolColors(29),
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
        return massPopChart;
    };

    let poolColors = function (a) {
        let pool = [];
        for (i = 0; i < a; i++) {
            pool.push(dynamicColors());
        }
        return pool;
    }

    let dynamicColors = function () {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    const c1 = chartIt('myChartOne', 'pie');
    const c2 = chartIt('myChartTwo', 'bar');

    document.getElementById('myChartOne').onclick = function (evt) {
        var activePoints = c1.getElementsAtEvent(evt);
        if (activePoints[0]) {
            var chartData = activePoints[0]['_chart'].config.data;
            var idx = activePoints[0]['_index'];

            var label = chartData.labels[idx];
            var value = chartData.datasets[0].data[idx];

            c1.data.datasets[0].data[idx] = 0;
            
            // const rand = () => Math.floor(Math.random()*100)
            // for ( let i = 0 ; i < c1.data.datasets[0].data.length ; i++) {
            //     c1.data.datasets[0].data[i] = rand();
            // }
            c1.update();
        }
    }

    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }

    function removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }

    setTimeout(() => {
        addData(c2, '75021', 120)
    }, 2000);


    setTimeout(() => {
        removeData(c2)
    }, 4000);

})();

