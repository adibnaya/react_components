import Button from '../components/Button';
import { GoBell, GoCloudOffline, GoFilter, GoThumbsdown } from 'react-icons/go';
import { GiBomber } from 'react-icons/gi';

function ButtonPage() {
  return (
    <div>
      <h1>Reading List</h1>
      <div>
        <Button primary>
          <GoBell/>
          hi
        </Button>
      </div>
      <div>
        <Button secondary rounded outline>
          <GoCloudOffline/>
          Bla
        </Button>
      </div>
      <div>
        <Button warning>
          <GoFilter/>
          Show me
        </Button>
      </div>
      <div>
        <Button danger>
          <GoThumbsdown/>
          I do
        </Button>
      </div>
      <div>
        <Button success>
          <GiBomber/>
          I do not
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;