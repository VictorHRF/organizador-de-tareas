import React from 'react'

export const EditPomodoro = () => {
  return (
    <div>
        <form>
            <label>
                Titulo: 
                <input type="text" />
            </label>
            <select name="hola" id="">
                <option value="25min">25 min</option>
                <option value="5min">5 min</option>
            </select>
        </form> 
    </div>
  )
}
