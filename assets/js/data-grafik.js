const ctx = document.getElementById('myCharts');
// const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
const myCharts = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Target 2022', 'Target 2023', 'Target 2024', 'Target 2025', 'Target 2026'],
        datasets: [{
            label: 'Indeks inovasi daerah',
            data: [2.091, 2.591, 3.091, 3.591, 4.091],
            backgroundColor: [
                'rgba(255, 199, 132, 0.8)',
            ],
            borderColor: [
                'rgba(255, 199, 132, 1)',
            ],
        }, 
        
        {
            label: 'Nilai Sakip',
            data: [58.03, 60.35, 62.90, 64.12, 65.00],
            backgroundColor: [
                'rgba(225, 99, 232, 0.8)',
            ],
            borderColor: [
                'rgba(225, 99, 232, 1)',
            ],
        },

        {
            label: 'INDEKS REFORMASI BIROKRASI',
            data: [40.22, 48.00, 53.60, 57.50, 60.50],
            backgroundColor: [
                'rgba(55, 89, 22, 0.8)',
            ],
            borderColor: [
                'rgba(55, 89, 22, 1)',
            ],
        },

        {
            label: 'INDEKS PEMBANGUNAN MANUSIA (IPM)	',
            data: [68.26, 68.73, 69.19, 69.65, 70.11],
            backgroundColor: [
                'rgba(25, 99, 132, 0.8)',
            ],
            borderColor: [
                'rgba(25, 99, 132, 1)',
            ],
        },
    
    ]

    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});