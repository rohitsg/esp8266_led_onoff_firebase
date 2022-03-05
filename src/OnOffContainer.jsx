
export const OnOffContainer = ({ name, isOn, handleIsOn, color }) => {
  
  return (
    <div className='OnOffContainer-container'>
      <label htmlFor="on">
        <input value='on' checked={isOn === 'on' ? 'on' : false} onChange={(e) => {
          handleIsOn(e, name, color)
        }} type="radio" name={color} id="on" />
        <span>ON</span>
      </label>
      <label htmlFor="off">
        <input value='off' checked={isOn === 'off' ? 'off' : false} onChange={(e) => {
          handleIsOn(e, name, color);
        }} type="radio" name={color} id="off" />
        <span>OFF</span>
      </label>
    </div>
  )
}
