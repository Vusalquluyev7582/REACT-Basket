import './App.css'
import Card from './components/Card/Card'
import { useState } from 'react'

function App() {

  // const title = "Texnoloji";
  // const image = "https://picsum.photos/id/0/5000/3333";
  // const info = "Notebook"

  const [example, setExample] = useState([
    {
      id: 1,
      title: "Technology",
      image: "https://picsum.photos/id/0/5000/3333",
      piece: 1,
      info: "Notebook"
    },
    {
      id: 2,
      title: "Friend",
      image: "https://picsum.photos/id/7/4728/3168",
      piece: 1,
      info: "Meeting"
    },
    {
      id: 3,
      title: "Science",
      image: "https://picsum.photos/id/20/3670/2462",
      piece: 1,
      info: "Books"
    },
    {
      id: 4,
      title: "Nature",
      image: "https://picsum.photos/id/14/2500/1667",
      piece: 1,
      info: "Sea"
    }
  ])

  const [basket, setBasket] = useState([]);


  return (
    <>

      <h1>React Basket</h1>
      <h2>Listing</h2>

      <div className="examp">
        {
          example.map((exa, index) => {

            return <Card onClick={() => {
              const arr = [...basket];

              if (arr.findIndex((ind) => {
                return exa.id === ind.id
              }) === -1) {
                arr.push(exa)
                setBasket(arr)
              }

              else {
                arr.map((item) => {
                  if (item.id === exa.id) {
                    return (exa.piece += 1)
                  }
                  setBasket(arr)
                })
              }

              console.log(basket);
            }}

              key={index} title={exa.title} image={exa.image} info={exa.info} piece={exa.piece} />

          })

        }
      </div>

      <div className="basket">

        <h2>Our basket</h2>
        <ul className="basket">
          <li>
            {
              basket.map((exa, index) => {

                return (
                  <li>
                    {exa.title + " ------ " + exa.info + " ------ " + " Piece : "} {" "} +
                    <b style={{ color: "yellow", fontSize: "24px" }}>{exa.piece}</b>
                  </li>
                )

              })

            }
          </li>
        </ul>

        {
          basket.length > 0 ? <button onClick={(() => {
            setBasket([]);
          })}>Clear The Basket</button> : <h2>Your basket is empty</h2>
        }
      </div>

    </>
  )
}

export default App