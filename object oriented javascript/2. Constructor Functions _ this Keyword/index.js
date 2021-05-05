

  function CrickerData(name, expertish, age, country){
      this.name
      this.expertish
      this.age
      this.country
      this.text = function() {
        console.log(`Name: ${name} Age: ${age} Expertish: ${expertish} Country: ${country}`)
      }
  }

  const player = new CrickerData('Shakib Al Hassan', 'All-rounder', 31, 'Bangladesh')
  console.log(player.text())
