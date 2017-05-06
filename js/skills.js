$(function(){
    var ctx = document.getElementById("myChart");

    var data = {
        labels: ["C", "HTML, CSS, JS", "Java", "Node.js", "PHP", "SQL"],
        datasets: [
            {
                label: "Programming",
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                data: [90, 70, 50, 75, 60, 40],
            }
        ]
    };
    var options = {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    };

    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: data,
        options: options
    });
    
});