import Header from '../components/header';
import withMui from '../shared/MUI/withMUI.js'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { RaisedButton } from 'material-ui'
import Link from 'next/link'
import 'isomorphic-fetch';

const Post = ({title, content}) => 
  <div>
    <Header />
    <Card>
      <CardHeader title={title} />
      <CardText>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <RaisedButton fullWidth={true}>
          <Link href="/" as="/blog" >
            <a>
            Go back to blog!
            </a>
          </Link>
        </RaisedButton>
      ></CardText>
    </Card>
  </div>

Post.getInitialProps = async ({ query : {id}}) => {
  const response = await fetch(`${process.env.BLOGGER_URL}/${id}?key=${process.env.API_KEY}`)
  const data = await response.json()
  const {title} = data
  const {content} = data
  return {
    title,
    content
  }
};

export default withMui(Post)
