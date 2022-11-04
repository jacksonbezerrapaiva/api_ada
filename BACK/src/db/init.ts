import Card from '../model/card.model'

const dbInit = () => {
  Card.sync({ force: true  })
}
export default dbInit ;