
(async () => {
    const json = await fetch('./output.json').then((response) => response.json())

    const labels = Object.keys(json);
    const datas = Object.values(json).map((value) => value.totalAmount);

    function chartIt(chart, type) {
        const myChart = document.getElementById(chart).getContext('2d');
        const massPopChart = new Chart(myChart, {
            type: type,
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Events',
                        data: datas,
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
    var poolColors = function (a) {
        var pool = [];
        for(i=0;i<a;i++){
            pool.push(dynamicColors());
        }
        return pool;
    }

    var dynamicColors = function() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    const c1 = chartIt('myChartOne', 'pie');
    const c2 = chartIt('myChartTwo', 'bar');



    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }

    setTimeout(() => {
        addData(c2,'75021', 120)
    }, 2000)

    setTimeout(() => {
        c1.update()
    }, 2000)

    function removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }
})();

