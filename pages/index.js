import Header from '../components/header';
import withMui from '../shared/MUI/withMUI'

const Index = ({title= 'Welcome to my blog made bt next.js'}) => <div><Header /><h2>{title}</h2></div>

export default withMui(Index)