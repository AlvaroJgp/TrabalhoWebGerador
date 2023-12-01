export default function Card({ children}) {
  const cardStyle = {
    display: 'flex',
    width: '400px',
    height: '200px',
    border: '1.5px solid lightgrey',
    borderRadius: '2px',
    padding: '10px',
    margin: ' 4px 0px 0px 0'
  }
  return (
    <div className="card" style={cardStyle}>
      {children}
    </div>
  )
}
