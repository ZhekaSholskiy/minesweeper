import './digit.css'

const digitArray:{[key: string]:string} = {
  '0': 'zero-digit',
  '1': 'one-digit',
  '2': 'two-digit',
  '3': 'three-digit',
  '4': 'four-digit',
  '5': 'five-digit',
  '6': 'six-digit',
  '7': 'seven-digit',
  '8': 'eight-digit',
  '9': 'nine-digit',
}

export function Digit(props: {digit: string}) {
  return (
    <div className={`${digitArray[props.digit]} digit-container`}></div>
  )
}
