async function getJSON() {
    lap = document.getElementsByName('lap')[0].value
    console.log(lap)
    await fetch(`https://ergast.com/api/f1/2019/${lap}/driverStandings.json`)
        .then(data => data.json())
        .then(rawData => {
            let racers = rawData.MRData.total
            //let main_data = 
            for(let i = 0; i <3; i++){
                let constructor_name = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
                display_constructors = document.createElement('h1')
                display_constructors.innerHTML = constructor_name
                document.body.append(display_constructors)
            }
            display_racers = document.createElement('h3')
            if (!racers) {
                display_racers.innerHTML = "LOADING..."
                document.body.append(display_racers)
            } else {
                display_racers.innerHTML = racers
                document.body.append(display_racers)
            }
        })
        .catch(error => {
            if (error) {
                console.log('An error has occured while getting data')
            }
        })
}
