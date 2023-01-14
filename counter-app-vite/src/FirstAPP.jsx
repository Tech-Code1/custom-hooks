import PropTypes from 'prop-types'

const name = () => {
    return 'David'
}

export const FirstAPP = ( {
  title, 
  subtitle,
  name
} ) => {

  if(!title) {
    throw new Error('El title no existe')
  }
    
  return (
    <>
    <h1>{ title } {subtitle}</h1>
    <p>{name}</p>
    </>
  )
}

  
FirstAPP.propTypes = {
  value: PropTypes.number.isRequired,
}

FirstAPP.defaultProps = {
  value: 0
}