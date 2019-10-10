
(async () => {

    const json = await fetch('./output.json').then((response) => response.json());
    const labels = Object.keys(json);
    const datas = Object.values(json).map((value) => value.totalAmount);

    function chartIt(chart, type) {
        const myChart = document.getElementById(chart).getContext('2d');
        const massPopChart = new Chart(myChart, {
            type: type,
            data: {
                labels: labels.slice(0, 20),
                datasets: [
                    {
                        label: 'Events',
                        data: datas.slice(0, 20),
                        backgroundColor: poolColors(21),
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

    const poolColors = (a) => {
        let pool = [];
        for (let i = 0; i < a; i++) {
            pool.push(dynamicColors());
        }
        return pool;
    }

    const dynamicColors = () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    const c1 = chartIt('myChartOne', 'pie');
    const c2 = chartIt('myChartTwo', 'bar');

    [['myChartOne', [c1]],['myChartTwo', [c2]]].forEach(([chartId, someCharts]) => {
        document.getElementById(chartId).onclick = function (evt) {
            someCharts.forEach((aChart) => {
                let activePoints = aChart.getElementsAtEvent(evt)[0];
                if (activePoints) {
                    console.log('activePoints', activePoints);
                    let idx = activePoints['_index'];
                    const rand = () => Math.floor(Math.random() * 100)
                    aChart.data.datasets[0].data[idx] = rand();
                    aChart.update();
                }
            })
        }
    })

    const addData = (chart, label, data) => {
        window.joey=chart;
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }

    const removeData = (chart) => {
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

