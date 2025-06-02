 fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch time');
        return response.json();
      })
      .then(data => {
        // data.datetime example: "2025-05-24T17:20:30.123456+05:30"
        const datetime = data.datetime;
        const time = datetime.split('T')[1].split('.')[0]; // Extract HH:MM:SS
        document.getElementById('time').textContent = 'Current time in India: ${time}';
      })
      .catch(error => {
        console.error(error);
        document.getElementById('time').textContent = 'Could not load time.';
      });