import Header from '../components/header';
import withMui from '../shared/MUI/withMUI.js'

const Post = ({title = 'This will be the post rendered'}) =>
  <div>
    <Header />
    <h2>{title}</h2>
  </div>

Post.getInitialProps = async () => {

}


export default withMui(Post)