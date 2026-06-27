import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Recepies = () => {
  const [recipes, setRecipes] = useState([])

  async function fetchData() {
    const res = await axios.get('https://dummyjson.com/recipes')
    setRecipes(res.data.recipes)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div style={{ fontFamily:'Segoe UI, sans-serif', padding:'20px', backgroundColor:'#f9f9f9', minHeight:'100vh' }}>

      <h2 style={{ textAlign:'center', marginBottom:'20px' }}>Recipes</h2>

      {recipes.map((rec, i) => (
        <div key={i} style={{ backgroundColor:'#fff', border:'1px solid #ddd', borderRadius:'8px', padding:'16px', marginBottom:'16px' }}>

          <div style={{ display:'flex', gap:'16px', marginBottom:'12px' }}>
            <img src={rec.image} alt={rec.name} style={{ width:'150px', height:'150px', objectFit:'cover', borderRadius:'8px' }} />
            <div>
              <h4 style={{ margin:'0 0 4px 0' }}>{rec.name}</h4>
              <p style={{ margin:'0 0 6px 0', color:'#777', fontSize:'13px' }}>⭐ {rec.rating}</p>
              {rec.mealType.map((mt, j) => (
                <span key={j} style={{ backgroundColor:'#f4a261', color:'#fff', borderRadius:'12px', padding:'2px 10px', fontSize:'12px', marginRight:'4px' }}>{mt}</span>
              ))}
            </div>
          </div>

          <hr style={{ border:'none', borderTop:'1px solid #eee', margin:'0 0 12px 0' }} />

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
            <div style={{ backgroundColor:'#fff8f2', borderRadius:'8px', padding:'10px' }}>
              <b style={{ color:'#c0502a', fontSize:'12px' }}>🧂 Ingredients</b>
              <ul style={{ paddingLeft:'14px', fontSize:'11px', color:'#555', lineHeight:'1.8', marginTop:'6px' }}>
                {rec.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
              </ul>
            </div>
            <div style={{ backgroundColor:'#fff8f2', borderRadius:'8px', padding:'10px' }}>
              <b style={{ color:'#c0502a', fontSize:'12px' }}>📋 Instructions</b>
              <ol style={{ paddingLeft:'14px', fontSize:'11px', color:'#555', lineHeight:'1.8', marginTop:'6px' }}>
                {rec.instructions.map((inc, index) => <li key={index}>{inc}</li>)}
              </ol>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Recepies