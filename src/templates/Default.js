import Header from '../components/Header'

const Default = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <footer>Footer</footer>
    </div>
  )
}

export default Default