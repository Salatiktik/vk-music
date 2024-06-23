import { Panel, PanelHeader} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import { Player } from '../components/Player/Player';
import song from '../assets'

export const Main = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader> Пример использования компонента плеера</PanelHeader>
      <Player song = {song}/>
    </Panel>
  );
};

Main.propTypes = {
  id: PropTypes.string.isRequired,
};
