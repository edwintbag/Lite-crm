        // Chart.js Configuration
        Chart.defaults.color = '#8c8c9a';
        Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';

        // Line Chart
        const lineCtx = document.getElementById('lineChart').getContext('2d');
        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Tickets Created',
                    data: [65, 59, 80, 81, 56, 85],
                    borderColor: '#b759ff',
                    tension: 0.4,
                    fill: false
                }, {
                    label: 'Tickets Solved',
                    data: [45, 50, 66, 70, 45, 75],
                    borderColor: '#45e3ff',
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });

        // Type Donut Chart
        const typeDonutCtx = document.getElementById('typeDonutChart').getContext('2d');
        new Chart(typeDonutCtx, {
            type: 'doughnut',
            data: {
                labels: ['Sales', 'Support', 'Features'],
                datasets: [{
                    data: [300, 150, 100],
                    backgroundColor: ['#4f9afa', '#45e3ff', '#b759ff']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%'
            }
        });

        // Returned Donut Chart
        const returnedDonutCtx = document.getElementById('returnedDonutChart').getContext('2d');
        new Chart(returnedDonutCtx, {
            type: 'doughnut',
            data: {
                labels: ['New Tickets', 'Returned Tickets'],
                datasets: [{
                    data: [250, 150],
                    backgroundColor: ['#b759ff', '#45e3ff']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%'
            }
        });

        // Area Chart
        const areaCtx = document.getElementById('areaChart').getContext('2d');
        new Chart(areaCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                datasets: [{
                    label: 'Response Time',
                    data: [30, 45, 25, 60, 35],
                    borderColor: '#45e3ff',
                    backgroundColor: 'rgba(69, 227, 255, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

        // Bar Chart
        const barCtx = document.getElementById('barChart').getContext('2d');
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                datasets: [{
                    label: 'Tickets',
                    data: [12, 19, 8, 15, 20, 10],
                    backgroundColor: '#45e3ff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

        // Add interactivity to nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });