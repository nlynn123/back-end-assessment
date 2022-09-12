const weapons = ["Plants", "Movies with Really Excellent Soundtracks", "Chocolate Things with Peanut Butter"]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "Disbelief destroys the magic.", "Love truth, but pardon error."]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getWeapons: (req, res) => {
        res.status(200).send(weapons)
    },

    addWeapon: (req, res) => {
        let {item} = req.body
        weapons.push(item)

        res.status(200).send(weapons)
    },
    deleteWeapon: (req,res) => {
        let index = req.params.index

        weapons.splice(index, 1)

        res.status(200).send(weapons)
    },

    editWeapon: (req, res) => {
        let index = req.params.index
        let (item) = req.body

        weapons.splice(index, 1, item)
        res.status(200).send(weapons)
    }
}
