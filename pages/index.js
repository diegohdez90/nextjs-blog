import Header from '../components/header';
import withMui from '../shared/MUI/withMUI'
import 'isomorphic-fetch';
import {Card, CardMedia, CardText, CardHeader} from 'material-ui/Card'
import { RaisedButton } from 'material-ui'
import Link  from 'next/link';

const Index = ({posts}) => 
  <div>
    <style jsx>
    {`
      .link-post {
        text-decoration: none;
        font-size: 24px;
        color: #fff;
      }
    `}
    </style>
    <Header />{
      posts.map(x => 
        <Card key={x.id} >
          <CardHeader title={x.title} />
          <CardText>
            <RaisedButton fullWidth={true} primary={true}>
              <Link href={`/post?id=${x.id}`} as={`/blog/${x.id}`}>
                <a className="link-post">Click to view post!</a>
              </Link>
            </RaisedButton>
          </CardText>
        </Card>
    )
    }
  </div>

Index.getInitialProps = async () => {
  const response = await fetch(`${process.env.BLOGGER_URL}?key=${process.env.API_KEY}`)
  const data = await response.json()
  return {
    posts: data.items
  }
}

export default withMui(Index)