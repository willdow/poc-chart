const labels = [0, 5, 10, 15, 20, 25, 30, 12, 32, 43, 54];
const datas = [65, 59, 20, 81, 56, 55, 40, 45, 65, 34, 43];

const ctx = document.getElementById('myChartLiveReload').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: 'My First Live Reload',
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: datas
        }]
    },

    // Configuration options go here
    options: {
        animation: {
            duration: 0
        },
        scales: {
            yAxes: [{
                stacked: true,
                gridLines: {
                    display: true,
                    color: "rgba(255,99,132,0.2)"
                }
            }]
        }
    }
});

const liveReload = () => {
    const rand = () => Math.floor(Math.random() * 100);
    const liveXLabel = chart.data.labels;
    const liveYData = chart.data.datasets[0].data;
    [liveXLabel, liveYData].forEach((liveItem) => {
        liveItem.push(rand());
        liveItem.shift();
    })
    chart.update();
}
setInterval(function () {
    liveReload();
}, 500);
